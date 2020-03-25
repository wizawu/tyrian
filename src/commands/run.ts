import * as fs from "fs"
import * as path from "path"
import { spawn } from "child_process"

import { findJVMBin } from "./env"

export default function (vmArgs: string[], target: string, args: string[], watch: boolean) {
    target = path.resolve(target)
    let classpath = !fs.existsSync("lib") ? "." :
        fs.readdirSync("lib").map(jar => jar === "@types" ? "" : `lib/${jar}`).join(":")

    let run = () => {
        let nodePath = path.join(findJVMBin(), "node")
        let child = spawn(nodePath, [
            "--jvm",
            "--experimental-options",
            "--js.nashorn-compat=true",
            "--vm.classpath=" + classpath,
            ...vmArgs,
            target,
            ...args
        ])
        child.on("exit", code => process.exit(code))

        child.stdout.on("data", chunk => {
            process.stdout.write(chunk)
        })
        child.stderr.on("data", chunk => {
            process.stderr.write(chunk)
        })

        return child
    }

    let child = run()
    if (watch) {
        // restart child when target changes
        fs.watchFile(target, () => {
            child.removeAllListeners()
            child.on("exit", () => child = run())
            child.kill("SIGHUP")
        })
    }
}
