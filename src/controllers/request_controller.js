import db from '../core/db';
import saveToPDF from '../PyScripts/saveToPDF';
import request from 'request';

var NUM = '0000';
var YEAR = '00';

function uniqueID() {
  var d = new Date();
  var abbrevYear = d.getFullYear().toString().slice(-2);

  var oldYear = parseInt(YEAR);
  abbrevYear = parseInt(abbrevYear);

  if (oldYear < abbrevYear) {
    YEAR = abbrevYear.toString();
    NUM = '0000';
  }

  return String(abbrevYear) + '-' + IncNum();
}

function IncNum() {
  var int_num = parseInt(NUM);

  if (int_num !== null && int_num < 10000) {
    int_num += 1;
  }

  NUM = String(int_num);

  while (NUM.length < 4) {
    NUM = '0' + NUM;
  }

  return NUM;
}

function getCurrDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDay();

  return year + '-' + month + '-' + day;
}

function getCommonDBID() {
  const date = new Date();

  return parseInt(String(date.getTime()).slice(-7) + String(date.getMinutes()));
}

function makeReq() {

  const query = `{\"query\":\"{user{dbID}}\"}`;

  var options = {
    method: 'post',
    body: query, // Javascript object
    json: false, // Use,If you are sending JSON data
    url: 'http://localhost:3001/graphql',
    headers: {
      'Content-type': 'application/json',
    },
  };

  request(options, (err, res, body) => {
    if (err) {
      console.log('Error :', err);
      return;
    }
    console.log(' Body :', body);
  });
}

function commitToDB(req) {
  const commonDbID = getCommonDBID();
  const uni_ID = uniqueID();

  console.log(req.body.date);

  db.models.user.create({
    dbID: commonDbID,
    sfuBCID: req.body.id,
    department: 'INSERT DEPARTMENT HERE',    // NO WAY TO GET THE DEPT
    requestBy: req.body.requestBy,
    phone: req.body.phone,
    fax: req.body.fax,
    email: req.body.email,
    licensed: req.body.licensed,      // make mandatory
  });

  db.models.event.create({
    dbID: commonDbID,
    nameOfEvent: req.body.nameOfEvent,      // UNABLE TO GET THE NAME OF EVENT
    location: req.body.location,
    numberOfattendees: req.body.numberOfAttendees, // UNABLE TO RETRIEVE NUM FROM FORM USING TEMP NUMBER
    eventDates: [req.body.eventDate],   // TODO: CONFIRM DATES ARE JOINED BY ';'
    times: req.body.time,
  });

  db.models.request.create({
    accessID: uni_ID,
    dbID: commonDbID,
    eventDbID: commonDbID,
    userDbID: commonDbID,
    status: 'Pending',
    statusDate: new Date(),
    date: req.body.date,
    details: req.body.detail,
    accountCode: req.body.accountCode,
    invoice: 99999,
    authorizedBy: req.body.authorizedBy,
    authorizedID: req.body.authorizedID,
    authorizedDate: req.body.authorizedDate,
    authorizedPhone: 7782415848,
  });

  makeReq();

  // Un comment to run the PDF saving python script
  // saveToPDF(req);
}

exports.request_post = function (req, res, next) {
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

  commitToDB(req);


  res.redirect('/');
};

exports.request_view = function () {
  console.log('abcd');
};
