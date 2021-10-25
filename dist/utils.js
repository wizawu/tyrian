"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locateJdk = exports.javap = exports.realPath = exports.readJsonObject = exports.listFilesByExt = void 0;
var child_process_1 = require("child_process");
var dotenv_1 = __importDefault(require("dotenv"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var which_1 = __importDefault(require("which"));
function listFilesByExt(dirname, ext) {
    if (fs_1.default.existsSync(dirname)) {
        if (fs_1.default.lstatSync(dirname).isDirectory()) {
            return fs_1.default
                .readdirSync(dirname)
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
// Return the full path of any executable command
function realPath(command) {
    var fullPath = which_1.default.sync(command);
    if (fs_1.default.lstatSync(fullPath).isSymbolicLink()) {
        return fs_1.default.realpathSync(fullPath);
    }
    else {
        return fullPath;
    }
}
exports.realPath = realPath;
function javap(classPaths, classList) {
    var command = process.env.JAVAP;
    if (!command) {
        try {
            var runtime = (dotenv_1.default.config().parsed || {}).runtime;
            command = runtime ? path_1.default.resolve(locateJdk(runtime)[1], "bin", "javap") : realPath("javap");
        }
        catch (e) {
            command = realPath("javap");
        }
    }
    var child = (0, child_process_1.spawnSync)(command, __spreadArray(["-package", "-cp", ":" + classPaths.join(":")], classList, true));
    if (child.status === 0) {
        return child.stdout.toString();
    }
    else {
        console.error(child.stderr.toString());
        return null;
    }
}
exports.javap = javap;
// Return runtime type and home directory
function locateJdk(runtime) {
    var fullPath = realPath(runtime);
    var child = (0, child_process_1.spawnSync)(runtime, ["--version:graalvm"]);
    if (child.status === 0) {
        return ["graaljs", path_1.default.resolve(fullPath, "..", "..", "..", "..")];
    }
    else {
        return ["nashorn", path_1.default.resolve(fullPath, "..", "..")];
    }
}
exports.locateJdk = locateJdk;
