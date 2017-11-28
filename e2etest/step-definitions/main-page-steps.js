// ../step-definitions/main-page.js

const mainPageObject = require('../page-objects/main-page-object');

module.exports = function () {
  this.Given(/^I am at the main page of the security request system$/, function () {
    return helpers.loadPage(mainPageObject.url);
  });

  this.Then(/^I should see the main page logo and background image$/, function (callback) {
    callback();
  });
};
