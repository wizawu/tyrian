import * as fs from "fs"
import * as path from "path"

import build from "./commands/build"
import env from "./commands/env"
import init from "./commands/init"
import install from "./commands/install"
import run from "./commands/run"
import { EXIT_STATUS } from "./const"
import { help, version } from "./commands/help"

const instdir = path.resolve(path.dirname(process.argv[1]) + "/..")
const instmod = instdir + (fs.existsSync(instdir + "/node_modules/webpack") ? "/node_modules" : "/..")
const command = process.argv[2]

if (command === "help") {
    help(instdir, EXIT_STATUS.OK)
} else if (command === "version") {
    console.log(version(instdir))
    process.exit(EXIT_STATUS.OK)
}

let envstat: string | undefined = ""
let envfile = `/tmp/1c-env-${(Date.now() / 3600000).toFixed()}`
if (command === "env" || !fs.existsSync(envfile)) {
    envstat = env()
    fs.writeFileSync(envfile, envstat)
}

if (command === "env") {
    console.error(envstat)
} else if (command === "init") {
    init(instdir)
} else if (command === "install") {
    install(instdir)
} else if (command === "build" && process.argv[3]) {
    if (process.argv[3] === "-w") {
        build(instdir, instmod, process.argv.slice(4), true)
    } else {
        build(instdir, instmod, process.argv.slice(3), false)
    }
} else if (command === "run" && process.argv[3]) {
    let nargs = process.argv.length
    if (process.argv[3] === "-w") {
        run(process.argv[nargs - 1], process.argv.slice(4, nargs - 1), true)
    } else {
        run(process.argv[nargs - 1], process.argv.slice(3, nargs - 1), false)
    }
} else {
    help(instdir, EXIT_STATUS.BAD_COMMAND)
}
