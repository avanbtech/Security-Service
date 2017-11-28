/* server.js
** Controls the middleware and starting of our web server - npm start
*/

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
import axios from 'axios';
import jwt from 'jsonwebtoken';


var expressValidator = require('express-validator');

const server = global.server = express();

const parseString = require('xml2js').parseString;

const JWT_SECRET_KEY = "TEAM GAMMA";

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

server.use('/login', (req, res) => {
  // Service URL for deployment: https%3A%2F%2Fcmpt373-1177g.cmpt.sfu.ca%2Flogin

  axios.get(`https://cas.sfu.ca/cas/serviceValidate?ticket=${req.query.ticket}&service=http%3A%2F%2Flocalhost%3A3000%2Flogin`).then((resp) => {
    //console.log(resp.data);

    parseString(resp.data, function (err, result) {
      //console.log(result['cas:serviceResponse']['cas:authenticationSuccess']);

      try {
        const data = {
          user : result['cas:serviceResponse']['cas:authenticationSuccess'][0]['cas:user'],
        };

        const token = jwt.sign(data, JWT_SECRET_KEY);

        res.redirect("/ServiceView" + `?token=${token}`);

      } catch(e) {
        console.log(`Login Failed: ${e}`);
        res.redirect("/");
      }

    });
  });
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




server.use('/exportGuards', async(req, res) => {

  try {

    //TODO: ADD AUTH CHECK
    // USE THIS CODE TO AUTHENTICATE
    // const token = req.body.token;
    //
    // jwt.verify(token, JWT_SECRET_KEY);

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

  } catch(e) {
    console.log("INVALID TOKEN");
    res.send("INVALID TOKEN");
  }



});

server.use('/servicedt', async (req, res) => {

  try {
    //TODO: ADD AUTH CHECK
    const token = req.body.token;
    jwt.verify(token, JWT_SECRET_KEY);

    let data = null;
    await dbMethods.getReqForServiceView().then((resp) => {
      data = resp;
    });

    res.setHeader('Content-Type', 'application/json');

    const final = {
      reqData: data,
    };


    res.json(final);
  } catch(e) {
    res.send('https://sfu.ca');
  }
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


//
// Launches the server
// For development purposes, check localhost:3001
// -----------------------------------------------------------------------------
server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
