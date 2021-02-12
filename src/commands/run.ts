import chalk from "chalk"
import fs from "fs"
import redent from "redent"
import { spawn } from "child_process"

import * as utils from "../utils"
import { code as ErrorCode } from "../errors"

type Runtime = "graaljs" | "nashorn"

export default function (output: string, args: string[], watch: boolean) {
  const [type, runner] = checkRuntime()
  const classPaths = utils.listFilesByExt("lib", ".jar")
  const run = () => {
    let finalArgs: string[] = []
    if (type === "nashorn") {
      finalArgs = [
        "-scripting",
        "--language=es6",
        "-cp", ":" + classPaths.join(":"),
        output,
        "--", ...args
      ]
    } else if (type === "graaljs") {
      finalArgs = [
        "--jvm",
        "--experimental-options",
        "--js.nashorn-compat=true",
        "--vm.cp=:" + classPaths.join(":"),
        output,
        ...args
      ]
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

function checkRuntime(): [Runtime, string] {
  const { runtime } = JSON.parse(fs.readFileSync("package.json", "utf-8"))
  if (typeof runtime.graaljs === "string") {
    return ["graaljs", runtime.graaljs]
  } else if (typeof runtime.nashorn === "string") {
    return ["nashorn", runtime.nashorn]
  } else {
    console.error("You should define at least one runtime in package.json")
    console.error(redent(`
      {
        "runtime": {
          "graaljs": ".../graalvm-*/languages/js/bin/node", ${chalk.green("// recommended")}
          "nashorn": ".../openjdk-*/bin/jjs"
        }
      }
    `, 2))
    process.exit(ErrorCode.UNKNOWN_RUNTIME)
  }
}
