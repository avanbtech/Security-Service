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

import axios from 'axios';

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
// Authentication
// -----------------------------------------------------------------------------
// server.use(expressJwt({
//   secret: auth.jwt.secret,
//   credentialsRequired: false,
//   /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
//   getToken: req => req.cookies.id_token,
//   /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */
// }));

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/graphql', expressGraphQL(req => ({
  schema,
  graphiql: true,
  rootValue: { request: req },
  pretty: process.env.NODE_ENV !== 'production',
})));


server.use('/servicedt', async (req, res) => {
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
// Launch the server
// -----------------------------------------------------------------------------
server.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`The server is running at http://localhost:${port}/`);
});

/*
var fs = require('fs');
var http = require('http');
var https = require('https');

//Set the options for creating the server, includes the TLS key and certification
var options = {
    key  : fs.readFileSync('server.key'),
    cert : fs.readFileSync('server.crt')
};

const HttpPort = 3002;
const TLSPort = 3005;

http.createServer(server).listen(HttpPort, () => {
  console.log(`The http server is running at http://localhost:${port}/`);
});

https.createServer(options, server).listen(TLSPort, () => {
    console.log('The HTTPS/TLS server is running on port ' + TLSPort);
});
*/
