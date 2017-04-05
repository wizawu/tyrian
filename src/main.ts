import * as fs from "fs"
import * as path from "path"

import env from "./commands/env"
import init from "./commands/init"
import install from "./commands/install"
import run from "./commands/run"
import { build, watch } from "./commands/build"
import { help, version } from "./commands/help"
import { EXIT_STATUS } from "./const"

const instdir = path.resolve(path.dirname(process.argv[1]) + "/..")
const instmod = instdir + (fs.existsSync(instdir + "/node_modules/webpack") ? "/node_modules" : "/..")
const command = process.argv[2]
const context = path.resolve(".")
const target = process.argv[3] && path.resolve(process.argv[3])

if (command === "help") {
    help(instdir, EXIT_STATUS.OK)
} else if (command === "version") {
    console.log(version(instdir))
    process.exit(EXIT_STATUS.OK)
}

const envvar = env()

if (command === "env") console.error(envvar)
else if (command === "init") init(instdir)
else if (command === "install") install()
else if (command === "build") build(instdir, instmod, context)
else if (command === "watch") watch(instdir, instmod, context)
else if (command === "run" && target) run(target)
else help(instdir, EXIT_STATUS.BAD_COMMAND)
