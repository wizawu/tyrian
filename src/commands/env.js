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
var child_process_1 = require("child_process");
var const_1 = require("../const");
var header = function (tool, link) { return "\n[" + tool + "](" + link + ")\n"; };
var notFound = function () { return "** not found **\n"; };
function default_1() {
    var ok = true;
    var output = "";
    var child = null;
    var options = { stdio: "pipe" };
    // node
    child = child_process_1.spawnSync("node", ["-v"], options);
    output += header("node", "https://nodejs.org/en/download/");
    output += child.stdout + child.stderr || notFound();
    if (child.status !== 0)
        ok = false;
    // yarn
    child = child_process_1.spawnSync("yarn", ["-V"], options);
    output += header("yarn", "npm install -g yarn");
    output += child.stdout + child.stderr || notFound();
    if (child.status !== 0)
        ok = false;
    // java
    child = child_process_1.spawnSync("java", ["-version"], options);
    output += header("java", "http://openjdk.java.net/install/");
    output += child.stdout + child.stderr || notFound();
    if (child.status !== 0)
        ok = false;
    // jjs
    child = child_process_1.spawnSync("jjs", ["-fv"], __assign({ input: "quit()" }, options));
    output += "jjs -> " + (child.stdout + child.stderr || notFound()).replace(/jjs>\s+/, "");
    if (child.status !== 0)
        ok = false;
    // javap
    child = child_process_1.spawnSync("which", ["javap"], options);
    output += "javap -> " + (child.stdout + child.stderr || notFound());
    if (child.status !== 0)
        ok = false;
    // jar
    child = child_process_1.spawnSync("which", ["jar"], options);
    output += "jar -> " + (child.stdout + child.stderr || notFound());
    if (child.status !== 0)
        ok = false;
    // gradle
    child = child_process_1.spawnSync("gradle", ["-version"], options);
    output += header("gradle", "https://gradle.org/install");
    output += child.stdout + child.stderr || notFound();
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
