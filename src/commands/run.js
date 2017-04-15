"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var child_process_1 = require("child_process");
function default_1(target, reload) {
    var dirname = path.resolve(path.dirname(target));
    var lib = path.resolve(dirname + "/../lib");
    var classpath = fs.readdirSync(lib).map(function (jar) { return jar === "@types" ? "" : lib + "/" + jar; }).join(":");
    var run = function () { return child_process_1.spawn("jjs", ["-cp", classpath, target], { stdio: "inherit" }); };
    var child = run();
    child.on("exit", function (code) { return process.exit(code); });
    if (reload) {
        fs.watchFile(target, function () {
            child.removeAllListeners();
            child.on("exit", function () {
                child = run();
                child.on("exit", function (code) { return process.exit(code); });
            });
            child.kill("SIGHUP");
        });
    }
}
exports["default"] = default_1;
