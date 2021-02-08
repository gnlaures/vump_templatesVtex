var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

// styles
gulp.task('styles', function() {
    return gulp.src(['_source/css/compile/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(sourcemaps.write('./'))
        .pipe(rename({ suffix: '-min' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(minifycss())
});

// scripts
gulp.task('scripts', function(done) {
    gulp.src(['_source/js/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.init())
        .pipe(rename({ suffix: '-min' }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js'))
    done();
});

// Libraries - JS Files
var jsLibraries__files = [
    '_libraries/isjs/is.min.js',
    '_libraries/_forms/forms.min.js',
    '_libraries/laures/laures.js',
    '_libraries/fancybox/jquery.fancybox.min.js',
    '_libraries/swiper/swiper.min.js',
    //'_libraries/splide/splide.min.js',
    '_libraries/aos/aos.js',
];
gulp.task('jsLibraries', function(done) {
    gulp.src(jsLibraries__files)
        .pipe(concat('libraries-min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
    done();
});

//Libraries - CSS Files
var cssLibraries__files = [
    '_libraries/fancybox/jquery.fancybox.min.css',
    '_libraries/swiper/swiper.min.css',
    //'_libraries/splide/splide.min.css',
    //'_libraries/splide/splide-skyblue.min.css',
    '_libraries/aos/aos.css',
];
gulp.task('cssLibraries', function(done) {
    gulp.src(cssLibraries__files)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(concat('libraries-min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css/'));
    done();
});

// Default
gulp.task('default', gulp.series('styles', 'scripts', 'jsLibraries', 'cssLibraries', function(done) {
    done();
}));

// Watch
gulp.task('watch', function(done){
    gulp.watch('_source/css/**/*.scss', gulp.series('styles'));
    gulp.watch('_source/js/*.js', gulp.series('scripts'));
    gulp.watch('_libraries/**/*.js', gulp.series('jsLibraries'));
    gulp.watch('_libraries/**/*.css', gulp.series('cssLibraries'));
    done();
});