"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var child_process_1 = require("child_process");
var env_1 = require("./env");
function default_1(vmArgs, target, args, watch) {
    target = path.resolve(target);
    var classpath = !fs.existsSync("lib") ? "." :
        fs.readdirSync("lib").map(function (jar) { return jar === "@types" ? "" : "lib/" + jar; }).join(":");
    var run = function () {
        var nodePath = path.join(env_1.findJVMBin(), "node");
        var child = child_process_1.spawn(nodePath, __spreadArrays([
            "--jvm",
            "--experimental-options",
            "--js.nashorn-compat=true",
            "--vm.classpath=" + classpath
        ], vmArgs, [
            target
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
