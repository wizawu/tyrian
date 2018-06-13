"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function version(instdir) {
    return JSON.parse(fs.readFileSync(instdir + "/package.json", "utf-8")).version;
}
exports.version = version;
function help(instdir, status) {
    console.log();
    console.log(("\nVersion: " + version(instdir) + "\n\nUsage:\n  1c help                               print this message\n  1c version                            print the version number\n  1c env                                check all prerequisites of 1c\n  1c install                            install dependencies in package.json\n  1c build [options] <output/entry>...  build one/multiple entries (.ts/.tsx)\n  1c run [-w] [jjs options] <output>    run an output file (.js)\n\nbuild options:\n  --skipJDK             skip JDK definition checking\n  -u                    uglify build results\n  -w                    watch changes and re-build\n\nbuild output/entry:\n  -c <dir> <entry>...   output build results to a directory\n  -o <file> <entry>     output to a specific file (CANNOT be used with -c)\n\n  # Examples #\n  input1.ts input2.tsx                  -> ./input1.js ./input2.js\n  -c dir1 input1.ts -c dir2 input2.tsx  -> dir1/input1.js dir2/input2.js\n  -o dir/output input.ts                -> dir/output\n\nrun options:\n  -w                    watch changes and re-run\n  jjs options           check out 'jjs -h' (must be AFTER -w if used)\n                        e.g. -J-Xms64m -J-Xmx256m -Dfile.encoding=UTF-8\n    ").trim());
    console.log();
    process.exit(status);
}
exports.help = help;
