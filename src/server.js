import 'babel-polyfill';
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import schema from './data/schema';
import Router from './routes';
import assets from './assets';
import { port, auth, analytics } from './config';
import dbMethods from './data/dbFetchMethods';
import expG from './data/exportGuardsPDF';

var expressValidator = require('express-validator');

const server = global.server = express();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
server.use(express.static(path.join(__dirname, 'public')));
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(expressValidator());

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/graphql', expressGraphQL(req => ({
  schema,
  graphiql: true,
  rootValue: { request: req },
  pretty: process.env.NODE_ENV !== 'production',
})));


server.use('/exportGuards', async(req, res) => {

  //TODO: ADD AUTH CHECK
  //TODO: CHANGE REQ TO BE PASSED IN WITH THE REQ

  const reqID = req.body.referenceID;

  let data = [];

  await expG.exportGuards(reqID).then((resp) => {
    console.log(`EXPORTED TO ${resp}`);
    data = resp;
  });

  setTimeout(() => {
    if(data) {
      res.download(data);
    } else {
      // TODO SHOW PROMPT INSTEAD OF REDIRECT
      res.redirect("/");
    }
  }, 5000);

});

server.use('/servicedt', async (req, res) => {

  //TODO: ADD AUTH CHECK
  let data = null;
  await dbMethods.getReqForServiceView().then((resp) => {
    data = resp;
  });

  res.setHeader('Content-Type', 'application/json');

  const final = {
    reqData: data,
  };

  res.json(final);
});

server.use('/stcheck', async (req, res) => {
  //TODO: ADD AUTH CHECK
  let data = null;

  await dbMethods.getReqForStatusView(req.body.referenceID).then((resp) => {
    data = resp;
  });
  res.setHeader("content-type" ,"application/arraybuffer");

  const final = {
    reqData: data,
  };

  res.json(final);
});

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200;
    const template = require('./views/index.jade');
    const data = { title: '', description: '', css: '', body: '', entry: assets.main.js };

    if (process.env.NODE_ENV === 'production') {
      data.trackingId = analytics.google.trackingId;
    }

    const css = [];
    const context = {
      insertCss: styles => css.push(styles._getCss()),
      onSetTitle: value => (data.title = value),
      onSetMeta: (key, value) => (data[key] = value),
      onPageNotFound: () => (statusCode = 404),
    };

    await Router.dispatch({ path: req.path, query: req.query, context }, (state, component) => {
      data.body = ReactDOM.renderToString(component);
      data.css = css.join('');
    });

    res.status(statusCode);
    res.send(template(data));
  } catch (err) {
    next(err);
  }
});



// Handle POST requests
var request = require('./routes/request');
server.use('/', request);

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const template = require('./views/error.jade');
  const statusCode = err.status || 500;
  res.status(statusCode);
  res.send(template({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
  }));
});

var CASAuthentication = require('cas-authentication');

var cas = new CASAuthentication({
    cas_url         : 'https://cas.sfu.ca/cas/login',
    service_url     : 'https://cmpt373-1177g.cmpt.sfu.ca',
    cas_version     : '3.0',
    renew           : true,
    is_dev_mode     : false,
    dev_mode_user   : '',
    dev_mode_info   : {},
    session_name    : 'cas_user',
    session_info    : 'cas_userinfo',
    destroy_session : false
});

var session = require('express-session');

// Set up an Express session, which is required for CASAuthentication.
server.use( session({
    secret            : 'super secret key',
    resave            : false,
    saveUninitialized : true
}));


// Unauthenticated clients will be redirected to the CAS login and then back to
// this route once authenticated.
server.get( '/Customer', cas.bounce, function ( req, res ) {
    res.send( '<html><body>Hello!</body></html>' );
});


//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
