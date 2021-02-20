"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disassemble = void 0;
var child_process_1 = require("child_process");
function disassemble(classPaths, classList) {
    var child = child_process_1.spawnSync(process.env.JAVAP || "javap", __spreadArrays([
        "-package",
        "-cp", ":" + classPaths.join(":")
    ], classList));
    if (child.status === 0) {
        return child.stdout;
    }
    else {
        console.error(child.stderr.toString());
        return null;
    }
}
exports.disassemble = disassemble;
