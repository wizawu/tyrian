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
exports.javap = exports.qualifiedName = exports.listFilesByExt = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var child_process_1 = require("child_process");
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
function qualifiedName(javaClass) {
    return javaClass.replace(/(\$\d+)*\.class$/, "").replace(/\//g, ".");
}
exports.qualifiedName = qualifiedName;
function javap(classPaths, classList) {
    var child = child_process_1.spawnSync(process.env.JAVAP || path_1.default.join(locateJavaBin(), "javap"), __spreadArrays(["-package", "-cp", ":" + classPaths.join(":")], classList));
    if (child.status === 0) {
        return child.stdout;
    }
    else {
        console.error(child.stderr.toString());
        return null;
    }
}
exports.javap = javap;
// Return path of JDK `bin` directory
function locateJavaBin() {
    if (fs_1.default.existsSync("package.json")) {
        var runtime = JSON.parse(fs_1.default.readFileSync("package.json", "utf-8")).runtime;
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
    }
    return process.env.JAVA_HOME ? path_1.default.join(process.env.JAVA_HOME, "bin") : "";
}
