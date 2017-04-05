"use strict";
exports.__esModule = true;
var fs = require("fs");
var PACKAGE_JSON = "\n{\n  \"dependencies\": {\n    \"mockxhr\": \"^1.3.0\"\n  },\n  \"mvnDependencies\": [\n    \"org.tinylog:tinylog:1.2\"\n  ]\n}\n".trim();
var _GITIGNORE = "\n.gradle\nbuild\nbuild.gradle\nlib\nnode_modules\ntsconfig.json\nyarn.lock\n".trim();
var tsconfig = function (instdir) { return ("\n{\n  \"compilerOptions\": {\n    \"jsx\": \"react\",\n    \"lib\": [\"dom\", \"es2017\"],\n    \"skipLibCheck\": true,\n    \"target\": \"es5\",\n    \"typeRoots\": [\n      \"" + instdir + "/@types\",\n      \"lib/@types\",\n      \"node_modules/@types\",\n      \"src/js/@types\"\n    ]\n  },\n  \"include\": [\n    \"" + instdir + "/@types/**/*.ts\",\n    \"**/*.ts\",\n    \"**/*.tsx\"\n  ]\n}\n").trim(); };
function default_1(instdir) {
    ["build", "lib", "node_modules", "src"].forEach(function (dir) {
        try {
            fs.mkdirSync(dir);
            console.log("mkdir " + dir);
        }
        catch (err) {
            if (err.code !== "EEXIST")
                console.error(err.message);
        }
    });
    ["assets", "assets/img", "css", "html", "js", "js/entry", "js/@types"].forEach(function (dir) {
        try {
            fs.mkdirSync("src/" + dir);
            console.log("mkdir src/" + dir);
        }
        catch (err) {
            if (err.code !== "EEXIST")
                console.error(err.message);
        }
    });
    [
        ["package.json", PACKAGE_JSON],
        ["tsconfig.json", tsconfig(instdir)],
        [".gitignore", _GITIGNORE],
        ["src/assets/test.txt", ""],
        ["src/assets/img/test.jpg", ""],
        ["src/css/test.less", "body { dislpay: flex }"],
        ["src/html/test.html", "<!DOCTYPE html>"],
        ["src/js/entry/test.tsx", "import \"../../css/test.less\""],
        ["src/js/entry/test.j.ts", "org.pmw.tinylog.Logger.info(java.lang.System.getProperty(\"java.version\"))"],
        ["src/js/@types/test.d.ts", ""],
    ].forEach(function (_a) {
        var path = _a[0], content = _a[1];
        if (!fs.existsSync(path)) {
            try {
                fs.writeFileSync(path, content);
                console.log("create " + path);
            }
            catch (err) {
                console.error(err.message);
            }
        }
    });
}
exports["default"] = default_1;
