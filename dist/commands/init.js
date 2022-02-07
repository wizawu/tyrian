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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
const child_process_1 = require("child_process");
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const prompts_1 = __importDefault(require("prompts"));
const errors_1 = require("../errors");
const constants_1 = require("../constants");
const utils = __importStar(require("../utils"));
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
        (0, prompts_1.default)({
            name: "runtime",
            message: "Choose runtime",
            type: "select",
            choices: [
                { value: "graaljs", title: "Graal.js (recommended)" },
                { value: "nashorn", title: "Nashorn" },
            ],
        }).then(({ runtime }) => {
            if (runtime === "graaljs") {
                (0, prompts_1.default)({
                    name: "executable",
                    message: "Where is the Graal.js executable file (node)",
                    type: "text",
                    initial: "node",
                }).then(({ executable }) => initProject(runtime, executable));
            }
            if (runtime === "nashorn") {
                (0, prompts_1.default)({
                    name: "executable",
                    message: "Where is the Nashorn executable file (jjs)",
                    type: "text",
                    initial: "jjs",
                }).then(({ executable }) => initProject(runtime, executable));
            }
        });
    }
}
exports.default = default_1;
function initProject(runtime, executable) {
    // create .env
    const runtimePath = utils.realPath(executable);
    fs_1.default.appendFileSync(constants_1.path.ENV, `runtime=${runtimePath}\n`);
    // create package.json
    fs_1.default.writeFileSync(constants_1.path.PACKAGE, JSON.stringify({
        dependencies: {},
        mvnDependencies: {},
    }, null, 2));
    // create tsconfig.json
    fs_1.default.writeFileSync(constants_1.path.TSCONFIG, JSON.stringify({
        compilerOptions: {
            typeRoots: [path_1.default.join(__dirname, "..", "..", "@types"), "lib", "node_modules/@types"],
        },
        include: ["**/*.ts"],
    }, null, 2));
    // create src/main.ts
    fs_1.default.mkdirSync("src", { recursive: true });
    if (!fs_1.default.existsSync(path_1.default.join("src", "main.ts"))) {
        const src = "java.lang.System.out.println(\"Hello\")";
        fs_1.default.writeFileSync(path_1.default.join("src", "main.ts"), src);
    }
}
function check(command, args) {
    const { status, stdout, stderr } = (0, child_process_1.spawnSync)(command, args);
    if (status === 0) {
        console.log(chalk_1.default.green(`[${command}]`));
        console.log(stdout.toString().replace(/\n+/g, "\n").trim() + "\n");
        return true;
    }
    else {
        console.log(chalk_1.default.red(`[${command}]`));
        const message = (stderr === null || stderr === void 0 ? void 0 : stderr.toString().trim()) || (stdout === null || stdout === void 0 ? void 0 : stdout.toString().trim());
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
