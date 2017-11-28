// ../step-definitions/serviceview-page-steps.js

const serviceviewPageObject = require('../page-objects/serviceview-page-object.js');

module.exports = function () {
  this.Given(/^I am at the service view page of the security request system$/, function () {

  	driver.manage().window().setSize(1280, 720);
    return helpers.loadPage(serviceviewPageObject.url).then(function () {
    	driver.sleep(1800);
    });
  });

  this.Then(/^I should see the service view page and background image$/, function (callback) {
    callback();
  });
};
