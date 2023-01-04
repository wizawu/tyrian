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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradleTemplate = exports.listLibClasses = void 0;
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const redent_1 = __importDefault(require("redent"));
const jszip_1 = __importDefault(require("jszip"));
const glob_1 = require("glob");
const child_process_1 = require("child_process");
const errors_1 = require("../errors");
const constants_1 = require("../constants");
const parser = __importStar(require("../parser"));
const utils = __importStar(require("../utils"));
const interfaces_json_1 = __importDefault(require("../jdk/interfaces.json"));
function default_1(offline) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!fs_1.default.existsSync(constants_1.path.PACKAGE)) {
            console.error(chalk_1.default.red(constants_1.path.PACKAGE + " does not exist."));
            process.exit(errors_1.code.PROJECT_NOT_FOUND);
        }
        if (!offline) {
            npmInstall();
            gradleInstall();
        }
        const jars = utils.listFilesByExt("lib", ".jar");
        if (jars.length > 0) {
            console.log("Parsing classes from the following libraries:");
            jars.map(it => console.log("  * " + it));
            const classes = yield listLibClasses(jars);
            console.log(`Found ${chalk_1.default.green(classes.length)} classes`);
            console.log("Generating typescript definitions...");
            parser.parse(jars, interfaces_json_1.default, classes, path_1.default.join(process.cwd(), "lib", "@types"));
        }
    });
}
exports.default = default_1;
function listLibClasses(jars) {
    return __awaiter(this, void 0, void 0, function* () {
        const classes = {};
        for (const jar of jars) {
            const data = fs_1.default.readFileSync(jar);
            const files = (yield jszip_1.default.loadAsync(data)).files;
            Object.keys(files).forEach(it => {
                if (it.endsWith(".class")) {
                    const key = it.replace(/(\$\d+)*\.class$/, "").replace(/\//g, ".");
                    if (key.split(".").reverse()[0].indexOf("-") < 0) {
                        // Skip class like `package-info`
                        classes[key] = true;
                    }
                }
            });
        }
        return Object.keys(classes);
    });
}
exports.listLibClasses = listLibClasses;
function npmInstall() {
    const child = (0, child_process_1.spawnSync)("npm", ["install"], { stdio: "inherit" });
    if (child.status)
        process.exit(child.status);
}
function gradleInstall() {
    fs_1.default.mkdirSync(path_1.default.join("lib", "@types"), { recursive: true });
    fs_1.default.writeFileSync(path_1.default.join("lib", "@types", "index.d.ts"), "");
    const mvnDependencies = {};
    // find all mvnDependencies from node_modules
    [constants_1.path.PACKAGE, ...new glob_1.GlobSync(path_1.default.join("node_modules", "**", constants_1.path.PACKAGE)).found].forEach(it => {
        const pkg = JSON.parse(fs_1.default.readFileSync(it, "utf-8"));
        Object.keys(pkg.mvnDependencies || {}).forEach(k => {
            if (pkg.mvnDependencies[k] > (mvnDependencies[k] || ""))
                mvnDependencies[k] = pkg.mvnDependencies[k];
        });
    });
    const deps = Object.keys(mvnDependencies).map(it => it + ":" + mvnDependencies[it]);
    fs_1.default.writeFileSync(path_1.default.join("lib", "build.gradle"), (0, exports.gradleTemplate)(deps));
    const child = (0, child_process_1.spawnSync)("gradle", [
        "-b",
        path_1.default.join("lib", "build.gradle"),
        "--no-daemon",
        "install"
    ], { stdio: "inherit" });
    if (child.status)
        process.exit(child.status);
}
const gradleTemplate = (deps) => (0, redent_1.default)(`
  apply plugin: "java"

  repositories {
    jcenter()
    mavenCentral()
  }

  task install(type: Copy) {
    into "."
    from configurations.runtime
  }

  dependencies {
    ${deps.map(it => `compile "${it}"`).join("\n    ")}
  }
`, 0).trimStart();
exports.gradleTemplate = gradleTemplate;
