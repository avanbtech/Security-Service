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
  
  res.redirect('/');
};
