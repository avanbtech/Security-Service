"use strict";

import db from '../data/db';
import exportMethods from '../PyScripts/childProcPy'
import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';

import dbMethods from './dbCommitMethods';


//Sets up the mailing server given parameters
const EMAILSERVICE= 'gmail';
const EMAILADDR = 'cmpt373gammafrom@gmail.com';
const EMAILADDR_PASSWORD = 'Cmpt373gamma';
const EMAIL_SERVER_PORT = 25;

let transporter = nodemailer.createTransport({
  service: EMAILSERVICE,
  secure: false,
  port: EMAIL_SERVER_PORT,
  auth: {
      user: EMAILADDR,
      pass: EMAILADDR_PASSWORD,
  },
  tls:{
    rejectUnauthorized:false
  }
});

//Base function that sends different types of emails using EMAILSERVICE address
//Takes req, subject line, and email contents as arguments.
function sendMailTemplate(req, subjectLine, emailContents) {
  let mailOptions = {
    from: EMAILSERVICE,
    to: req.body.email,
    subject: subjectLine,
    text: emailContents,
  };
  transporter.sendMail(mailOptions, (error, info)=>{
     if(error){
        console.log(error);
    }
    console.log("Email sent from sendMailTemplate successfully!");
    console.log(info);
   });
}

//Sends an email to the user
function sendemailToUser(req) {

const emailSubject = 'We have recieved your request!';
const emailText = 'We have received your security services request, we will get back to you as soon as it is processed.';

  sendMailTemplate(req, emailSubject, emailText);
  console.log("sendemailToUser function called successfully!");
}

//Sends an email to the user approving their security request
function sendemailToUserWithApproval(req) {

  const emailSubject = 'We have approved your request.';
  const emailText = 'We have approved your security request. It will now be forwarded into the next step of the process!';

    sendMailTemplate(req, emailSubject, emailText);
    console.log("sendemailToUserWithApproval function called successfully!");
}

//Sends an email to the user rejecting their security request
function sendemailToUserWithRejection(req) {

  const emailSubject = 'We have rejected your request...';
  const emailText = 'We have rejected your security request because your request does not meet our requirements.';

    sendMailTemplate(req, emailSubject, emailText);
    console.log("sendemailToUserWithRejection function called successfully!");
}



function checkNotEmpty(req) {
  req.checkBody('date', 'date name must be specified').notEmpty();
  req.checkBody('department', 'department must be specified').notEmpty();
  req.checkBody('requestedBy', 'requestedBy name must be specified').notEmpty();
  req.checkBody('phone', 'phone must be specified').notEmpty();
  req.checkBody('fax', 'fax is optional');
  req.checkBody('nameOfEvent', 'nameOfEvent name must be specified').notEmpty();
  req.checkBody('licensed', 'licensed name must be specified').notEmpty();
  req.checkBody('location', 'location name must be specified').notEmpty();
  req.checkBody('eventDate', 'eventDate name must be specified').notEmpty();
  req.checkBody('detail', 'detail name must be specified').notEmpty();
  req.checkBody('firstName', 'firstName name must be specified').notEmpty();
  req.checkBody('lastName', 'lastName name must be specified').notEmpty();
  req.checkBody('userName', 'userName name must be specified').notEmpty();
  req.checkBody('email', 'email name must be specified').notEmpty();
  req.checkBody('id', 'id name must be specified').notEmpty();
  req.checkBody('numberOfAttendees', 'numberOfAttendees name must be specified').notEmpty();
  req.checkBody('time', 'time name must be specified').notEmpty();
}

function filterInput(req) {
  req.filter('date').escape();
  req.filter('date').trim();
  req.filter('department').escape();
  req.filter('department').trim();
  req.filter('requestedBy').escape();
  req.filter('requestedBy').trim();
  req.filter('phone').escape();
  req.filter('phone').trim();
  req.filter('fax').escape();
  req.filter('fax').trim();
  req.filter('nameOfEvent').escape();
  req.filter('nameOfEvent').trim();
  req.filter('licensed').escape();
  req.filter('licensed').trim();
  req.filter('location').escape();
  req.filter('location').trim();
  req.filter('eventDate').escape();
  req.filter('eventDate').trim();
  req.filter('detail').escape();
  req.filter('detail').trim();
  req.filter('firstName').escape();
  req.filter('firstName').trim();
  req.filter('lastName').escape();
  req.filter('lastName').trim();
  req.filter('userName').escape();
  req.filter('userName').trim();
  req.filter('email').escape();
  req.filter('email').trim();
  req.filter('id').escape();
  req.filter('id').trim();
  req.filter('numberOfAttendees').escape();
  req.filter('numberOfAttendees').trim();
  req.filter('time').escape();
  req.filter('time').trim();
}

exports.request_post = function (req, res, next) {
  checkNotEmpty(req);
  filterInput(req);

  dbMethods.commitRequestToDB(req);
  sendemailToUser(req);

  res.redirect('/');
};

exports.get_accessID = function (req, res, next) {
  req.checkBody('referenceID', 'Reference ID must be specified').notEmpty();
  req.filter('referenceID').escape();
  req.filter('referenceID').trim();

  res.redirect('/StatusForm/' + req.body.referenceID);
  console.log(req.body.referenceID);
};

exports.request_approve = function (req, res, next) {
  req.filter('requestID').escape();
  req.filter('requestID').trim();

  req.checkBody('supervisor', 'Supervisor must be specified').notEmpty();
  req.checkBody('distribution', 'Distribution must be specified').notEmpty();
  req.checkBody('guardRegularRate', 'Guard regular rate must be specified').notEmpty();
  req.checkBody('guardRegularHours', 'Guard regular hours must be specified').notEmpty();
  req.checkBody('guardOTRate', 'Guard overtime rate must be specified').notEmpty();
  req.checkBody('guardOTHours', 'Guard overtime hours must be specified');
  req.checkBody('scspRegularRate', 'SCSP regular rate must be specified').notEmpty();
  req.checkBody('scspRegularHours', 'SCSP regular hours must be specified').notEmpty();
  req.checkBody('scspOTRate', 'SCSP overtime rate must be specified').notEmpty();
  req.checkBody('scspOTHours', 'SCSP overtime hours must be specified');
  req.checkBody('totalGuardBillable', 'Total guard billable must be specified').notEmpty();
  req.checkBody('totalSCSPBillable', 'Total SCSP billable must be specified').notEmpty();
  req.checkBody('preparedBy', 'PreparedBy field must be specified').notEmpty();
  req.checkBody('signature', 'No signature is provided').notEmpty();
  req.filter('supervisor').escape();
  req.filter('supervisor').trim();
  req.filter('distribution').escape();
  req.filter('distribution').trim();
  req.filter('distributionOther').escape();
  req.filter('distributionOther').trim();
  req.filter('guardRegularRate').escape();
  req.filter('guardRegularRate').trim();
  req.filter('guardRegularHours').escape();
  req.filter('guardRegularHours').trim();
  req.filter('guardOTRate').escape();
  req.filter('guardOTRate').trim();
  req.filter('guardOTHours').escape();
  req.filter('guardOTHours').trim();
  req.filter('scspRegularRate').escape();
  req.filter('scspRegularRate').trim();
  req.filter('scspRegularHours').escape();
  req.filter('scspRegularHours').trim();
  req.filter('scspOTRate').escape();
  req.filter('scspOTRate').trim();
  req.filter('scspOTHours').escape();
  req.filter('scspOTHours').trim();
  req.filter('totalGuardBillable').escape();
  req.filter('totalGuardBillable').trim();
  req.filter('totalSCSPBillable').escape();
  req.filter('totalSCSPBillable').trim();
  req.filter('preparedBy').escape();
  req.filter('preparedBy').trim();
  req.filter('signature').escape();
  req.filter('signature').trim();


  dbMethods.commitApproveToDB(req);
  sendemailToUserWithApproval(req);
  res.redirect('/ServiceView');
};

exports.request_reject = function (req, res, next) {
  req.filter('requestID').escape();
  req.filter('requestID').trim();

  sendemailToUserWithRejection(req);

  db.models.request.update(
    {status : 'Rejected'},
    {where: {accessID: req.body.requestID}},
  ).then(() => {
    res.redirect('/ServiceView');
  });
};

exports.check_status = function (req, res, next) {
  req.checkBody('referenceID', 'Reference ID must be specified').notEmpty();
  req.filter('referenceID').escape();
  req.filter('referenceID').trim();

  res.redirect('/StatusForm');
};

exports.export_to_pdf = function (req, res, next) {

  exportMethods.exportReqToPDF(req.body.referenceID);

  // Have to wait about 10 seconds to let the python script finish
  // running and then locate the file in the ExportedPDFs directory
  // Couldn't find a method to sleep thread in JS (wtf)
  setTimeout(() => {
    let filePath = exportMethods.locateFilePath(req.body.referenceID, false);

    if (filePath) {
      console.log(`File path was: ${filePath}`);

      res.download(filePath.toString(), 'request.pdf');
    } else {
      console.log("INVALID PATH");
      // TODO: SHOW AN ALERT INSTEAD OF A REDIRECTION
      res.redirect("/");
    }
  }, 10000);
};
