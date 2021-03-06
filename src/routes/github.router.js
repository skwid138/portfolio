/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const request = require('request');

// API Key & username environment variables
const username = process.env.USER_NAME;
const oauthToken = process.env.GIT_TOKEN;
const headers = {
	'User-Agent': 'request',
	'Authorization': `token ${oauthToken}`,
}

// github API user options
const user_options = {
    url: `https://api.github.com/users/${username}`,
    headers: headers,
};

// github API repo options
const repo_options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: headers,
};

// get for github user information
router.get('/user', (req, res) => {
    request(user_options, (error, response, body) => {
        if (response && response.statusCode == 200) {
            res.send(body);
        } else {
            res.sendStatus(500);
        }
    });
}); // end get

// get for github repo information
router.get('/repos', (req, res) => {
    request(repo_options, (error, response, body) => {
        if (response && response.statusCode == 200) {
            res.send(body);
        } else {
            res.sendStatus(500);
        }
    });
}); // end get

module.exports = router;