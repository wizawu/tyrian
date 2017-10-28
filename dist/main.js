"use strict";
exports.__esModule = true;
var fs = require("fs");
var os = require("os");
var path = require("path");
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
    process.exit(const_1.EXIT_STATUS.OK);
}
var envstat = "";
var envfile = os.tmpdir() + "/1c-env-" + (Date.now() / 3600000).toFixed();
if (command === "env" || !fs.existsSync(envfile)) {
    envstat = env_1["default"]();
    fs.writeFileSync(envfile, envstat);
}
if (command === "env") {
    console.error(envstat);
}
else if (command === "install") {
    install_1["default"](instdir);
}
else if (command === "build" && process.argv[3]) {
    var options = {
        watch: false,
        uglify: false,
        outDir: "./"
    };
    var ok = false;
    for (var i = 3; i < process.argv.length; i++) {
        var arg = process.argv[i];
        if (arg === "-w") {
            options.watch = true;
        }
        else if (arg === "-u") {
            options.uglify = true;
        }
        else if (arg === "-c") {
            options.outDir = process.argv[i + 1];
            i += 1;
        }
        else if (arg === "-o") {
            options.outFile = process.argv[i + 1];
            i += 1;
        }
        else {
            ok = true;
            build_1["default"](instdir, instmod, process.argv.slice(i), options);
        }
    }
    if (!ok)
        help_1.help(instdir, const_1.EXIT_STATUS.BAD_COMMAND);
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
            run_1["default"](jjsOptions, arg, process.argv.slice(i + 1), watch);
            break;
        }
    }
}
else {
    help_1.help(instdir, const_1.EXIT_STATUS.BAD_COMMAND);
}
