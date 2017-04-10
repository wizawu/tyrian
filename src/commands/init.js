"use strict";
exports.__esModule = true;
var chalk = require("chalk");
var fs = require("fs");
var PACKAGE_JSON = "\n{\n  \"dependencies\": {\n    \"mockxhr\": \"^1.3.0\"\n  },\n  \"mvnDependencies\": [\n    \"org.tinylog:tinylog:1.2\"\n  ]\n}\n".trim();
var _GITIGNORE = "\n*.j.d.ts\n*.j.js\n.gradle\nbuild\nbuild.gradle\nlib\nnode_modules\ntsconfig.json\nyarn.lock\n".trim();
exports.tsconfig = function (instdir) { return ("\n{\n  \"compilerOptions\": {\n    \"jsx\": \"react\",\n    \"lib\": [\"dom\", \"es2017\"],\n    \"noUnusedLocals\": true,\n    \"removeComments\": true,\n    \"skipLibCheck\": true,\n    \"strictNullChecks\": true,\n    \"target\": \"es5\",\n    \"typeRoots\": [\n      \"" + instdir + "/@types\",\n      \"lib/@types\",\n      \"node_modules/@types\",\n      \"src/js/@types\"\n    ]\n  },\n  \"include\": [\n    \"" + instdir + "/@types/**/*.d.ts\",\n    \"lib/@types/**/*.d.ts\",\n    \"src/**/*.ts\",\n    \"src/**/*.tsx\"\n  ]\n}\n").trim(); };
function default_1(instdir) {
    ["build", "build/assets", "build/test", "lib", "node_modules", "src", "test", "test/js"].forEach(function (dir) {
        try {
            fs.mkdirSync(dir);
            console.log(chalk.green("mkdir " + dir));
        }
        catch (err) {
            if (err.code === "EEXIST") {
                console.error(chalk.yellow(err.message));
            }
            else {
                console.error(chalk.red(err.message));
            }
        }
    });
    ["assets", "assets/img", "css", "html", "js", "js/entry", "js/@types"].forEach(function (dir) {
        try {
            fs.mkdirSync("src/" + dir);
            console.log(chalk.green("mkdir src/" + dir));
        }
        catch (err) {
            if (err.code === "EEXIST") {
                console.error(chalk.yellow(err.message));
            }
            else {
                console.error(chalk.red(err.message));
            }
        }
    });
    [
        ["package.json", PACKAGE_JSON],
        ["tsconfig.json", exports.tsconfig(instdir)],
        [".gitignore", _GITIGNORE],
        ["src/assets/todo.txt", ""],
        ["src/assets/img/blank.jpg", ""],
        ["src/css/index.less", "body { display: flex }"],
        ["src/html/index.html", "<!DOCTYPE html>"],
        ["src/js/entry/index.tsx", "import \"../../css/index.less\""],
        ["src/js/entry/main.j.ts", "org.pmw.tinylog.Logger.info(java.lang.System.getProperty(\"java.version\"))"],
        ["src/js/@types/common.d.ts", ""],
        ["test/js/test.j.ts", "org.pmw.tinylog.Logger.warn(\"test\")"],
    ].forEach(function (_a) {
        var path = _a[0], content = _a[1];
        if (!fs.existsSync(path)) {
            try {
                fs.writeFileSync(path, content);
                console.log(chalk.green("create " + path));
            }
            catch (err) {
                if (err.code === "EEXIST") {
                    console.error(chalk.yellow(err.message));
                }
                else {
                    console.error(chalk.red(err.message));
                }
            }
        }
    });
}
exports["default"] = default_1;
