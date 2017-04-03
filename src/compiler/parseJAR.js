"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var parseClass_1 = require("./parseClass");
function commandOutput(command, args) {
    var child = child_process_1.spawnSync(command, args, { stdio: "pipe" });
    return child.stdout.toString() + child.stderr.toString();
}
function parsePackage(pkg, level) {
    var result = "";
    Object.keys(pkg).forEach(function (key) {
        if (key === "function" || key === "is" || key === "in") {
            return "";
        }
        else if (typeof pkg[key] === "string") {
            result += pkg[key];
        }
        else {
            result += (level === 0 ? "declare " : "") + "namespace " + key + " {\n";
            result += parsePackage(pkg[key], level + 1).split("\n").map(function (line) { return "    " + line; }).join("\n");
            result += "\n}\n";
        }
    });
    return result;
}
function default_1(jar) {
    var classes = commandOutput("jar", ["tf", jar]).split("\n");
    classes = classes.filter(function (c) { return /\.class$/.test(c); }).map(function (c) { return c.replace(/\//g, ".").replace(/\.class$/, ""); });
    console.log("Disassembling " + jar + ": " + classes.length + " classes");
    var pkg = {};
    for (var i = 0; i < classes.length; i += 2000) {
        var javaCode = commandOutput("javap", ["-cp", jar].concat(classes.slice(i, i + 2000)));
        parseClass_1["default"](javaCode, pkg);
    }
    return parsePackage(pkg, 0);
}
exports["default"] = default_1;
