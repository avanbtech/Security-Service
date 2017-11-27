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


server.use('/guardjobcheck', async(req, res) =>{
  let data = null;
  await dbMethods.getReqForGuardJobs(req.body.dispatchNumber).then((resp) => {
    data = resp;
  });

server.use('/login', (req, res) => {
  console.log("LOGIN ATTEMPT");

  console.log(req.query.ticket);

});





  res.setHeader('Content-Type', 'application/json');

  const final = {
    reqData: data,
  };

  res.json(final);
});

server.use('/guardcheck', async(req, res) =>{
  let data = null;
  await dbMethods.getReqForGuardView().then((resp) => {
    data = resp;
  });

  res.setHeader('Content-Type', 'application/json');

  const final = {
    reqData: data,
  };

  res.json(final);
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


//
// Launches the server
// For development purposes, check localhost:3001
// -----------------------------------------------------------------------------
server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});
