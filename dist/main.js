"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var chalk_1 = require("chalk");
var build_1 = require("./commands/build");
var env_1 = require("./commands/env");
var install_1 = require("./commands/install");
var run_1 = require("./commands/run");
var const_1 = require("./const");
var help_1 = require("./commands/help");
var instdir = path.resolve(path.dirname(process.argv[1]) + "/..");
var instmod = instdir + (fs.existsSync(instdir + "/node_modules/webpack") ? "/node_modules" : "/..");
var command = process.argv[2];
if (command === "help") {
    help_1.help(instdir, const_1.EXIT_STATUS.OK);
}
else if (command === "version") {
    console.log(help_1.version(instdir));
}
else if (command === "env") {
    console.log(env_1.default());
}
else if (command === "install") {
    install_1.default(instdir, process.argv[3] === "-D");
}
else if (command === "build" && process.argv[3]) {
    var options = {
        input: [],
        output: [],
        watch: false,
        uglify: false,
    };
    var outDir = "";
    var _c = false;
    var _o = false;
    for (var i = 3; i < process.argv.length; i++) {
        var arg = process.argv[i];
        if (arg === "-w") {
            options.watch = true;
        }
        else if (arg === "-u") {
            options.uglify = true;
        }
        else if (arg === "--skipJDK") {
            console.error(chalk_1.default.yellow("`--skipJDK` is no longer supported"));
        }
        else if (arg === "-c") {
            _c = true;
            if (_c && _o) {
                console.error(chalk_1.default.red("Cannot use -c and -o together"));
                process.exit(const_1.EXIT_STATUS.CLI_INVALID_OPTION);
            }
            else if (process.argv[i + 1] === undefined) {
                console.error(chalk_1.default.red("Undefined -c argument"));
                process.exit(const_1.EXIT_STATUS.CLI_INVALID_OPTION);
            }
            else {
                outDir = process.argv[i + 1];
                i += 1;
            }
        }
        else if (arg === "-o") {
            _o = true;
            if (_c && _o) {
                console.error(chalk_1.default.red("Cannot use -c and -o together"));
                process.exit(const_1.EXIT_STATUS.CLI_INVALID_OPTION);
            }
            else if (process.argv[i + 1] === undefined) {
                console.error(chalk_1.default.red("Undefined -o argument"));
                process.exit(const_1.EXIT_STATUS.CLI_INVALID_OPTION);
            }
            else {
                options.output.push(process.argv[i + 1]);
                i += 1;
            }
        }
        else {
            options.input.push(arg);
            if (!_o) {
                if (arg.endsWith(".ts")) {
                    options.output.push(path.join(outDir, path.basename(arg, ".ts") + ".js"));
                }
                else if (arg.endsWith(".tsx")) {
                    options.output.push(path.join(outDir, path.basename(arg, ".tsx") + ".js"));
                }
                else {
                    console.error(chalk_1.default.red("Entry suffix should be .ts or .tsx"));
                    process.exit(const_1.EXIT_STATUS.CLI_INVALID_ENTRY);
                }
            }
        }
    }
    build_1.default(instdir, instmod, options);
}
else if (command === "run" && process.argv[3]) {
    var watch = false;
    var jjsOptions = [];
    for (var i = 3; i < process.argv.length; i++) {
        var arg = process.argv[i];
        if (i === 3 && arg === "-w") {
            watch = true;
        }
        else if (arg.charAt(0) === "-") {
            jjsOptions.push(arg);
        }
        else {
            run_1.default(jjsOptions, arg, process.argv.slice(i + 1), watch);
            break;
        }
    }
}
else {
    help_1.help(instdir, const_1.EXIT_STATUS.CLI_BAD_COMMAND);
}
