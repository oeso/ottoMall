var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

var src = 'public/';
var dist = 'public/dist';

var paths = {
  js : [
    'public/router.js',
    'public/**/*.js',
    '!public/dist/js/ottomall.js',
    '!public/src/js/angular-1.5.11.js',
    '!public/src/js/angular-1.6.4.js',
    '!public/src/js/ottomall.js'
]};

gulp.task('server', function(){
  return gulp.src(src)
        .pipe(webserver());
});

//js 파일을 하나로 합치고 압축.
gulp.task('combine-js', function(){
    return gulp.src(paths.js)
            .pipe(concat('ottomall.js'))
            .pipe(uglify())
            .pipe(gulp.dest(dist+'/js'));
});

//file변경 감지 및 브라우저 재시작
gulp.task('watch', function(){
  livereload.listen();
  gulp.watch(paths.js, ['combine-js'])
  gulp.watch(src +'/**').on('change', livereload.changed);
});


//기본 task 설정
gulp.task('default', [
  'combine-js','watch'
])
