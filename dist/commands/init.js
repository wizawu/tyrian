"use strict";
exports.__esModule = true;
var chalk = require("chalk");
var fs = require("fs");
var PACKAGE_JSON = "\n{\n  \"dependencies\": {\n    \"mockxhr\": \"^1.3.0\"\n  },\n  \"mvnDependencies\": [\n    \"org.tinylog:tinylog:1.2\"\n  ]\n}\n".trim();
var _GITIGNORE = "\nbuild\nlib\nnode_modules\ntsconfig.json\nyarn.lock\n".trim();
exports.tsconfig = function (instdir, noJDK) {
    if (noJDK === void 0) { noJDK = false; }
    return JSON.stringify({
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
                "src/js/@types"
            ].slice(noJDK ? 1 : 0)
        },
        "include": [
            instdir + "/@types/**/*.d.ts",
            "lib/@types/**/*.d.ts",
            "src/**/*.ts",
            "src/**/*.tsx",
        ].slice(noJDK ? 1 : 0)
    }, null, 2);
};
function default_1(instdir) {
    ["build", "build/assets", "lib", "node_modules", "src"].forEach(function (dir) {
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
    ["assets", "assets/img", "css", "js", "js/@types"].forEach(function (dir) {
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
        ["src/assets/index.html", "<!DOCTYPE html>"],
        ["src/assets/img/blank.jpg", ""],
        ["src/css/index.less", "body { display: flex }"],
        ["src/js/index.tsx", "import \"../css/index.less\""],
        ["src/js/main.j.ts", "org.pmw.tinylog.Logger.info(java.lang.System.getProperty(\"java.version\"))"],
        ["src/js/@types/common.d.ts", ""],
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
