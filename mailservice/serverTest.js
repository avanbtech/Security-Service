'use strict'
const nodemailer = require('nodemailer');
const SMTPConnection = require('./library/smtp-connection');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'localhost',
        port: 2525,
        secure: false, // true for 465, false for other ports
        auth: {
            type: 'LOGIN',
            user: 'testuser',
            pass: 'testpass',
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'junrutao@gmail.com', // sender address
        to: 'junrut@sfu.ca', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});
