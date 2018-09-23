/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// contact user
const contactCredentials = {
    username: process.env.EMAIL_UN,
    pw: process.env.EMAIL_PW,
};
const hunter = 'hunter@rancourt.pro';

// setup email configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: contactCredentials.username,
        pass: contactCredentials.pw,
    },
}); // end transporter

// post route for sending emails to hunter and the sender from the contact user
router.post('/', (req, res) => {
    //console.log('in mail / post');

    const sender = req.body.sender; // email string of sender
    const message = req.body.message; // message string from sender
    const subject = req.body.subject; // subject string defined by sender

    // object to send
    const mailConfig = {
        from: contactCredentials.username,
        to: `${sender}, ${hunter}`,
        subject: subject,
        html: `<p>${message}</p>`,
    }; // end mailConfig
    
    // send message using the above information
    transporter.sendMail(mailConfig, function (err, info) {
        if (err) {
            console.log('sendMail error: ', err);
            res.sendStatus(500);
        } else {
            //console.log('Message sent: ', info.messageId, info.response);
            res.sendStatus(200);
        }
    });
}); // end post

module.exports = router;