import db from '../core/db';

var NUM = "0000";
var YEAR = "00";

function uniqueID() {
	var d = new Date();
	var fullYear = d.getFullYear().toString(); // eg. 2017
	var abbrevYear = fullYear.slice(-2); // eg. 17

	var oldYear = parseInt(YEAR);
	abbrevYear = parseInt(abbrevYear);

	if(oldYear < abbrevYear) {
		YEAR = abbrevYear.toString();
		NUM = "0000";
	}
	abbrevYear = abbrevYear.toString();

	var num = incrementNum();
	
	var ID = abbrevYear + "-" + num;

	return ID;
}

//increase the sequential number - max number is 9999
function incrementNum() {
	var integer = parseInt(NUM);

	if (integer == 0) {
		NUM = "0001";
		return integer;
	}

	if (integer < 10000) {
		integer++;
	}

	integer = integer.toString();
	while (integer.length < 4) {
		integer = "0" + integer;
	}

	NUM = integer;
	return integer;
}

function getCurrDate() {
  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth();
  var day = today.getDay();

  return year + '-' + month + '-' + day;
}

function stringBody(req) {

  console.log("\n\n\nHERE\n\n\n");

  db.models.form.create({
  	uniqueid: uniqueid();
    id: req.body.id,
    status: 'Processing',
    statusDate: getCurrDate(),
    sfuBCID: req.body.id,
    department: 'INSERT DEPARTMENT HERE',    // NO WAY TO GET THE DEPT
    date: getCurrDate(),
    requestBy: req.body.requestBy,
    phone: req.body.phone,
    fax: req.body.fax,
    email: req.body.email,
    nameOfevent: 'NAME OF EVENT',      // UNABLE TO GET THE NAME OF EVENT
    licensed: req.body.licensed,
    location: req.body.location,
    numberOfattendees: 10000, //UNABLE TO RETRIEVE NUM FROM FORM USING TEMP NUMBER
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


  // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  // var request = new XMLHttpRequest();
  // request.responseType = 'json';
  // request.open("POST", "/graphql");
  // request.setRequestHeader("Content-Type", "application/json");
  // request.setRequestHeader("Accept", "application/json");
  //
  //
  //
  // var mutation_str = `'{"query": "mutation {addForm(id: ${req.body.id},
  // status: \"${req.body.date}\", statusDate: \"2017-10-3\",
  // sfuBCID: \"gdg\", department: \"dsfn\", date: \"2017-10-3\",
  // requestBy: \"45353\", phone: \"34242\", fax: \"\", email: \"sankait@sfu.ca\",
  // nameOfevent: \"dajn\", licensed: 234342, location: \"burnaby\", numberOfattendees: 2331,
  // eventDates: \"2017-08-9;2017-09-08\", times: 2331, details: \"Fsdf\",
  // accountCode: 3324, invoice: 32432, authorizedBy: \"Fsfds\", authorizedID: \"fsdfdsF\",
  // authorizedDate: \"2017-10-3\", authorizedPhone: \"3r43r4f\"){id}}"}'`;
  //
  // request.send(mutation_str);
  // request.onload = function () {
  //   console.log('\n\ndata returned:', xhr.response);
  // }

  //console.log(mutation_str);
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


