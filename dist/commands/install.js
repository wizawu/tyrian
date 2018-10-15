"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var fs = require("fs");
var os = require("os");
var path = require("path");
var chalk_1 = require("chalk");
var child_process_1 = require("child_process");
var parseJAR_1 = require("../parser/parseJAR");
exports.tsconfig = function (instdir) { return JSON.stringify({
    "compilerOptions": {
        "allowJs": true,
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "jsx": "react",
        "lib": ["dom", "es2017"],
        "noUnusedLocals": true,
        "pretty": true,
        "removeComments": true,
        "skipLibCheck": true,
        "sourceMap": true,
        "strictNullChecks": true,
        "target": "es5",
    },
    "include": [
        instdir + "/@types/common/*.d.ts",
        instdir + "/@types/jdk/rt/java.*.d.ts",
        instdir + "/@types/jdk/rt/javax.*.d.ts",
        instdir + "/@types/jdk/rt/jdk.*.d.ts",
        "lib/**/*.d.ts",
        "src/**/*.ts",
        "src/**/*.tsx",
    ]
}, null, 2); };
var package_json = JSON.stringify({
    "dependencies": {},
    "mvnDependencies": []
}, null, 2);
var build_gradle = function (deps) { return "\n    apply plugin: \"java\"\n\n    repositories {\n        mavenCentral()\n        jcenter()\n    }\n\n    task install(type: Copy) {\n        into \"" + process.cwd() + "/lib\"\n        from configurations.runtime\n    }\n\n    dependencies {\n        " + deps + "\n    }\n"; };
function default_1(instdir, noTypes) {
    if (noTypes === void 0) { noTypes = false; }
    if (!fs.existsSync("tsconfig.json")) {
        fs.writeFileSync("tsconfig.json", exports.tsconfig(instdir));
    }
    if (!fs.existsSync("package.json")) {
        fs.writeFileSync("package.json", package_json);
    }
    var child = child_process_1.spawnSync("npm", ["install"], { stdio: "inherit" });
    if (child.status !== 0)
        process.exit(child.status);
    var mvnDependencies = {};
    if (fs.existsSync("node_modules")) {
        fs.readdirSync("node_modules").forEach(function (dir) {
            var json = fs.existsSync("node_modules/" + dir + "/package.json") ?
                JSON.parse(fs.readFileSync("node_modules/" + dir + "/package.json", "utf-8")) : {};
            Array.from(json.mvnDependencies || []).forEach(function (dep) {
                var _a = dep.split(":"), groupId = _a[0], artifactId = _a[1], version = _a[2];
                mvnDependencies[groupId + ":" + artifactId] = version;
            });
        });
    }
    var json = JSON.parse(fs.readFileSync("package.json", "utf-8"));
    Array.from(json.mvnDependencies || []).forEach(function (dep) {
        var _a = dep.split(":"), groupId = _a[0], artifactId = _a[1], version = _a[2];
        mvnDependencies[groupId + ":" + artifactId] = version;
    });
    if (Object.keys(mvnDependencies).length > 0) {
        var deps = Object.keys(mvnDependencies).map(function (key) { return "compile '" + key + ":" + mvnDependencies[key] + "'"; });
        var path_1 = os.tmpdir() + "/build.gradle." + crypto.randomBytes(16).toString("hex");
        fs.writeFileSync(path_1, build_gradle(deps.join("\n")));
        child = child_process_1.spawnSync("gradle", ["-b", path_1, "--no-daemon", "install"], { stdio: "inherit" });
        if (child.status !== 0)
            process.exit(child.status);
    }
    if (noTypes)
        return;
    if (fs.existsSync("lib")) {
        if (!fs.existsSync("lib/@types"))
            fs.mkdirSync("lib/@types");
        fs.readdirSync("lib").filter(function (jar) { return /\.jar$/.test(jar); }).map(function (jar) {
            parseJAR_1.default("lib/" + jar);
        });
        fs.readdirSync("lib").filter(function (jar) { return /\.jar$/.test(jar); }).map(function (jar) {
            var targetDir = function (jar) { return path.join("lib", "@types", path.basename(jar, ".jar")); };
            if (!fs.existsSync(targetDir(jar)))
                fs.mkdirSync(targetDir(jar));
            parseJAR_1.default(path.join("lib", jar), targetDir(jar));
            console.log(chalk_1.default.green("Generated " + targetDir(jar)));
        });
    }
}
exports.default = default_1;
