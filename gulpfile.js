var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    gulpts = require('gulp-typescript'),
    mocha = require('gulp-mocha');
    
    
    
//create a tsproject varible for running task buildsrc
var tsProjectSrc = gulpts.createProject('tsconfig.json');

var sourceFolder="./src/**/*.ts";
var testFolder="./test/**/*.spec.js";

//buildsrc ts files with typescript
gulp.task('buildsrc', function() {
    
  var tsResult = gulp.src(sourceFolder).pipe(tsProjectSrc());
    return tsResult.js.pipe( gulp.dest('lib/') )
    

});


//watch src files and run buildsrc task
gulp.task('watchsrc', ['buildsrc'], function() {
    gulp.watch(sourceFolder, ['buildsrc']);
    
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}
//run spec tests with mocha
gulp.task('test',['buildsrc'], function() {
    
    return gulp.src([testFolder], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', handleError);
        
});





//watch *.spec.js files and run runspectest
gulp.task('watch_test', ['test'], function() {
    gulp.watch(testFolder, ['test']);
    
});


//default tasks
gulp.task('default',['watchsrc','watch_test']);