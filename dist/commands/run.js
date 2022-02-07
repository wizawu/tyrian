"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.checkRuntime = void 0;
var chalk_1 = __importDefault(require("chalk"));
var dotenv_1 = __importDefault(require("dotenv"));
var fs_1 = __importDefault(require("fs"));
var redent_1 = __importDefault(require("redent"));
var child_process_1 = require("child_process");
var utils = __importStar(require("../utils"));
var errors_1 = require("../errors");
var constants_1 = require("../constants");
function default_1(output, args, _a) {
    var inspectBrk = _a.inspectBrk, watch = _a.watch;
    if (!fs_1.default.existsSync(output)) {
        console.error(chalk_1.default.red("The file '".concat(output, "' does not exist.")));
        process.exit(errors_1.code.INVALID_ARGUMENT);
    }
    var _b = checkRuntime(), type = _b[0], runner = _b[1];
    var classPaths = utils.listFilesByExt("lib", ".jar");
    var run = function () {
        var finalArgs = [];
        if (type === "nashorn") {
            finalArgs.push.apply(finalArgs, __spreadArray(["-scripting",
                "--language=es6",
                "-cp", ":" + classPaths.join(":"),
                output,
                "--"], args, false));
        }
        else if (type === "graaljs") {
            if (inspectBrk)
                finalArgs.push("--inspect-brk=" + inspectBrk);
            finalArgs.push.apply(finalArgs, __spreadArray(["--jvm",
                "--experimental-options",
                "--js.nashorn-compat=true",
                "--vm.cp=:" + classPaths.join(":"),
                output], args, false));
        }
        var child = (0, child_process_1.spawn)(runner, finalArgs);
        child.on("exit", function (code) { return process.exit(code || 0); });
        child.stdout.on("data", function (chunk) { return process.stdout.write(chunk); });
        child.stderr.on("data", function (chunk) { return process.stderr.write(chunk); });
        return child;
    };
    var child = run();
    if (watch) {
        fs_1.default.watchFile(output, function () {
            child.removeAllListeners();
            child.on("exit", function () { return child = run(); });
            child.kill("SIGHUP");
            console.log(chalk_1.default.gray("Restarting ".concat(output, "...")));
        });
    }
}
exports.default = default_1;
function checkRuntime() {
    var runtime = (dotenv_1.default.config().parsed || {}).runtime;
    var type = utils.locateJdk(runtime)[0];
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
        console.error("Please define the runtime in ".concat(constants_1.path.ENV));
        console.error((0, redent_1.default)("\n      runtime=/path/to/graalvm/bin/node\n      // or\n      runtime=/path/to/openjdk/bin/jjs\n    ", 0));
        process.exit(errors_1.code.UNKNOWN_RUNTIME);
    }
}
exports.checkRuntime = checkRuntime;
