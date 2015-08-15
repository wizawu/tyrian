var babelify = require("babelify");
var browserify = require("browserify");
var concat = require("gulp-concat");
var globalReact = require("global-react");
var gulp = require("gulp");
var source = require("vinyl-source-stream");
var template = require("gulp-template");
var watchify = require("watchify");

function time() {
    return "[" + new Date().toLocaleTimeString() + "] ";
}

var bundlers = [
    "./js/app.jsx",
    "./js/vendor.js"
].map(function(entry) {
    return browserify({
        entries: [entry],
        transform: [babelify],
        debug: true
    }).exclude("react").transform({global: true}, globalReact);
});

function build(bundler) {
    (bundler ? [bundler] : bundlers).map(function(bundler) {
        var entry = bundler._options.entries[0];
        var target = entry.replace(/^.*\/([^\/]+js)x?$/, "$1");
        var start = Date.now();
        console.log(time() + "Bundling " + entry + " ...");
        bundler.bundle()
            .on("error", console.error)
            .on("end", function() {
                var duration = Date.now() - start + " ms";
                console.log(time() + "Finished " + target + " in " + duration);
            })
            .pipe(source(target))
            .pipe(gulp.dest("dist"));
    });

    gulp.src("node_modules/global-react/global.react.js")
        .pipe(gulp.dest("dist"));

    gulp.src(["css/app.css"])
        .pipe(concat("all.css"))
        .pipe(gulp.dest("dist"));

    gulp.src("html/index.html")
        .pipe(template({ts: Date.now()}))
        .pipe(gulp.dest("dist"));
}

gulp.task("watch", function() {
    bundlers = bundlers.map(function(bundler) {
        return watchify(bundler, {poll: true});
    });
    bundlers.forEach(function(bundler) {
        bundler.on("update", function() { build(bundler) });
    });

    build();
});

gulp.task("build", function() { build() });
gulp.task("default", ["watch"]);
