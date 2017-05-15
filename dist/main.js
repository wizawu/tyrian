"use strict";
exports.__esModule = true;
var fs = require("fs");
var os = require("os");
var path = require("path");
var build_1 = require("./commands/build");
var env_1 = require("./commands/env");
var init_1 = require("./commands/init");
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
else if (command === "init") {
    init_1["default"](instdir);
}
else if (command === "install") {
    install_1["default"](instdir);
}
else if (command === "build" && process.argv[3]) {
    if (process.argv[3] === "-w") {
        build_1["default"](instdir, instmod, process.argv.slice(4), true);
    }
    else {
        build_1["default"](instdir, instmod, process.argv.slice(3), false);
    }
}
else if (command === "run" && process.argv[3]) {
    var nargs = process.argv.length;
    if (process.argv[3] === "-w") {
        run_1["default"](process.argv[nargs - 1], process.argv.slice(4, nargs - 1), true);
    }
    else {
        run_1["default"](process.argv[nargs - 1], process.argv.slice(3, nargs - 1), false);
    }
}
else {
    help_1.help(instdir, const_1.EXIT_STATUS.BAD_COMMAND);
}
