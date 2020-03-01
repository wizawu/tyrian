"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function version(instdir) {
    return JSON.parse(fs.readFileSync(instdir + "/package.json", "utf-8")).version;
}
exports.version = version;
function help(instdir, status) {
    console.log();
    console.log(("\nVersion: " + version(instdir) + "\n\nUsage:\n  1c help                               print this message\n  1c version                            print the version number\n  1c env                                check all prerequisites of 1c\n  1c install [options]                  install dependencies in package.json\n  1c build [options] <output/entry>...  build one/multiple entries (.ts/.tsx)\n  1c run [-w] [vm options] <output>     run an output file (.js)\n\ninstall options:\n  -D                    do not generate typescript definitions for lib/*.jar\n\nbuild options:\n  -u                    uglify all build results\n  -u/<regex>/           uglify build results matching <regex>\n  -w                    watch changes and re-build\n\nbuild output/entry:\n  -c <dir> <entry>...   output build results to a directory\n  -o <file> <entry>     output to a specific file (CANNOT be used with -c)\n\n  # Examples #\n  input1.ts input2.tsx                  -> ./input1.js ./input2.js\n  -c dir1 input1.ts -c dir2 input2.tsx  -> dir1/input1.js dir2/input2.js\n  -o dir/output input.ts                -> dir/output\n\nrun options:\n  -w                    watch changes and re-run\n  vm options            check out 'node --help:vm' (must be AFTER -w if used)\n                        e.g. --vm.Xms64m -vm.Xmx256m -vm.Dfile.encoding=UTF-8\n    ").trim());
    console.log();
    process.exit(status);
}
exports.help = help;
