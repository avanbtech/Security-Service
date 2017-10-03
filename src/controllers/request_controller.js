var NUM = "0000";
var YEAR = "00";
function uniqueID() {
  var d = new Date();
  var fullYear = d.getFullYear(); // eg. 2017
  var abbrevYear = fullYear.slice(-2); // eg. 17
  checkForNewYear(abbrevYear);
  var num = incrementNum();

  var ID = abbrevYear + "-" + num;
  return ID;
}
//increase the sequential number - max number is 9999
function incrementNum() {
  var integer = parseInt(NUM)
  if (integer < 10000 && integer != 0) {
    integer++;
  }
  integer.toString();
  while (integer.length() < 5) {
    integer = "0" + integer;
  }
  NUM = integer;
  return integer;
}
//check if the year has changed - if yes, reset sequential number and
// set YEAR to the new year
//does nothing if the year is the same as the sequential number should not be
// reset till the year changes
function checkForNewYear(abbrevYear) {
  var oldYear = parseInt(YEAR);
  parseInt(abbrevYear);
  if(oldYear < abbrevYear) {
    YEAR = abbrevYear.toString();
    NUM = "0000";
  }
}

exports.request_post = function(req, res, next) {
  console.log(req.body);

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

  res.redirect('/');
};
