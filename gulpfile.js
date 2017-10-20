const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

// handles gulp errors
function handleErrors (error){
    console.error(error);
    this.emit('end');
}

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss', 'src/scss/base/*.scss'])
        .pipe(sass())
        .on('error', handleErrors)
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move JS Files to src/js
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/wowjs/dist/wow.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Move animate.css to src/css
gulp.task('animate', function() {
    return gulp.src(['node_modules/wowjs/css/libs/animate.css'])
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss', 'src/scss/base/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Move Fonts to src/fonts
gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'))
})

// Move Font Awesome CSS to src/css
gulp.task('fa', function() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/css'))
})

gulp.task('default', ['js','serve', 'fa', 'fonts', 'animate']);