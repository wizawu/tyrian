"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
var child_process_1 = require("child_process");
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var prompts_1 = __importDefault(require("prompts"));
var errors_1 = require("../errors");
var constants_1 = require("../constants");
var utils = __importStar(require("../utils"));
function default_1() {
    console.log("Checking prerequisites...\n");
    if (!check("node", ["-v"]) || !check("npm", ["-v"]) || !check("gradle", ["-v"])) {
        console.error(chalk_1.default.red("You should add node, npm and gradle in `PATH` env."));
        process.exit(errors_1.code.BROKEN_ENV);
    }
    if (fs_1.default.existsSync(constants_1.path.PACKAGE)) {
        console.error(chalk_1.default.yellow(constants_1.path.PACKAGE + " already exists."));
        process.exit(errors_1.code.INIT_CONFLICT);
    }
    else if (fs_1.default.existsSync(constants_1.path.TSCONFIG)) {
        console.error(chalk_1.default.yellow(constants_1.path.TSCONFIG + " already exists."));
        process.exit(errors_1.code.INIT_CONFLICT);
    }
    else {
        prompts_1.default({
            name: "runtime",
            message: "Choose runtime",
            type: "select",
            choices: [
                { value: "graaljs", title: "graal.js (recommended)" },
                { value: "nashorn" },
            ]
        }).then(function (_a) {
            var runtime = _a.runtime;
            if (runtime === "graaljs") {
                prompts_1.default({
                    name: "root",
                    message: "Input the root path of GraalVM",
                    type: "text",
                }).then(function (_a) {
                    var root = _a.root;
                    return initProject(runtime, root);
                });
            }
            if (runtime === "nashorn") {
                prompts_1.default({
                    name: "root",
                    message: "Input the root path of OpenJDK or Oracle JDK",
                    type: "text",
                }).then(function (_a) {
                    var root = _a.root;
                    return initProject(runtime, root);
                });
            }
        });
    }
}
exports.default = default_1;
function initProject(runtime, root) {
    var _a;
    var javapPath = path_1.default.join(root, "bin", "javap");
    var runtimePath = runtime === "graaljs" ?
        path_1.default.join(root, "languages", "js", "bin", "node") :
        path_1.default.join(root, "bin", "jjs");
    if (!fs_1.default.existsSync(runtimePath)) {
        console.error(chalk_1.default.red("Cannot find " + runtimePath));
        process.exit(errors_1.code.INVALID_JDK_ROOT);
    }
    else if (!fs_1.default.existsSync(javapPath)) {
        console.error(chalk_1.default.red("Cannot find " + javapPath));
        process.exit(errors_1.code.INVALID_JDK_ROOT);
    }
    // create package.json and tsconfig.json
    fs_1.default.writeFileSync(constants_1.path.PACKAGE, JSON.stringify({
        dependencies: {},
        mvnDependencies: {},
    }, null, 2));
    fs_1.default.writeFileSync(constants_1.path.TSCONFIG, JSON.stringify({
        compilerOptions: {
            typeRoots: [
                path_1.default.join(__dirname, "..", "..", "@types"),
                "lib",
                "node_modules/@types",
            ]
        },
        include: [
            "**/*.ts",
        ]
    }, null, 2));
    // overwrite .tyrianrc
    fs_1.default.writeFileSync(constants_1.path.RC, JSON.stringify(__assign(__assign({}, utils.readJsonObject(constants_1.path.RC)), { runtime: (_a = {}, _a[runtime] = runtimePath, _a) }), null, 2));
    // create src/main.ts
    fs_1.default.mkdirSync("src", { recursive: true });
    if (!fs_1.default.existsSync(path_1.default.join("src", "main.ts"))) {
        var src = "java.lang.System.out.println(\"Hello\")";
        fs_1.default.writeFileSync(path_1.default.join("src", "main.ts"), src);
    }
}
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
exports.check = check;
