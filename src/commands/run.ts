import chalk from "chalk"
import fs from "fs"
import redent from "redent"
import { ChildProcessWithoutNullStreams, spawn, spawnSync } from "child_process"

import * as utils from "../utils"
import { code as ErrorCode } from "../errors"
import { path as PATH } from "../constants"

type Runtime = "graaljs" | "nashorn"

interface Options {
  inspectBrk: boolean
  watch: boolean
}

export default function (output: string, args: string[], { inspectBrk, watch }: Options): void {
  if (!fs.existsSync(output)) {
    console.error(chalk.red(`The file '${output}' does not exist.`))
    process.exit(ErrorCode.INVALID_ARGUMENT)
  }

  const [type, runner] = checkRuntime()
  const classPaths = utils.listFilesByExt("lib", ".jar")
  const run = (): ChildProcessWithoutNullStreams => {
    const finalArgs: string[] = []
    if (type === "nashorn") {
      finalArgs.push(
        "-scripting",
        "--language=es6",
        "-cp", ":" + classPaths.join(":"),
        output,
        "--",
        ...args
      )
    } else if (type === "graaljs") {
      if (inspectBrk) finalArgs.push("--inspect-brk=" + inspectBrk)
      finalArgs.push(
        "--jvm",
        "--experimental-options",
        "--js.nashorn-compat=true",
        "--vm.cp=:" + classPaths.join(":"),
        output,
        ...args
      )
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
      child.on("exit", () => child = run())
      child.kill("SIGHUP")
      console.log(chalk.gray(`Restarting ${output}...`))
    })
  }
}

export function checkRuntime(): [Runtime, string] {
  const { runtime } = utils.readJsonObject(PATH.RC)
  if (typeof runtime.graaljs === "string") {
    return ["graaljs", runtime.graaljs]
  } else if (typeof runtime.nashorn === "string") {
    return ["nashorn", runtime.nashorn]
  } else if (spawnSync("node", ["--version:graalvm"]).status === 0) {
    return ["graaljs", "node"]
  } else if (spawnSync("jjs", ["-version"]).status === 0) {
    return ["nashorn", "jjs"]
  } else {
    console.error(`You should define at least one runtime in ${PATH.RC}`)
    console.error(redent(`
      {
        "runtime": {
          "graaljs": ".../graalvm-*/languages/js/bin/node" ${chalk.green("// recommended")}
          "nashorn": ".../openjdk-*/bin/jjs"
        }
      }
    `, 2))
    process.exit(ErrorCode.UNKNOWN_RUNTIME)
  }
}
