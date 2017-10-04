import db from '../core/db';

var NUM = "0000";
var YEAR = "00";

function uniqueID() {
  var d = new Date();
  var abbrevYear = d.getFullYear().toString().slice(-2);

  var oldYear = parseInt(YEAR);
  abbrevYear = parseInt(abbrevYear);

  if(oldYear < abbrevYear) {
    YEAR = abbrevYear.toString();
    NUM = "0000";
  }

  return abbrevYear.toString() + "-" + IncNum();
}

// function uni_ID() {
//   var date = new Date();
//   var fullYear = date.getFullYear();

//   return fullYear.toString().substr(2) + "-" + IncNum();
// }

// //increase the sequential number - max number is 9999
// function incrementNum() {
// 	var integer = parseInt(NUM);
//
// 	if (integer === 0) {
// 		NUM = "0001";
//
// 		integer = integer.toString();
// 		while (integer.length < 4) {
// 		integer = "0" + integer;
// 		}
// 		return integer;
// 	}
//
// 	if (integer < 10000) {
// 		integer++;
// 	}
//
// 	integer = integer.toString();
// 	while (integer.length < 4) {
// 		integer = "0" + integer;
// 	}
//
// 	NUM = integer;
// 	return integer;
// }

function IncNum() {
  var int_num = parseInt(NUM);

  if(int_num !== null && int_num < 10000) {
    int_num += 1;
  }

  NUM = String(int_num);

  while(NUM.length < 4) {
    NUM = "0" + NUM;
  }

  return NUM;
}

function getCurrDate() {
  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth();
  var day = today.getDay();

  return year + '-' + month + '-' + day;
}

function stringBody(req) {

  db.models.form.create({

    id: uniqueID(),
    status: 'Processing',
    statusDate: getCurrDate(),
    sfuBCID: req.body.id,
    department: 'INSERT DEPARTMENT HERE',    // NO WAY TO GET THE DEPT
    date: getCurrDate(),
    requestBy: req.body.requestBy,
    phone: req.body.phone,
    fax: req.body.fax,
    email: req.body.email,
    nameOfEvent: req.body.nameOfEvent,      // UNABLE TO GET THE NAME OF EVENT
    licensed: req.body.licensed,      // make mandatory
    location: req.body.location,
    numberOfattendees: 10000,         //UNABLE TO RETRIEVE NUM FROM FORM USING TEMP NUMBER
    eventDates: [req.body.eventDate],
    times: req.body.time,
    details: req.body.detail,
    accountCode: req.body.accountCode,
    invoice: 99999,
    authorizedBy: 'Insert Person here',
    authorizedID: '42342fkfdsf',
    authorizedDate: new Date(2012, 2,2,0,0,0,0),
    authorizedPhone: 7782415848
  });

  console.log(uniqueID());
}


exports.request_post = function(req, res, next) {


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

  stringBody(req);

  res.redirect('/');
};


