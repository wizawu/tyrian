"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
const child_process_1 = require("child_process");
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const errors_1 = require("../errors");
const constants_1 = require("../constants");
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
        initProject();
    }
}
exports.default = default_1;
function initProject() {
    // create package.json
    fs_1.default.writeFileSync(constants_1.path.PACKAGE, JSON.stringify({
        config: {
            [constants_1.config.NASHORN]: "jjs"
        },
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
