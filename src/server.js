/*jshint esversion: 6 */
"use strict";

// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Using request module to make HTTP requests from the server
// https://www.npmjs.com/package/request
const request = require('request');
const port = process.env.PORT || 7070;

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// API Key & username are environment variables in Heroku
var username = process.env.USER_NAME;
var oauthToken = process.env.GIT_TOKEN;

// use static directory
app.use(express.static('./src/public'));

// route requires
const indexRouter = require('./routes/index.router');

// use routes
app.use('/', indexRouter);

// server listening
app.listen(port, () => {
    console.log('Server listening on port: ', port);
}); // end listen