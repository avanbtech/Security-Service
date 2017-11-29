const gulp = require('gulp');
const run = require('gulp-run');

gulp.task('test', function () {
  return run('cd e2etest && node ../node_modules/selenium-cucumber-js/index.js').exec();
});

const argv = require('yargs').argv;
gulp.task('singletest', function () {
  if(argv.feature) {
    return run('cd e2etest && node ../node_modules/selenium-cucumber-js/index.js -f ./features/' + argv.feature + '.feature').exec();
  }
});

gulp.task('default', ['test']);
