"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locateJdk = exports.javap = exports.realPath = exports.readJsonObject = exports.listFilesByExt = void 0;
const child_process_1 = require("child_process");
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const which_1 = __importDefault(require("which"));
function listFilesByExt(dirname, ext) {
    if (fs_1.default.existsSync(dirname)) {
        if (fs_1.default.lstatSync(dirname).isDirectory()) {
            return fs_1.default
                .readdirSync(dirname)
                .filter(it => it.endsWith(ext))
                .map(it => path_1.default.join(dirname, it));
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
        const content = fs_1.default.readFileSync(path, "utf-8");
        return JSON.parse(content);
    }
    else {
        return {};
    }
}
exports.readJsonObject = readJsonObject;
// Return the full path of any executable command
function realPath(command) {
    const fullPath = which_1.default.sync(command);
    if (fs_1.default.lstatSync(fullPath).isSymbolicLink()) {
        return fs_1.default.realpathSync(fullPath);
    }
    else {
        return fullPath;
    }
}
exports.realPath = realPath;
function javap(classPaths, classList) {
    let command = process.env.JAVAP;
    if (!command) {
        try {
            const { runtime } = dotenv_1.default.config().parsed || {};
            command = runtime ? path_1.default.resolve(locateJdk(runtime)[1], "bin", "javap") : realPath("javap");
        }
        catch (e) {
            command = realPath("javap");
        }
    }
    const child = (0, child_process_1.spawnSync)(command, ["-package", "-cp", ":" + classPaths.join(":"), ...classList]);
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
    const fullPath = realPath(runtime);
    const child = (0, child_process_1.spawnSync)(runtime, ["--version:graalvm"]);
    if (child.status === 0) {
        return ["graaljs", path_1.default.resolve(fullPath, "..", "..", "..", "..")];
    }
    else {
        return ["nashorn", path_1.default.resolve(fullPath, "..", "..")];
    }
}
exports.locateJdk = locateJdk;
