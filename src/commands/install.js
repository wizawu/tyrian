"use strict";
exports.__esModule = true;
var fs = require("fs");
var child_process_1 = require("child_process");
var parseJAR_1 = require("../compiler/parseJAR");
// build.gradle
var buildGradle = function (deps) { return ("\napply plugin: \"java\"\n\nrepositories {\n  mavenCentral()\n}\n\ntask install(type: Copy) {\n  into \"lib\"\n  from configurations.runtime\n}\n\ndependencies {\n  " + deps + "\n}\n").trim(); };
function default_1() {
    var child = child_process_1.spawnSync("yarn", ["install"], { stdio: "inherit" });
    if (child.status !== 0)
        process.exit(child.status);
    try {
        var json = JSON.parse(fs.readFileSync("package.json").toString());
        if (!json.mvnDependencies)
            return;
        var deps = json.mvnDependencies.map(function (dep) { return "compile '" + dep + "'"; }).join("\n");
        fs.writeFileSync("build.gradle", buildGradle(deps));
        child = child_process_1.spawnSync("gradle", ["install"], { stdio: "inherit" });
        if (child.status !== 0)
            process.exit(child.status);
    }
    catch (err) {
        console.error(err.message);
    }
    fs.readdirSync("lib").filter(function (jar) { return /\.jar$/.test(jar); }).map(function (jar) {
        var filename = "lib/@types/" + jar.replace(/\.jar$/, ".d.ts");
        console.log("Generating " + filename);
        fs.writeFileSync(filename, parseJAR_1["default"]("lib/" + jar));
    });
}
exports["default"] = default_1;
