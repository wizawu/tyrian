"use strict";
exports.__esModule = true;
var fs = require("fs");
function version(instdir) {
    return JSON.parse(fs.readFileSync(instdir + "/package.json", "utf-8")).version;
}
exports.version = version;
function help(instdir, status) {
    console.error(("\n\nVersion: " + version(instdir) + "\n\nUsage:\n  1c env                        check running environment of 1c\n  1c init                       initialize a new project in current directory\n  1c install                    install dependencies in package.json\n  1c build [-w]                 build the project in current directory\n  1c run [-w] build/<outfile>   run output file compiled from .j.ts\n  1c version                    output version number\n  1c help                       output usage information\n\nOptions:\n  -w    watch changes and re-build/re-run\n\n    ").trim());
    process.exit(status);
}
exports.help = help;
