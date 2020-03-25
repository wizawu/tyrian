"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var which = require("which");
var chalk_1 = require("chalk");
var child_process_1 = require("child_process");
var const_1 = require("../const");
function header(tool, link) {
    return "\n" + chalk_1.default.green("[" + tool + "]") + chalk_1.default.gray("(" + link + ")") + "\n";
}
var notFound = function (stdout, stderr) { return (stdout + stderr) || chalk_1.default.red("** not found **\n"); };
function findJVMBin() {
    if (process.env.GRAALVM_HOME) {
        return path.join(process.env.GRAALVM_HOME, "bin");
    }
    else {
        var javaPath = which.sync("java");
        return path.dirname(javaPath);
    }
}
exports.findJVMBin = findJVMBin;
function default_1() {
    var ok = true;
    var output = "";
    var options = { stdio: "pipe" };
    var child = child_process_1.spawnSync("node", ["-v"], options);
    output += header("node", "https://nodejs.org/en/download");
    output += notFound(child.stdout, child.stderr);
    if (child.status !== 0)
        ok = false;
    child = child_process_1.spawnSync("npm", ["-v"], options);
    output += header("npm", "npm install -g npm");
    output += notFound(child.stdout, child.stderr);
    if (child.status !== 0)
        ok = false;
    child = child_process_1.spawnSync(path.join(findJVMBin(), "java"), ["-version"], options);
    output += header("java", "https://www.graalvm.org/downloads");
    output += notFound(child.stdout, child.stderr);
    if (child.status !== 0)
        ok = false;
    child = child_process_1.spawnSync("gradle", ["-version"], options);
    output += header("gradle", "https://gradle.org/install");
    output += notFound(child.stdout, child.stderr).replace(/(^|\n)\n/g, "$1");
    if (child.status !== 0)
        ok = false;
    if (!ok) {
        console.log("\n" + output.trim() + "\n");
        process.exit(const_1.EXIT_STATUS.BROKEN_ENV);
    }
    else {
        return "\n" + output.trim() + "\n";
    }
}
exports.default = default_1;
