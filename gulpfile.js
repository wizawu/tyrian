var exec = require("child_process").exec;
var fs = require("fs");
var watch = require("node-watch");
var deps;

function printTime(message) {
    console.log("[" + new Date().toLocaleTimeString() + "] " + message);
}

function report(error, stdout, stderr) {
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    if (error) console.error(error);
    printTime("Build finished");
}

function isSwapFile(filename) {
    if (/\.sw[op]$/.test(filename)) return true;
    return printTime(filename) && false;
}

function buildDeps(callback) {
    deps = { ".": {} };
    fs.readdir("js/entries", function(err1, entries) {
        if (err1) console.error(err1);
        var count = 0;
        entries.forEach(function(entry) {
            if (isSwapFile(entry)) return count++;
            exec("npm run deps js/entries/" + entry, function(err2, stdout) {
                if (err2) console.error(err2);
                stdout.split("\n").forEach(function(file) {
                    if (file.indexOf(process.cwd()) === 0) {
                        file = file.substr(process.cwd().length + 1);
                        if (!deps[file]) deps[file] = {};
                        deps[file][entry] = true;
                        deps["."][file] = true;
                    }
                });
                count++;
            });
        });
        var timer = setInterval(function() {
            if (count < entries.length) return;
            if (callback) callback();
            clearInterval(timer);
        }, 10);
    });
}

function onJsChange(filename) {
    if (isSwapFile(filename)) return;
    if (deps["."][filename]) {
        Object.keys(deps[filename]).forEach(function(entry) {
            exec("npm run build:js dist/" + entry + " js/entries/" + entry, report);
        });
        exec("npm run build:html:all", report);
    } else {
        buildDeps(function() {
            deps["."][filename] = true;
            onJsChange(filename);
        });
    }
}

buildDeps();
exec("npm run build", report);

watch("html", function(filename) {
    if (isSwapFile(filename)) return;
    exec("npm run build:html " + filename + " dist" + filename.substr(4), report);
});

watch("css", function(filename) {
    if (isSwapFile(filename)) return;
    exec("npm run build:css " + filename + " dist" + filename.substr(3), report);
    exec("npm run build:html:all", report);
});

watch("js", onJsChange);
