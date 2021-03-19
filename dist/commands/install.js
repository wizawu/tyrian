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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradleTemplate = exports.listLibClasses = void 0;
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var redent_1 = __importDefault(require("redent"));
var jszip_1 = __importDefault(require("jszip"));
var glob_1 = require("glob");
var child_process_1 = require("child_process");
var parser = __importStar(require("../parser"));
var utils = __importStar(require("../utils"));
var interfaces_json_1 = __importDefault(require("../jdk/interfaces.json"));
var errors_1 = require("../errors");
function default_1(offline) {
    return __awaiter(this, void 0, void 0, function () {
        var jars, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!fs_1.default.existsSync("package.json")) {
                        console.error(chalk_1.default.red("'package.json' does not exist."));
                        process.exit(errors_1.code.PROJECT_NOT_FOUND);
                    }
                    if (!offline) {
                        npmInstall();
                        gradleInstall();
                    }
                    jars = utils.listFilesByExt("lib", ".jar");
                    _b = (_a = parser).parse;
                    _c = [jars, interfaces_json_1.default];
                    return [4 /*yield*/, listLibClasses(jars)];
                case 1:
                    _b.apply(_a, _c.concat([_d.sent(), path_1.default.join(process.cwd(), "lib", "@types")]));
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
function listLibClasses(jars) {
    return __awaiter(this, void 0, void 0, function () {
        var classes, _i, jars_1, jar, data, files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    classes = {};
                    _i = 0, jars_1 = jars;
                    _a.label = 1;
                case 1:
                    if (!(_i < jars_1.length)) return [3 /*break*/, 4];
                    jar = jars_1[_i];
                    data = fs_1.default.readFileSync(jar);
                    return [4 /*yield*/, jszip_1.default.loadAsync(data)];
                case 2:
                    files = (_a.sent()).files;
                    Object.keys(files).forEach(function (it) {
                        if (it.endsWith(".class")) {
                            var key = it.replace(/(\$\d+)*\.class$/, "").replace(/\//g, ".");
                            if (key.split(".").reverse()[0].indexOf("-") < 0) {
                                // Skip class like `package-info`
                                classes[key] = true;
                            }
                        }
                    });
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, Object.keys(classes)];
            }
        });
    });
}
exports.listLibClasses = listLibClasses;
function npmInstall() {
    var child = child_process_1.spawnSync("npm", ["install"], { stdio: "inherit" });
    if (child.status)
        process.exit(child.status);
}
function gradleInstall() {
    fs_1.default.mkdirSync(path_1.default.join("lib", "@types"), { recursive: true });
    var mvnDependencies = {};
    // find all mvnDependencies from node_modules
    __spreadArray(["package.json"], new glob_1.GlobSync(path_1.default.join("node_modules", "**", "package.json")).found).forEach(function (it) {
        var pkg = JSON.parse(fs_1.default.readFileSync(it, "utf-8"));
        Object.keys(pkg.mvnDependencies || {}).forEach(function (k) {
            if (pkg.mvnDependencies[k] > (mvnDependencies[k] || ""))
                mvnDependencies[k] = pkg.mvnDependencies[k];
        });
    });
    var deps = Object.keys(mvnDependencies).map(function (it) { return it + ":" + mvnDependencies[it]; });
    fs_1.default.writeFileSync("build.gradle", exports.gradleTemplate(deps));
    var child = child_process_1.spawnSync("gradle", ["--no-daemon", "install"], { stdio: "inherit" });
    if (child.status)
        process.exit(child.status);
}
var gradleTemplate = function (deps) { return redent_1.default("\n  apply plugin: \"java\"\n\n  repositories {\n    jcenter()\n    mavenCentral()\n  }\n\n  task install(type: Copy) {\n    into \"" + path_1.default.join(process.cwd(), "lib") + "\"\n    from configurations.runtime\n  }\n\n  dependencies {\n    " + deps.map(function (it) { return "compile \"" + it + "\""; }).join("\n    ") + "\n  }\n", 0).trimStart(); };
exports.gradleTemplate = gradleTemplate;
