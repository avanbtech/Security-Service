const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');



let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
      user: 'cmpt373gammafrom@gmail.com',
      pass: 'Cmpt373gamma'
  },
  tls:{
    rejectUnauthorized:false
  }
});

let mailOptions = {
  from: 'cmpt373gammafrom@gmail.com',
  to: 'cmpt373gammato@gmail.com',
  subject: 'tsettsetset',
  text: 'One line test',
};

transporter.sendMail(mailOptions, (error, info)=>{
   if(error){
      console.log(error);
  }
  console.log("sent");
  console.log(info);
 });
