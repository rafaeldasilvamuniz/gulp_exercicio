/*const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}*/

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))

}

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
          .pipe(sourcemaps.init())
          .pipe(sass({
             outputStyle: 'compressed'
          }))
          .pipe(sourcemaps.write('./maps'))
          .pipe(gulp.dest('./build/styles'));
}

/*function teste(callback){
    setTimeout(function(){
        console.log("Executando gulp");
        callback();
    },1490)
    //callback();
}*/

/*function oi(callback){
    setTimeout(function(){
        
    }, 1200);
    console.log("OI teste gulp");
    callback();
    adeus();
}*/

function adeus(){
   console.log("Adeus...");
   //callback();
}

//exports.default = gulp.series(teste,oi);
//exports.oi = oi;
//exports.default = gulp.parallel(teste,oi);//gulp de forma paralela ganha em performance, é mais rápido do que o series.
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;
exports.default = function(){
    gulp.watch('./source/styles/*.scss', { ignoreInitial:false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial:false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial:false }, gulp.series(comprimeImagens));
}