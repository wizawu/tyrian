"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var child_process_1 = require("child_process");
function default_1(target) {
    var dirname = path.resolve(path.dirname(target));
    var lib = path.resolve(dirname + (/test$/.test(dirname) ? "/.." : "") + "/../lib");
    var classpath = fs.readdirSync(lib).map(function (jar) { return jar === "@types" ? "" : lib + "/" + jar; }).join(":");
    var child = child_process_1.spawnSync("jjs", ["-cp", classpath, target], { stdio: "inherit" });
    process.exit(child.status);
}
exports["default"] = default_1;
