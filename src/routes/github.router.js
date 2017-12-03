/*jshint esversion: 6 */

// requires
const express = require('express');
const router = express.Router();
const request = require('request');

// API Key & username environment variables
let username = process.env.USER_NAME;
let oauthToken = process.env.GIT_TOKEN;

// github API user options
const user_options = {
    url: 'https://api.github.com/users/' + username,
    headers: {
        'User-Agent': 'request',
        'Authorization': 'token ' + oauthToken
    } // end headers
}; // end user_options

// github API repo options
const repo_options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
        'User-Agent': 'request',
        'Authorization': 'token ' + oauthToken
    } // end headers
}; // end repo_options

// get for github user information
router.get('/user', (req, res) => {
    request(user_options, (error, response, body) => {
        if (response && response.statusCode == 200) {
            res.send(body);
        } else {
            res.sendStatus(500);
        } // end else
    }); // end request
}); // end get

// get for github repo information
router.get('/repos', (req, res) => {
    request(repo_options, (error, response, body) => {
        if (response && response.statusCode == 200) {
            res.send(body);
        } else {
            res.sendStatus(500);
        } // end else
    }); // end request
}); // end get



// export
module.exports = router;