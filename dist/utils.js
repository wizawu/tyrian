"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.javap = exports.readJsonObject = exports.listFilesByExt = void 0;
var child_process_1 = require("child_process");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var constants_1 = require("./constants");
function listFilesByExt(dirname, ext) {
    if (fs_1.default.existsSync(dirname)) {
        if (fs_1.default.lstatSync(dirname).isDirectory()) {
            return fs_1.default.readdirSync(dirname)
                .filter(function (it) { return it.endsWith(ext); })
                .map(function (it) { return path_1.default.join(dirname, it); });
        }
        else {
            return [];
        }
    }
    else {
        return [];
    }
}
exports.listFilesByExt = listFilesByExt;
function readJsonObject(path) {
    if (fs_1.default.existsSync(path)) {
        var content = fs_1.default.readFileSync(path, "utf-8");
        return JSON.parse(content);
    }
    else {
        return {};
    }
}
exports.readJsonObject = readJsonObject;
function javap(classPaths, classList) {
    var child = child_process_1.spawnSync(process.env.JAVAP || path_1.default.join(locateJdkBin(), "javap"), __spreadArray(["-package", "-cp", ":" + classPaths.join(":")], classList));
    if (child.status === 0) {
        return child.stdout.toString();
    }
    else {
        console.error(child.stderr.toString());
        return null;
    }
}
exports.javap = javap;
// Return path of JDK `bin` directory
function locateJdkBin() {
    var runtime = readJsonObject(constants_1.path.RC).runtime;
    if ((runtime === null || runtime === void 0 ? void 0 : runtime.graaljs) && fs_1.default.existsSync(runtime.graaljs)) {
        var cmd = runtime.graaljs;
        if (fs_1.default.lstatSync(cmd).isSymbolicLink()) {
            cmd = fs_1.default.realpathSync(cmd);
        }
        return path_1.default.join(path_1.default.dirname(cmd), "..", "..", "..", "bin");
    }
    if ((runtime === null || runtime === void 0 ? void 0 : runtime.nashorn) && fs_1.default.existsSync(runtime.nashorn)) {
        var cmd = runtime.nashorn;
        if (fs_1.default.lstatSync(cmd).isSymbolicLink()) {
            cmd = fs_1.default.realpathSync(cmd);
        }
        return path_1.default.dirname(cmd);
    }
    return process.env.JAVA_HOME ? path_1.default.join(process.env.JAVA_HOME, "bin") : "";
}
