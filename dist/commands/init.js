"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var build_1 = require("./build");
function default_1() {
    if (fs_1.default.existsSync("package.json")) {
        console.error(chalk_1.default.yellow("package.json already exists"));
    }
    else {
        fs_1.default.writeFileSync("package.json", JSON.stringify({
            dependencies: {},
            mvnDependencies: {},
            runtime: {},
        }, null, 2));
    }
    if (fs_1.default.existsSync("tsconfig.json")) {
        console.error(chalk_1.default.yellow("tsconfig.json already exists"));
    }
    else {
        fs_1.default.writeFileSync("tsconfig.json", JSON.stringify({
            compilerOptions: build_1.compilerOptions,
            include: [
                path_1.default.join(__dirname, "..", "..", "@types", "**", "*.d.ts"),
                "**/*.ts",
            ]
        }, null, 2));
    }
}
exports.default = default_1;
