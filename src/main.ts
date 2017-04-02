import * as fs from "fs"
import * as path from "path"

import env from "./commands/env"
import init from "./commands/init"
import install from "./commands/install"
import run from "./commands/run"
import { build, watch } from "./commands/build"
import { help, version } from "./commands/help"

const libdir = path.resolve(path.dirname(process.argv[1]) + "/..")
const libmod = libdir + (fs.existsSync(libdir + "/node_modules") ? "/node_modules" : "/..")
const command = process.argv[2]
const context = path.resolve(process.argv[3] || "")
const target = process.argv[3] && path.resolve(process.argv[3])

if (command === "help") help(libdir, 0)
if (command === "version") {
    console.log(version(libdir))
    process.exit(0)
}

const envvar = env()

if (command === "env") console.error(envvar)
else if (command === "init") init(libdir)
else if (command === "install") install()
else if (command === "build") build(libdir, libmod, context)
else if (command === "watch") watch(libdir, libmod, context)
else if (command === "run" && target) run(target)
else help(libdir, 1)