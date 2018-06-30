/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');
var path = require('path');
var fs = require('fs');
/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
  // coverage:'report/coverage/',
  // coverageDir: getCodeCoveragePath('report')
  
};


/**
 * reading first directory from coverage folder
 */
// function getCodeCoveragePath(srcpath){  
//     if (!fs.existsSync(srcpath)){
//         fs.mkdirSync(srcpath);      
//     }else
//     {
//         return fs.readdirSync(srcpath).filter(function(file) {
//             return fs.statSync(path.join(srcpath, file)).isDirectory();
//         });       
//     }
  
// }
/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  //exclude: [/jquery/],
  directory: 'bower_components'
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
