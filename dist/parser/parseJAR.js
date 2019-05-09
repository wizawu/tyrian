"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var chalk_1 = require("chalk");
var child_process_1 = require("child_process");
var parseClass_1 = require("./parseClass");
var lambda = require("./lambda");
var ILLEGAL_NAMESPACES = [
    "debugger",
    "enum",
    "export",
    "function",
    "in",
    "is",
];
function commandOutput(command, args) {
    var child = child_process_1.spawnSync(command, args, { stdio: "pipe" });
    return (child.stdout || "").toString() + (child.stderr || "").toString();
}
function outputPackage(pkg, namespaces, outputDir) {
    Object.keys(pkg).forEach(function (key) {
        if (typeof pkg[key] === "string") {
            var result_1 = "declare ";
            var tail_1 = [];
            var space_1 = "";
            namespaces.forEach(function (ns) {
                if (ILLEGAL_NAMESPACES.indexOf(ns) >= 0)
                    ns += "$";
                result_1 += space_1 + "namespace " + ns + " {\n";
                tail_1.push(space_1 + "}");
                space_1 += "    ";
            });
            var text_1 = pkg[key];
            ILLEGAL_NAMESPACES.forEach(function (ns) {
                text_1 = text_1.replace(new RegExp("\\." + ns + "\\.", "g"), "." + ns + "$.");
            });
            result_1 += text_1.split("\n").filter(function (line) { return !!line.trim(); })
                .map(function (line) { return space_1 + line; }).join("\n") + "\n" + tail_1.reverse().join("\n");
            if (key.indexOf("<") > 0)
                key = key.substring(0, key.indexOf("<"));
            fs.writeFileSync(path.join(outputDir, namespaces.concat([key, "d.ts"]).join(".")), result_1);
        }
        else {
            outputPackage(pkg[key], namespaces.concat([key]), outputDir);
        }
    });
}
function parsePackage(pkg, level) {
    var result = "";
    Object.keys(pkg).forEach(function (key) {
        if (typeof pkg[key] === "string") {
            var text_2 = pkg[key];
            ILLEGAL_NAMESPACES.forEach(function (ns) {
                text_2 = text_2.replace(new RegExp("\\." + ns + "\\.", "g"), "." + ns + "$.");
            });
            result += text_2;
        }
        else {
            var namespace = key;
            if (ILLEGAL_NAMESPACES.indexOf(key) >= 0)
                namespace += "$";
            result += (level === 0 ? "declare " : "") + "namespace " + namespace + " {\n";
            result += parsePackage(pkg[key], level + 1).split("\n").map(function (line) { return "    " + line; }).join("\n");
            result += "\n}\n";
        }
    });
    return result;
}
function parseJAR(jar, outputDir) {
    var classes = commandOutput("jar", ["tf", jar]).split("\n");
    classes = classes.filter(function (c) { return /\.class$/.test(c); }).map(function (c) { return c.replace(/\//g, ".").replace(/\.class$/, ""); });
    var pkg = {};
    var step = 1000;
    for (var i = 0; i < classes.length; i += step) {
        console.log(chalk_1.default.gray("Disassembling " + jar + ": " + Math.min(i + step, classes.length) + "/" + classes.length + " classes"));
        var javaCode = commandOutput("javap", ["-protected", "-cp", jar].concat(classes.slice(i, i + step)));
        parseClass_1.default(javaCode, pkg);
    }
    return outputDir ? outputPackage(pkg, [], outputDir) : parsePackage(pkg, 0);
}
exports.default = parseJAR;
function generateJDKDefinition(root) {
    var targetDir = function (jar) { return path.basename(jar, ".jar"); };
    var jars = process.argv.slice(1);
    jars.forEach(function (jar) { return parseJAR(jar); });
    jars.forEach(function (jar) { return fs.existsSync(targetDir(jar)) || fs.mkdirSync(targetDir(jar)); });
    jars.forEach(function (jar) { return parseJAR(jar, targetDir(jar)); });
    fs.writeFileSync(fs.realpathSync(root + "/dist/parser/isLambda.js"), "module.exports = " + JSON.stringify(lambda.isLambda, null, 4));
}
exports.generateJDKDefinition = generateJDKDefinition;
function getTopPackages(jar) {
    var packages = {};
    var classes = commandOutput("jar", ["tf", jar]).split("\n");
    classes.filter(function (c) { return /\.class$/.test(c); }).forEach(function (path) { return packages[path.split("/")[0]] = true; });
    return Object.keys(packages);
}
exports.getTopPackages = getTopPackages;
