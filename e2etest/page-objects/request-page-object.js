// ../page-objects/request-page-object.js

module.exports = {
  url: 'http://localhost:3001/Customer',

  elements: {
  	dateInputField: by.id(''),
  	departmentInputField: by.id(''),
  	requestByInputField: by.id(''),
  	SFUIDBCIDInputField: by.id(''),
  	phoneInputField: by.id(''),
  	emailInputField: by.id(''),
  	typeNameOfEventInputField: by.id(''),
  	licensedTrueBox: by.id(''),
  	licensedFalseBox: by.id(''),
  	attendeesInputField: by.id(''),
  	eventDateInputField: by.id(''),
  	timesInputField: by.id(''),
  	detailsInputField: by.id(''),
  	accountCodeInputField: by.id(''),
  	invoiceCheckBox: by.id(''),
  	authorizationInputField: by.id(''),
  	authSFUBCIDInputField: by.id(''),
  	authDateInputField: by.id(''),
  	authSigInputField: by.id(''),
  	authPhoneInputField: by.id(''),
  	authEmergencyInputField: by.id(''),
  	agreeCheckBox: by.id(''),
  	submitButton: by.id(''),
  }
};
