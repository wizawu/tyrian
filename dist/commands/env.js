"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var child_process_1 = require("child_process");
function default_1() {
    return [
        check("node", ["-v"]),
        check("npm", ["-v"]),
        check("java", ["--version"]),
        check("gradle", ["-v"]),
    ].every(function (it) { return it; });
}
exports.default = default_1;
function check(command, args) {
    var _a = child_process_1.spawnSync(command, args), status = _a.status, stdout = _a.stdout, stderr = _a.stderr;
    if (status === 0) {
        console.log(chalk_1.default.green("[" + command + "]"));
        console.log(stdout.toString().replace(/\n+/g, "\n").trim() + "\n");
        return true;
    }
    else {
        console.log(chalk_1.default.red("[" + command + "]"));
        var message = (stderr === null || stderr === void 0 ? void 0 : stderr.toString().trim()) || (stdout === null || stdout === void 0 ? void 0 : stdout.toString().trim());
        if (message) {
            console.log(message + "\n");
        }
        else {
            console.log(chalk_1.default.gray("NOT FOUND\n"));
        }
        return false;
    }
}
