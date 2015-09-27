var exec = require("child_process").exec;
var watch = require("node-watch");

function printTime(filename) {
    console.log("[" + new Date().toLocaleTimeString() + "] " + filename);
}

function report(error, stdout, stderr) {
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    if (error) console.error(error);
    printTime("");
}

exec("npm run build", report);

watch(["html/index.html"], function(filename) {
    printTime(filename);
    exec("npm run build:html", report);
});

watch(["css/app.css"], function(filename) {
    printTime(filename);
    exec("npm run build:css && npm run build:html", report);
});

watch("js", function(filename) {
    if (/vendor\.tsx$/.test(filename)) {
        printTime(filename);
        exec("npm run build:tsx && npm run build:vendor && npm run build:html", report);
    } else if (/\.tsx$/.test(filename)) {
        printTime(filename);
        exec("npm run build:tsx && npm run build:app && npm run build:html", report);
    }
});
