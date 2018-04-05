import * as fs from "fs"
import * as path from "path"
import { spawn } from "child_process"

export default function (jjsArgs: string[], target: string, args: string[], watch: boolean) {
    target = path.resolve(target)
    let classpath = !fs.existsSync("lib") ? "." :
        fs.readdirSync("lib").map(jar => jar === "@types" ? "" : `lib/${jar}`).join(":")

    let run = () => {
        let child = spawn("jjs", [
            ...jjsArgs,
            "-scripting", "--language=es6",
            "-cp", classpath,
            target,
            "--", ...args
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
