"use strict";
exports.__esModule = true;
var fs = require("fs");
function version(instdir) {
    return JSON.parse(fs.readFileSync(instdir + "/package.json", "utf-8")).version;
}
exports.version = version;
function help(instdir, status) {
    console.error(("\n\nVersion: " + version(instdir) + "\n\nUsage:\n  1c help                               print this message\n  1c version                            print the version number\n  1c env                                check if all dependencies of 1c are ready\n  1c install                            install dependencies in package.json\n  1c build [-w] <entry>...              bundle one/multiple entries (.ts/.tsx)\n  1c run [-w] [jjs options] <output>    run output file (.js)\n\nOptions:\n  -w                watch changes and re-build/re-run\n  jjs options       check out 'jjs -h'\n\n    ").trim());
    process.exit(status);
}
exports.help = help;
