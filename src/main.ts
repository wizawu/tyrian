import * as fs from "fs"
import * as os from "os"
import * as path from "path"

import build from "./commands/build"
import env from "./commands/env"
import install from "./commands/install"
import run from "./commands/run"
import { EXIT_STATUS } from "./const"
import { Options as BuildOptions } from "./commands/build"
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
let envfile = `${os.tmpdir()}/1c-env-${(Date.now() / 3600000).toFixed()}`
if (command === "env" || !fs.existsSync(envfile)) {
    envstat = env()
    fs.writeFileSync(envfile, envstat)
}

if (command === "env") {
    console.error(envstat)
} else if (command === "install") {
    install(instdir)
} else if (command === "build" && process.argv[3]) {
    let options: BuildOptions = {
        watch: false,
        uglify: false,
        outDir: "./",
    }
    for (let i = 3; i < process.argv.length; i++) {
        let arg = process.argv[i]
        if (arg === "-w") {
            options.watch = true
        } else if (arg === "-u") {
            options.uglify = true
        } else if (arg === "-c") {
            options.outDir = process.argv[i + 1]
            i += 1
        } else if (arg === "-o") {
            options.outFile = process.argv[i + 1]
            i += 1
        } else {
            build(instdir, instmod, process.argv.slice(i), options)
            break
        }
    }
} else if (command === "run" && process.argv[3]) {
    let watch = false
    let jjsOptions = []
    for (let i = 3; i < process.argv.length; i++) {
        let arg = process.argv[i]
        if (i === 3 && arg === "-w") {
            watch = true
        } else if (arg.charAt(0) === "-") {
            jjsOptions.push(arg as never)
        } else {
            run(jjsOptions, arg, process.argv.slice(i + 1), watch)
            break
        }
    }
} else {
    help(instdir, EXIT_STATUS.BAD_COMMAND)
}
