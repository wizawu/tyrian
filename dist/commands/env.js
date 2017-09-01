"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var chalk = require("chalk");
var const_1 = require("../const");
var child_process_1 = require("child_process");
function header(tool, link) {
    return "\n" + chalk.green("[" + tool + "]") + chalk.gray("(" + link + ")") + "\n";
}
var notFound = function (stdout, stderr) { return (stdout + stderr) || chalk.red("** not found **\n"); };
function default_1() {
    var ok = true;
    var output = "";
    var options = { stdio: "pipe" };
    var child = child_process_1.spawnSync("node", ["-v"], options);
    output += header("node", "https://nodejs.org/en/download/");
    output += notFound(child.stdout, child.stderr);
    if (child.status !== 0)
        ok = false;
    child = child_process_1.spawnSync("npm", ["-v"], options);
    output += header("npm", "npm install -g npm");
    output += notFound(child.stdout, child.stderr);
    if (child.status !== 0)
        ok = false;
    child = child_process_1.spawnSync("java", ["-version"], options);
    output += header("java", "http://openjdk.java.net/install/");
    output += notFound(child.stdout, child.stderr);
    if (child.status !== 0)
        ok = false;
    child = child_process_1.spawnSync("jjs", ["-fv"], __assign({ input: "quit()" }, options));
    output += "jjs -> " + notFound(child.stdout, child.stderr).replace(/jjs>\s+/, "");
    if (child.status !== 0)
        ok = false;
    child = child_process_1.spawnSync("which", ["javap"], options);
    output += "javap -> " + notFound(child.stdout, child.stderr);
    if (child.status !== 0)
        ok = false;
    child = child_process_1.spawnSync("which", ["jar"], options);
    output += "jar -> " + notFound(child.stdout, child.stderr);
    if (child.status !== 0)
        ok = false;
    child = child_process_1.spawnSync("gradle", ["-version"], options);
    output += header("gradle", "https://gradle.org/install");
    output += notFound(child.stdout, child.stderr);
    if (child.status !== 0)
        ok = false;
    if (!ok) {
        console.error(output);
        process.exit(const_1.EXIT_STATUS.BROKEN_ENV);
    }
    else {
        return output;
    }
}
exports["default"] = default_1;
