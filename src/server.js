/*jshint esversion: 6 */

// requires
const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
// Using request module to make HTTP requests from the server
// https://www.npmjs.com/package/request
const request = require('request');
const port = process.env.PORT || 7070;

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use static directory
app.use(express.static('./src/public'));

// route requires
const githubRouter = require('./routes/github.router');
const mailRouter = require('./routes/mail.router');
const indexRouter = require('./routes/index.router');

// use routes
app.use('/github', githubRouter);
app.use('/mail', mailRouter);

app.use('/', indexRouter); // catch all must be last

// server listening
app.listen(port, () => {
    console.log('Server listening on port: ', port);
}); // end listen