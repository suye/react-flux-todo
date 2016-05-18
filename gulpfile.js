var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var livereload = require('gulp-livereload');


gulp.task("jsx",function(){
	browserify({
		entries: ["./js/app.js"],
		transform: [reactify]
	})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest("./"))
});



gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./js/**/*.js', ['jsx']);
    gulp.watch('css/style.css',function(event){
    	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task("default",["jsx","watch"]);