"use strict";
exports.__esModule = true;
var fs = require("fs");
var child_process_1 = require("child_process");
var parseJAR_1 = require("../compiler/parseJAR");
var init_1 = require("./init");
var buildGradle = function (deps) { return ("\napply plugin: \"java\"\n\nrepositories {\n  mavenCentral()\n}\n\ntask install(type: Copy) {\n  into \"lib\"\n  from configurations.runtime\n}\n\ndependencies {\n  " + deps + "\n}\n").trim(); };
function default_1(instdir) {
    var child = child_process_1.spawnSync("yarn", ["install"], { stdio: "inherit" });
    if (child.status !== 0)
        process.exit(child.status);
    try {
        var mvnDependencies_1 = {};
        var json_1 = JSON.parse(fs.readFileSync("package.json", "utf-8"));
        (json_1.mvnDependencies || []).forEach(function (dep) {
            var _a = dep.split(":"), groupId = _a[0], artifactId = _a[1], version = _a[2];
            mvnDependencies_1[groupId + ":" + artifactId] = version;
        });
        fs.readdirSync("node_modules").forEach(function (dir) {
            if (!fs.existsSync("node_modules/" + dir + "/package.json"))
                return;
            json_1 = JSON.parse(fs.readFileSync("node_modules/" + dir + "/package.json", "utf-8"));
            (json_1.mvnDependencies || []).forEach(function (dep) {
                var _a = dep.split(":"), groupId = _a[0], artifactId = _a[1], version = _a[2];
                if (!mvnDependencies_1[groupId + ":" + artifactId]) {
                    mvnDependencies_1[groupId + ":" + artifactId] = version;
                }
            });
        });
        var deps = Object.keys(mvnDependencies_1).map(function (key) { return "compile '" + key + ":" + mvnDependencies_1[key] + "'"; });
        fs.writeFileSync("build.gradle", buildGradle(deps.join("\n  ")));
    }
    catch (err) {
        console.error(err.message);
    }
    child = child_process_1.spawnSync("gradle", ["install"], { stdio: "inherit" });
    if (child.status !== 0)
        process.exit(child.status);
    if (!fs.existsSync("lib"))
        fs.mkdirSync("lib");
    if (!fs.existsSync("lib/@types"))
        fs.mkdirSync("lib/@types");
    fs.readdirSync("lib").filter(function (jar) { return /\.jar$/.test(jar); }).map(function (jar) {
        var filename = "lib/@types/" + jar.replace(/\.jar$/, ".d.ts");
        console.log("Generating " + filename);
        fs.writeFileSync(filename, parseJAR_1["default"]("lib/" + jar));
    });
    if (!fs.existsSync("tsconfig.json"))
        fs.writeFileSync("tsconfig.json", init_1.tsconfig(instdir));
}
exports["default"] = default_1;
