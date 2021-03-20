"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var prompts_1 = __importDefault(require("prompts"));
var child_process_1 = require("child_process");
var errors_1 = require("../errors");
var build_1 = require("./build");
function default_1() {
    console.log("Checking prerequisites...\n");
    if (!check("node", ["-v"]) || !check("npm", ["-v"]) || !check("gradle", ["-v"])) {
        console.error(chalk_1.default.red("You should add node, npm and gradle in `PATH` env."));
        process.exit(errors_1.code.BROKEN_ENV);
    }
    if (fs_1.default.existsSync("package.json")) {
        console.error(chalk_1.default.yellow("package.json already exists."));
        process.exit(errors_1.code.INIT_CONFLICT);
    }
    else if (fs_1.default.existsSync("tsconfig.json")) {
        console.error(chalk_1.default.yellow("tsconfig.json already exists."));
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
                    return createConfig(runtime, root);
                });
            }
            if (runtime === "nashorn") {
                prompts_1.default({
                    name: "root",
                    message: "Input the root path of OpenJDK or Oracle JDK",
                    type: "text",
                }).then(function (_a) {
                    var root = _a.root;
                    return createConfig(runtime, root);
                });
            }
        });
    }
}
exports.default = default_1;
function createConfig(runtime, root) {
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
    fs_1.default.writeFileSync("package.json", JSON.stringify({
        dependencies: {},
        mvnDependencies: {},
        runtime: (_a = {}, _a[runtime] = runtimePath, _a),
    }, null, 2));
    fs_1.default.writeFileSync("tsconfig.json", JSON.stringify({
        compilerOptions: build_1.compilerOptions,
        include: [
            path_1.default.join(__dirname, "..", "..", "@types", "**", "*.d.ts"),
            "**/*.ts",
        ]
    }, null, 2));
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
