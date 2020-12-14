"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJar = exports.parseList = exports.javap = void 0;
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("./utils");
/**
 * Show classes and members
 */
function javap(classPath, classList) {
    classList = classList.map(function (it) { return it.trim(); }).filter(function (v, i, a) { return v && a.indexOf(v) === i; });
    var result = {};
    for (var i = 0; i < classList.length; i += 100) {
        var classes = classList.slice(i, i + 100);
        var command = utils_1.runCommand("javap", __spreadArrays(["-cp", ":" + classPath.join(":")], classes));
        if (command.stderr) {
            console.error(chalk_1.default.yellow((command.stderr || "").toString()));
        }
        var stdout = (command.stdout || "").toString();
        // TODO parse output
        classes.forEach(function (it) { return result[it] = ""; });
    }
    return result;
}
exports.javap = javap;
/**
 * Show classes and members from a text file
 */
function parseList(classPath, file) {
    var content = fs_1.default.readFileSync(file, "utf-8").split("\n");
    return javap(classPath, content);
}
exports.parseList = parseList;
/**
 * Show classes and members from a JAR file
 */
function parseJar(classPath, file) {
    var output = (utils_1.runCommand("jar", ["tf", file]).stdout || "").toString();
    var content = output.split("\n")
        .filter(function (it) { return it.endsWith(".class"); })
        .map(function (it) { return it.replace(/(\$\d+)*\.class$/, ""); });
    return javap(__spreadArrays([file], classPath), content);
}
exports.parseJar = parseJar;
