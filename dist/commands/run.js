"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRuntime = void 0;
const chalk_1 = __importDefault(require("chalk"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const redent_1 = __importDefault(require("redent"));
const child_process_1 = require("child_process");
const utils = __importStar(require("../utils"));
const errors_1 = require("../errors");
const constants_1 = require("../constants");
function default_1(output, args, { inspectBrk, watch }) {
    if (!fs_1.default.existsSync(output)) {
        console.error(chalk_1.default.red(`The file '${output}' does not exist.`));
        process.exit(errors_1.code.INVALID_ARGUMENT);
    }
    const [type, runner] = checkRuntime();
    const classPaths = utils.listFilesByExt("lib", ".jar");
    const run = () => {
        const finalArgs = [];
        if (type === "nashorn") {
            finalArgs.push("-scripting", "--language=es6", "-cp", ":" + classPaths.join(":"), output, "--", ...args);
        }
        else if (type === "graaljs") {
            if (inspectBrk)
                finalArgs.push("--inspect-brk=" + inspectBrk);
            finalArgs.push("--jvm", "--experimental-options", "--js.nashorn-compat=true", "--vm.cp=:" + classPaths.join(":"), output, ...args);
        }
        const child = (0, child_process_1.spawn)(runner, finalArgs);
        child.on("exit", code => process.exit(code || 0));
        child.stdout.on("data", chunk => process.stdout.write(chunk));
        child.stderr.on("data", chunk => process.stderr.write(chunk));
        return child;
    };
    let child = run();
    if (watch) {
        fs_1.default.watchFile(output, () => {
            child.removeAllListeners();
            child.on("exit", () => child = run());
            child.kill("SIGHUP");
            console.log(chalk_1.default.gray(`Restarting ${output}...`));
        });
    }
}
exports.default = default_1;
function checkRuntime() {
    const { runtime } = dotenv_1.default.config().parsed || {};
    const [type] = utils.locateJdk(runtime);
    if (type === "graaljs") {
        return ["graaljs", runtime];
    }
    else if (type === "nashorn") {
        return ["nashorn", runtime];
    }
    else if ((0, child_process_1.spawnSync)("node", ["--version:graalvm"]).status === 0) {
        return ["graaljs", "node"];
    }
    else if ((0, child_process_1.spawnSync)("jjs", ["-version"]).status === 0) {
        return ["nashorn", "jjs"];
    }
    else {
        console.error(`Please define the runtime in ${constants_1.path.ENV}`);
        console.error((0, redent_1.default)(`
      runtime=/path/to/graalvm/bin/node
      // or
      runtime=/path/to/openjdk/bin/jjs
    `, 0));
        process.exit(errors_1.code.UNKNOWN_RUNTIME);
    }
}
exports.checkRuntime = checkRuntime;
