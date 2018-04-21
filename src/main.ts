import * as fs from "fs"
import * as path from "path"
import chalk from "chalk"

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
} else if (command === "env") {
    console.log(env())
} else if (command === "install") {
    install(instdir)
} else if (command === "build" && process.argv[3]) {
    let options: BuildOptions = {
        input: [],
        output: [],
        watch: false,
        uglify: false,
    }
    let outDir = ""
    let _c = false
    let _o = false
    for (let i = 3; i < process.argv.length; i++) {
        let arg = process.argv[i]
        if (arg === "-w") {
            options.watch = true
        } else if (arg === "-u") {
            options.uglify = true
        } else if (arg === "--skipJDK") {
            options.skipJDK = true
        } else if (arg === "-c") {
            _c = true
            if (_c && _o) {
                console.error(chalk.red(`Cannot use -c and -o together`))
                process.exit(EXIT_STATUS.CLI_INVALID_OPTION)
            } else if (process.argv[i + 1] === undefined) {
                console.error(chalk.red(`Undefined -c argument`))
                process.exit(EXIT_STATUS.CLI_INVALID_OPTION)
            } else {
                outDir = process.argv[i + 1]
                i += 1
            }
        } else if (arg === "-o") {
            _o = true
            if (_c && _o) {
                console.error(chalk.red(`Cannot use -c and -o together`))
                process.exit(EXIT_STATUS.CLI_INVALID_OPTION)
            } else if (process.argv[i + 1] === undefined) {
                console.error(chalk.red(`Undefined -o argument`))
                process.exit(EXIT_STATUS.CLI_INVALID_OPTION)
            } else {
                options.output.push(process.argv[i + 1])
                i += 1
            }
        } else {
            options.input.push(arg)
            if (!_o) {
                if (arg.endsWith(".ts")) {
                    options.output.push(path.join(outDir, path.basename(arg, ".ts") + ".js"))
                } else if (arg.endsWith(".tsx")) {
                    options.output.push(path.join(outDir, path.basename(arg, ".tsx") + ".js"))
                } else {
                    console.error(chalk.red("Entry suffix should be .ts or .tsx"))
                    process.exit(EXIT_STATUS.CLI_INVALID_ENTRY)
                }
            }
        }
    }
    build(instdir, instmod, options)
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
    help(instdir, EXIT_STATUS.CLI_BAD_COMMAND)
}
