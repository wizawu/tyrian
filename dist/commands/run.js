"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var child_process_1 = require("child_process");
function default_1(jjsArgs, target, args, watch) {
    target = path.resolve(target);
    var classpath = !fs.existsSync("lib") ? "." :
        fs.readdirSync("lib").map(function (jar) { return jar === "@types" ? "" : "lib/" + jar; }).join(":");
    var run = function () {
        var child = child_process_1.spawn("jjs", jjsArgs.concat([
            "-scripting", "--language=es6",
            "-cp", classpath,
            target,
            "--"
        ], args));
        child.on("exit", function (code) { return process.exit(code); });
        child.stdout.on("data", function (chunk) {
            process.stdout.write(chunk);
        });
        child.stderr.on("data", function (chunk) {
            process.stderr.write(chunk);
        });
        return child;
    };
    var child = run();
    if (watch) {
        fs.watchFile(target, function () {
            child.removeAllListeners();
            child.on("exit", function () { return child = run(); });
            child.kill("SIGHUP");
        });
    }
}
exports.default = default_1;
