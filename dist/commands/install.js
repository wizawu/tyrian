"use strict";
exports.__esModule = true;
var chalk = require("chalk");
var crypto = require("crypto");
var fs = require("fs");
var os = require("os");
var child_process_1 = require("child_process");
var parseJAR_1 = require("../compiler/parseJAR");
var tsconfig = function (instdir) { return JSON.stringify({
    "compilerOptions": {
        "jsx": "react",
        "lib": ["dom", "es2017"],
        "noUnusedLocals": true,
        "removeComments": true,
        "skipLibCheck": true,
        "sourceMap": true,
        "strictNullChecks": true,
        "target": "es5",
        "typeRoots": [
            instdir + "/@types",
            "lib/@types",
            "node_modules/@types",
        ]
    },
    "include": [
        instdir + "/@types/**/*.d.ts",
        "lib/@types/**/*.d.ts",
        "src/**/*.ts",
        "src/**/*.tsx",
    ]
}, null, 2); };
var package_json = JSON.stringify({
    "dependencies": {},
    "mvnDependencies": []
}, null, 2);
var build_gradle = function (deps) { return "\n    apply plugin: \"java\"\n\n    repositories {\n        jcenter()\n        mavenCentral()\n    }\n\n    task install(type: Copy) {\n        into \"" + process.cwd() + "/lib\"\n        from configurations.runtime\n    }\n\n    dependencies {\n        " + deps + "\n    }\n"; };
function default_1(instdir) {
    fs.writeFileSync("tsconfig.json", tsconfig(instdir));
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
            (json.mvnDependencies || []).forEach(function (dep) {
                var _a = dep.split(":"), groupId = _a[0], artifactId = _a[1], version = _a[2];
                mvnDependencies[groupId + ":" + artifactId] = version;
            });
        });
    }
    var json = JSON.parse(fs.readFileSync("package.json", "utf-8"));
    (json.mvnDependencies || []).forEach(function (dep) {
        var _a = dep.split(":"), groupId = _a[0], artifactId = _a[1], version = _a[2];
        mvnDependencies[groupId + ":" + artifactId] = version;
    });
    if (Object.keys(mvnDependencies).length > 0) {
        var deps = Object.keys(mvnDependencies).map(function (key) { return "compile '" + key + ":" + mvnDependencies[key] + "'"; });
        var path = os.tmpdir() + "/build.gradle." + crypto.randomBytes(16).toString("hex");
        fs.writeFileSync(path, build_gradle(deps.join("\n")));
        child = child_process_1.spawnSync("gradle", ["-b", path, "--no-daemon", "install"], { stdio: "inherit" });
        if (child.status !== 0)
            process.exit(child.status);
        if (!fs.existsSync("lib/@types"))
            fs.mkdirSync("lib/@types");
        fs.readdirSync("lib").filter(function (jar) { return /\.jar$/.test(jar); }).map(function (jar) {
            parseJAR_1["default"]("lib/" + jar);
        });
        fs.readdirSync("lib").filter(function (jar) { return /\.jar$/.test(jar); }).map(function (jar) {
            var filename = "lib/@types/" + jar.replace(/\.jar$/, ".d.ts");
            fs.writeFileSync(filename, parseJAR_1["default"]("lib/" + jar));
            console.log(chalk.green("Generated " + filename));
        });
    }
}
exports["default"] = default_1;
