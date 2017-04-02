"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var env_1 = require("./commands/env");
var init_1 = require("./commands/init");
var install_1 = require("./commands/install");
var run_1 = require("./commands/run");
var build_1 = require("./commands/build");
var help_1 = require("./commands/help");
var instdir = path.resolve(path.dirname(process.argv[1]) + "/..");
var instmod = instdir + (fs.existsSync(instdir + "/node_modules") ? "/node_modules" : "/..");
var command = process.argv[2];
var context = path.resolve(".");
var target = process.argv[3] && path.resolve(process.argv[3]);
if (command === "help") {
    help_1.help(instdir, 0);
}
else if (command === "version") {
    console.log(help_1.version(instdir));
    process.exit(0);
}
var envvar = env_1["default"]();
if (command === "env")
    console.error(envvar);
else if (command === "init")
    init_1["default"](instdir);
else if (command === "install")
    install_1["default"]();
else if (command === "build")
    build_1.build(instdir, instmod, context);
else if (command === "watch")
    build_1.watch(instdir, instmod, context);
else if (command === "run" && target)
    run_1["default"](target);
else
    help_1.help(instdir, 1);
