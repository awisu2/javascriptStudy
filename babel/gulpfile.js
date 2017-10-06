// gulpfile.js
var gulp       = require('gulp');
var path       = require('path');
var fs         = require('fs-extra');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');

const SRC  = "./js_modan";
const DIST = "./js";

let walk = function(dir, callback, errCallback) {
    fs.readdir(dir, function(err, files) {
        if (err) {
            errCallback(err);
            return;
        }
        files.forEach(function(file){
            var p = path.join(dir, file);
            if(fs.statSync(p).isDirectory()) {
                callback(p, false);
                walk(p, callback);
                return;
            }
            callback(p, true);
        });
    });
};

function convert(_path, name, dir){
    browserify(_path)
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .on("error", function (err) {
            console.log("Error : " + err.message);
            this.emit("end");
        })
        .pipe(source(name))
        .pipe(gulp.dest(dir));
}

// browserify and gulp.
gulp.task('default', ["covert_all", "watch"]);

// convert all
gulp.task('covert_all', function () {
    walk(SRC, (_path, isFile)=>{
        let name = path.basename(_path);
        let rel = path.join(DIST, path.relative(SRC, _path));
        let dir  = path.dirname(rel);
        if(!isFile) return;
        convert(_path, name, dir);
    }, (err)=>{
        console.log("ERROR", err);
    });
});

// watch change files
gulp.task('watch', function () {
    gulp.watch([SRC + '/**/*.js'], function(event) {
        let name = path.basename(event.path);
        let rel = path.join(DIST, path.relative(SRC, event.path));
        let dir  = path.dirname(rel);
        convert(event.path, name, dir);
    });
});

