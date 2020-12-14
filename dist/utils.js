"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommand = void 0;
var child_process_1 = require("child_process");
function runCommand(command, args) {
    return child_process_1.spawnSync(command, args, { stdio: "pipe" });
}
exports.runCommand = runCommand;
