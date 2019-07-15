const gulp = require('gulp');
const babel = require('gulp-babel');
var selenium = require('selenium-standalone');
var shell = require('gulp-shell')
var winston = require('winston');

//var fatalLevel = require('yargs').argv.fatal;

var ERROR_LEVELS = ['error', 'warning'];

function isFatal(level) {
   //return ERROR_LEVELS.indexOf(level) <= ERROR_LEVELS.indexOf(fatalLevel || 'error');
   return true;
}

function handleError(level, error) {
   winston.log(level, error);
   if (isFatal(level)) {
      process.exit(1);
   }
}

// Convenience handler for error-level errors.
function onError(error) {
	if(selenium.child)
		selenium.child.kill();
	handleError.call(this, 'error', error);
}
// Convenience handler for warning-level errors.
function onWarning(error) { handleError.call(this, 'warn', error);}

winston.configure({
    transports: [
      new (winston.transports.File)({ filename: './logs/GulpBuildLog.log'}),
	  new (winston.transports.Console)()
    ]
  });

gulp.task('transpile', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            "presets": ['es2015']
        }))
        .pipe(gulp.dest('.'))
		.on('error', function(err){onError(err);});
});

gulp.task('test',['transpile'], shell.task([
  'gauge --env qa --log-level debug --tags test specs/'
]));

gulp.task('parallelTest',['transpile'], shell.task([
  'gauge run --parallel -n=4 --env qa --log-level debug specs/'
]));

gulp.task('puppeteerTest',['transpile'], shell.task([
  'gauge run --env qa --log-level debug --tags puppeteer specs/'
]));

gulp.task('uiTest',['transpile'], shell.task([
  'gauge run --env qa --log-level debug --tags angular specs/'
]));

gulp.task('dbTest',['transpile'], shell.task([
  'gauge run --env qa --verbose --tags db specs/'
]));

gulp.task('restTest',['transpile'], shell.task([
  'gauge run --env qa --verbose --tags rest specs/'
]));

gulp.task('mobileTest',['transpile'], shell.task([
  'gauge --env qa --verbose --tags mobile specs/'
]));
