/* Express server handling file, server.js*/
/* Read here for more information regarding the structure of this file: https://blog.risingstack.com/your-first-node-js-http-server/ */

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

var expressValidator = require('express-validator');
//var forceSSL = require('express-force-ssl');
//var httpsRedirect = require('express-https-redirect');

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
//server.use(forceSSL);
//server.set('forceSSLOptions', {
//  enable301Redirects: true,
//  trustXFPHeader: false,
//  httpsPort: 3005,
//  sslRequiredMessage: 'SSL Required.'
//});

//server.use('/', httpsRedirect());

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
server.use('/customer', request);

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


// The following code launches the TLS v1.2 server
// To be merged into main server when everything is suitable
// Can be accessed at port: 3005
// Created with reference to: https://www.sitepoint.com/how-to-use-ssltls-with-node-js/
// https://nodejs.org/api/tls.html#tls_tls_ssl_concepts
// https://github.com/nodejs/help/issues/253


//Generate encrypted key in terminal with: openssl genrsa -des3 -out server.enc.key 1024


//Issue certificate signing request with: openssl req -new -key server.enc.key -out server.csr
//The following is our server.enc.key field entries:


{/*Country Name (2 letter code) [AU]:CA
State or Province Name (full name) [Some-State]:British Columbia
Locality Name (eg, city) []:Vancouver
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Simon Fraser University
Organizational Unit Name (eg, section) []:Security Services
Common Name (e.g. server FQDN or YOUR name) []:CMPT 373
Email Address []:cwzhang@sfu.ca

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:cmpt373
An optional company name []:SFU */}


//If required, remove the encryption/password with: openssl rsa -in server.enc.key -out server.key


//Self sign the certificate with: openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
//Certificate lasts 365 days from creation.


// To be completed. Need to make it work for server and client side handshakes, and have client generate a certificate as necessary.

const HttpPort = 3004;
const TLSPort = 3005;

var fs = require('fs');
var http = require('http');
var https = require('https');

//Set the options for creating the server, includes the TLS key and certification
var options = {
    key  : fs.readFileSync('server.key'),
    cert : fs.readFileSync('server.crt')
};

http.createServer(server).listen(HttpPort, () => {
  console.log(`The http server is running at http://localhost:${port}/`);
});
//Creates the HTTPS/TLS server on TLSPort
https.createServer(options, server).listen(TLSPort, () => {
     console.log('The HTTPS/TLS server is running on port ' + TLSPort);
});

//
// Launch the server
// -----------------------------------------------------------------------------
server.listen(port, () => {
 console.log(`The browsersync server is running at http://localhost:${port}/`);
});
