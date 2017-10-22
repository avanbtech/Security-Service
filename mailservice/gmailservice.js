const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: 'cmpt373gammafrom@gmail.com',
      clientId:,
      clientSecret: ,
      refreshToken: ,
    })
  }
})

let mailOptions = {
  from: 'cmpt373gammafrom@gmail.com',
  to: 'cmpt373gammato@gmail.com',
  subject: 'tsettsetset',
  text: 'One line test',
}
