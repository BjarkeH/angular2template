// TODO: 
/* 
* Gulp-sass
* Gulp-plumber
* refactor distributional folder
*/

const Port = "80";

const gulp = require('gulp');
const server = require('gulp-server-livereload');
const concat = require('gulp-concat');
const flatten = require('gulp-flatten');
const sass = require("gulp-sass");
const plumber = require('gulp-plumber');
const pug = require("gulp-pug");

const del = require('del');
const webpack = require('webpack-stream');

// Compiles Application components
gulp.task('compile', ()=> {
  return gulp
    .src('')    
    .pipe(webpack( require('./webpack.config.app.js') ))
    .on('error', function handleError(){
      this.emit('end'); // Recover from errors // - Webpack won't cooperate with plumber ;/ 
    })
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

gulp.task("compile:sass", ()=> {
  return gulp
    .src(["./src/**/*.sass", "./src/**/*.scss"])
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded"      
    }))
    .pipe(flatten())
    .pipe(gulp.dest("./dist/assets/css/"));
});

// Copying html and templates to distributional folder
gulp.task('copy:indexfile', ()=> {
  return gulp
    .src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
})


// - Might want to use gulp-connect for this 
gulp.task('serve', ()=> {
  return gulp
    .src('./dist/')
    .pipe(server({
      livereload: true,
      open: true,
      defaultFile: 'index.html',
      port: Port
    }));
});

// publish templates
gulp.task('copy:templates', ()=> {
  return gulp
    .src(['./src/**/*.html', '!./src/index.html'])
    .pipe(flatten())
    .pipe(gulp.dest('./dist/templates/'));
});

gulp.task('copy:templates:pug', ()=> {
  return gulp
    .src("./src/**/!(_)*.pug")
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(flatten())
    .pipe(gulp.dest("./dist/templates/"));
});

gulp.task('copy:fonts', ()=> {

});

// Watch task
gulp.task('watch', ()=> {
  gulp.watch('./src/**/*.ts', ['compile']);
  gulp.watch('./src/index.html', ['copy:indexfile']);
  gulp.watch('./src/**/*.html', ['copy:templates']);
  gulp.watch('./src/**/*.sass', ['compile:sass']);
  gulp.watch('./src/**/*.pug', ['copy:templates:pug']);
});

gulp.task('default', ['clean:dist' , 'bundle', 'compile', 'compile:sass', 'copy:indexfile', 'copy:templates', 'copy:templates:pug', 'serve', 'watch'], ()=> {
  console.log("\n *************");
  console.log('Development Environment running on localhost:' + Port.toString());
  console.log("\n *************\n");
});