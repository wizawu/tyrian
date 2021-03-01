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
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var redent_1 = __importDefault(require("redent"));
var child_process_1 = require("child_process");
var utils = __importStar(require("../utils"));
var errors_1 = require("../errors");
function default_1(output, args, _a) {
    var inspectBrk = _a.inspectBrk, watch = _a.watch;
    var _b = checkRuntime(), type = _b[0], runner = _b[1];
    var classPaths = utils.listFilesByExt("lib", ".jar");
    var run = function () {
        var finalArgs = [];
        if (type === "nashorn") {
            finalArgs.push.apply(finalArgs, __spreadArrays(["-scripting",
                "--language=es6",
                "-cp", ":" + classPaths.join(":"),
                output,
                "--"], args));
        }
        else if (type === "graaljs") {
            if (inspectBrk)
                finalArgs.push("--inspect-brk=" + inspectBrk);
            finalArgs.push.apply(finalArgs, __spreadArrays(["--jvm",
                "--experimental-options",
                "--js.nashorn-compat=true",
                "--vm.cp=:" + classPaths.join(":"),
                output], args));
        }
        var child = child_process_1.spawn(runner, finalArgs);
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
            console.log(chalk_1.default.gray("Restarting " + output + "..."));
        });
    }
}
exports.default = default_1;
function checkRuntime() {
    var runtime = JSON.parse(fs_1.default.readFileSync("package.json", "utf-8")).runtime;
    if (typeof runtime.graaljs === "string") {
        return ["graaljs", runtime.graaljs];
    }
    else if (typeof runtime.nashorn === "string") {
        return ["nashorn", runtime.nashorn];
    }
    else {
        console.error("You should define at least one runtime in package.json");
        console.error(redent_1.default("\n      {\n        \"runtime\": {\n          \"graaljs\": \".../graalvm-*/languages/js/bin/node\", " + chalk_1.default.green("// recommended") + "\n          \"nashorn\": \".../openjdk-*/bin/jjs\"\n        }\n      }\n    ", 2));
        process.exit(errors_1.code.UNKNOWN_RUNTIME);
    }
}
