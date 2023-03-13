import { ChildProcessWithoutNullStreams, spawn } from "child_process"
import * as chalk from "colorette"
import fs from "fs"

import { code as ErrorCode } from "../errors"
import { CONFIG_KEY, TARGET } from "../constants"
import * as utils from "../utils"

interface Options {
  watch: boolean
  verbose: boolean
}

export default function (output: string, args: string[], { watch, verbose }: Options): void {
  if (!fs.existsSync(output)) {
    console.error(chalk.red(`The file '${output}' does not exist.`))
    process.exit(ErrorCode.INVALID_ARGUMENT)
  }

  let runner = "jjs"
  if (fs.existsSync("package.json")) {
    runner = utils.readJSON("package.json")[CONFIG_KEY.NASHORN] || runner
  }
  const classPaths = utils.listFilesByExt("lib", ".jar")
  const run = (): ChildProcessWithoutNullStreams => {
    const finalArgs: string[] = ["-scripting", "--language=" + TARGET, "-cp", ":" + classPaths.join(":"), output]
    if (args.length > 0) {
      finalArgs.push("--", ...args)
    }
    if (verbose) {
      console.warn(chalk.gray(runner + " " + finalArgs.join(" ")))
    }
    const child = spawn(runner, finalArgs)
    child.on("exit", code => process.exit(code || 0))
    child.stdout.on("data", chunk => process.stdout.write(chunk))
    child.stderr.on("data", chunk => process.stderr.write(chunk))
    return child
  }

  let child = run()
  if (watch) {
    fs.watchFile(output, () => {
      child.removeAllListeners()
      child.on("exit", () => (child = run()))
      child.kill("SIGHUP")
      if (verbose) {
        console.warn(chalk.gray(`Restarting ${output}...`))
      }
    })
  }
}
