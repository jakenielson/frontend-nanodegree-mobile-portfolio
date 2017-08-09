var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    htmlmin = require('gulp-htmlmin');

gulp.task('mini-js', function(){
    //Minify JS files
    gulp.src('src/js/*')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('mini-css', function(){
    //Minify JS files
    gulp.src('src/css/*')
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('mini-html', function(){
    //Minify JS files
    gulp.src('src/*')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
});

gulp.task('mini-js-views', function(){
    //Minify JS files
    gulp.src('src/views/js/*')
        .pipe(uglify())
        .pipe(gulp.dest('dist/views/js'))
});

gulp.task('mini-css-views', function(){
    //Minify JS files
    gulp.src('src/views/css/*')
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/views/css'))
});

gulp.task('mini-html-views', function(){
    //Minify JS files
    gulp.src('src/views/*')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/views'))
});
