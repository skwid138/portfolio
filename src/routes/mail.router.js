/*jshint esversion: 6 */

// requires
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// contact user
const contactCredentials = {
    username: process.env.EMAIL_UN,
    pw: process.env.EMAIL_PW
}; // end contactCredentials

// hunter's email
const hunter = 'hunter@rancourt.pro';

// setup email configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: contactCredentials.username,
        pass: contactCredentials.pw
    } // end auth
}); // end transporter

// post route for sending emails to hunter 
// and the sender from the contact user
router.post('/', (req, res) => {
    console.log('in mail / post');

    // email string of sender
    const sender = req.body.sender;
    // message string from sender
    const message = req.body.message;
    // subject string defined by sender
    const subject = req.body.subject;

    // object to send
    const mailConfig = {
        from: contactCredentials.username,
        to: sender + ', ' + hunter,
        subject: subject,
        html: '<p>' + message + '</p>'
    }; // end mailConfig
    
    // send message using the above information
    transporter.sendMail(mailConfig, function (err, info) {
        if (err) {
            console.log('sendMail error: ', err);
            res.sendStatus(500);
        } else {
            console.log('Message sent: ', info.messageId, info.response);
            res.sendStatus(200);
        } // end else
    }); // end message
}); // end post

// export
module.exports = router;