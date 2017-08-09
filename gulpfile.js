// TODO: 
/* 
* Gulp-sass
* Gulp-plumber
* refactor distributional folder
*/

const gulp = require('gulp');
const server = require('gulp-server-livereload');
const concat = require('gulp-concat');
const flatten = require('gulp-flatten');


const del = require('del');
const webpack = require('webpack-stream');

// Compiles Application components
gulp.task('compile', ()=> {
  return gulp
    .src('')
    .pipe(webpack( require('./webpack.config.app.js') ))
    .pipe(gulp.dest('./dist'));
});

// Bundles dependencies and polyfills
gulp.task('bundle', ()=> {
  return gulp
    .src('')
    .pipe(webpack( require('./webpack.config.dependencies.js') ))        
    .pipe(gulp.dest('./dist'));
});

// Task for emptying the distributional folder
gulp.task('clean:dist', ()=> {
  return del('./dist/**/*');
});

// Copying html and templates to distributional folder
gulp.task('copy:indexfile', ()=> {
  return gulp
    .src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
})

gulp.task('serve', ()=> {
  return gulp
    .src('./dist/')
    .pipe(server({
      livereload: true,
      open: true,
      defaultFile: 'index.html',
      port: '8080'
    }));
});

// publish templates
gulp.task('copy:templates', ()=> {
  return gulp
    .src('./src/app/**/*.html')
    .pipe(flatten())
    .pipe(gulp.dest('./dist/templates/'));
});

// Watch task
gulp.task('watch', ()=> {
  gulp.watch('./src/app/**/*.ts', ['compile']);
  gulp.watch('./src/index.html', ['copy:indexfile']);
  gulp.watch('./src/app/**/*.html', ['copy:templates']);
});

gulp.task('default', ['clean:dist' , 'bundle', 'compile', 'copy:indexfile', 'copy:templates', 'serve', 'watch'], ()=> {
  console.log('Development Environment running');
});