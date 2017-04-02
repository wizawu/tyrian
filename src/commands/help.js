"use strict";
exports.__esModule = true;
var fs = require("fs");
function version(instdir) {
    return JSON.parse(fs.readFileSync(instdir + "/package.json").toString()).version;
}
exports.version = version;
function help(instdir, exit) {
    console.log("Version: " + version(instdir));
    console.log("Usage:");
    console.log("  1c env");
    console.log("  1c init");
    console.log("  1c install");
    console.log("  1c build");
    console.log("  1c watch");
    console.log("  1c run build/<outfile>");
    console.log("  1c version");
    console.log("  1c help");
    process.exit(exit);
}
exports.help = help;
