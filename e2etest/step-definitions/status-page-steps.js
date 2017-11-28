// ../step-definitions/status-page-steps.js

const statusPageObject = require('../page-objects/status-page-object.js');

module.exports = function () {
  this.Given(/^I am at the status page of the security request system$/, function () {

  	driver.manage().window().setSize(1280, 720);
    return helpers.loadPage(statusObject.url).then(function () {
    	driver.sleep(1800);
    });
  });

  this.Then(/^I should see the status page and background image$/, function (callback) {
    callback();
  });
};
