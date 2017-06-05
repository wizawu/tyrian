"use strict";
exports.__esModule = true;
var fs = require("fs");
function version(instdir) {
    return JSON.parse(fs.readFileSync(instdir + "/package.json", "utf-8")).version;
}
exports.version = version;
function help(instdir, status) {
    console.error(("\n\nVersion: " + version(instdir) + "\n\nUsage:\n  1c help                               print this message\n  1c version                            print the version number\n  1c env                                check all prerequisites of 1c\n  1c install                            install dependencies in package.json\n  1c build [options] <entry>...         build one/multiple entries (.ts/.tsx)\n  1c run [-w] [jjs options] <output>    run an output file (.js)\n\nbuild options:\n  -c <dir>          output build result in <dir>\n  -m                build each entry as a commonjs module\n  -o <file>         output build result to <file>\n  -u                uglify build result\n  -w                watch changes and re-build\n\nrun options:\n  -w                watch changes and re-run\n  jjs options       check out 'jjs -h' (should after -w if exist)\n\n    ").trim());
    process.exit(status);
}
exports.help = help;
