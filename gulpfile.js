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
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');

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
      open: false,
      defaultFile: 'index.html',
      port: '8080'
    }));
});

// publish templates
gulp.task('copy:templates', ()=> {
  // return gulp
  //   .src(['./src/**/*.html', '!./src/index.html'])
  //   .pipe(flatten())
  //   .pipe(gulp.dest('./dist/templates/'));
});

gulp.task('copy:templates:jade', ()=> {
  return gulp
    .src('./src/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(flatten())
    .pipe(gulp.dest('./dist/templates/'));
});

gulp.task("copy:templates:pug", ()=> {
  return gulp
    .src("./src/**/*.pug")
    .pipe(flatten())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("./dist/templates/"));
});
//- style.css
gulp.task("compile:sass", ()=> {
  return gulp
    .src('./src/**/*.sass')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded'
    }))  
    .pipe(flatten())
    .pipe(gulp.dest('./dist/assets/css/'));    
});
//- style.min.css
gulp.task("compile:sass:min", ()=> {
  return gulp
    .src('./src/**/*.sass')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(flatten())
    .pipe(gulp.dest('./dist/assets/css'));
});

// Watch task
gulp.task('watch', ()=> {
  gulp.watch('./src/**/*.ts', ['compile']);
  gulp.watch('./src/index.html', ['copy:indexfile']);
  gulp.watch('./src/**/*.html', ['copy:templates']);
  gulp.watch('./src/**/*.jade', ['copy:templates:jade']);
  gulp.watch('./src/**/*.sass', ['compile:sass']);
});

gulp.task("copy:fonts", ()=> {
  return gulp
    .src("./node_modules/bootstrap-sass/assets/fonts/**/*")
    .pipe(flatten())
    .pipe(gulp.dest("./dist/assets/fonts/bootstrap/"));
});

gulp.task("copy:images", ()=> {
  return gulp
    .src("./src/images/**/*")
    .pipe(flatten())
    .pipe(gulp.dest("./dist/assets/images/"));
});

gulp.task('default', ['clean:dist' , 'bundle', 'compile', 'compile:sass', 'compile:sass:min', 'copy:indexfile', 'copy:templates', 'copy:fonts', 'copy:images', 'copy:templates:jade', 'serve', 'watch'], ()=> {
  console.log('Development Environment running');
});