var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    
var driver_fx = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('localhost:3001');

driver.findElement(By.name('q')).sendKeys('webdriver');

driver.sleep(1000).then(function() {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});

driver.findElement(By.name('btnK')).click();

driver.sleep(2000).then(function() {
  driver.getTitle().then(function(title) {
    if(title === 'webdriver - Security System') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
  });
});

driver.quit();