"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.qualifiedName = exports.listFilesByExt = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
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
