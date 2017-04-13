import * as fs from "fs"
import * as path from "path"
import { spawn } from "child_process"

export default function (target: string, reload?: boolean) {
    let dirname = path.resolve(path.dirname(target))
    let lib = path.resolve(dirname + (/test$/.test(dirname) ? "/../../lib" : "/../lib"))
    let classpath = fs.readdirSync(lib).map(jar => jar === "@types" ? "" : `${lib}/${jar}`).join(":")
    let run = () => spawn("jjs", ["-cp", classpath, target], { stdio: "inherit" })
    let child = run()
    child.on("exit", code => process.exit(code))
    if (reload) {
        fs.watchFile(target, () => {
            child.removeAllListeners()
            child.on("exit", () => {
                child = run()
                child.on("exit", code => process.exit(code))
            })
            child.kill("SIGHUP")
        })
    }
}