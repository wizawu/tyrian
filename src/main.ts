var fs = require("fs")
var path = require("path")

var build = require("./commands/build")
var env = require("./commands/env")
var help = require("./commands/help")
var init = require("./commands/init")
var install = require("./commands/install")
var run = require("./commands/run")

var libdir = path.resolve(path.dirname(process.argv[1]) + "/..")
var libmod = libdir + (fs.existsSync(libdir + "/node_modules") ? "/node_modules" : "/..")
var command = process.argv[2]
var context = path.resolve(process.argv[3] || "")
var target = process.argv[3] && path.resolve(process.argv[3])

if (command === "help") help(libdir, 0)
if (command === "version") {
    console.log(help.version(libdir))
    process.exit(0)
}

var envvar = env()

if (command === "env") console.error(envvar)
else if (command === "init") init(libdir)
else if (command === "install") install()
else if (command === "build") build.entry(libdir, libmod, context)
else if (command === "watch") build.watch(libdir, libmod, context)
else if (command === "run" && target) run(target)
else help(libdir, 1)
