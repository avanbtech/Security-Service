// ../step-definitions/exportdata-page-steps.js

const exportdataPageObject = require('../page-objects/exportdata-page-object.js');

module.exports = function () {
  this.Given(/^I am at the export data page of the security request system$/, function () {

  	driver.manage().window().setSize(1280, 720);
    return helpers.loadPage(exportdataPageObject.url).then(function () {
    	driver.sleep(1800);
    });
  });

  this.Then(/^I should see the export data page and background image$/, function (callback) {
    callback();
  });
};
