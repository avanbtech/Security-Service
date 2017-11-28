// ../step-definitions/main-page.js

const mainPageObject = require('../page-objects/main-page-object');

module.exports = function () {
  this.Given(/^I am at the main page of the security request system$/, function () {

  	driver.manage().window().setSize(1280, 720);
    return helpers.loadPage(mainPageObject.url).then(function () {
    	driver.sleep(1800);
    });
  });

  this.Then(/^I should see the main page logo and background image$/, function (callback) {
    callback();
  });

  this.When(/^I click the request form button$/, function (callback) {
  	callback();
  });

  this.When(/^I click the check status button$/, function (callback) {
  	callback();
  });

  this.When(/^I click the service view button$/, function (callback) {
  	callback();
  });

  this.When(/^I click the export data button$/, function (callback) {
  	callback();
  });

  this.Then(/^I should see the request form page$/, function (callback) {
  	callback();
  });

  this.Then(/^I should see the status page$/, function (callback) {
  	callback();
  });

  this.Then(/^I should see the service view page$/, function (callback) {
  	callback();
  });

  this.Then(/^I should see the export data page$/, function (callback) {
  	callback();
  });
};
