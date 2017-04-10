"use strict";
exports.__esModule = true;
var fs = require("fs");
function version(instdir) {
    return JSON.parse(fs.readFileSync(instdir + "/package.json", "utf-8")).version;
}
exports.version = version;
function help(instdir, status) {
    console.error(("\n\nVersion: " + version(instdir) + "\n\nUsage:\n  1c env                    Check running environment of 1c\n  1c init                   Initialize a new project in current directory\n  1c install                Install dependencies in package.json\n  1c build                  Build the project in current directory\n  1c watch                  Watch and rebuild the project\n  1c run build/<outfile>    Run output file compiled from .j.ts\n  1c version                Output the version number\n  1c help                   Output usage information\n\n    ").trim());
    process.exit(status);
}
exports.help = help;
