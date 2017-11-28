// ../step-definitions/request-page-steps.js

const requestPageObject = require('../page-objects/request-page-object.js');

module.exports = function () {
	  this.Given(/^I am at the request form page of the security request system$/, function () {

  	driver.manage().window().setSize(1280, 720);
    return helpers.loadPage(requestPageObject.url).then(function () {
    	driver.sleep(1800);
    });
  });

  this.Then(/^I should see the request form page and background image$/, function (callback) {
    callback();
  });
};
