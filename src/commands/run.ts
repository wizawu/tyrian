import * as fs from "fs"
import * as path from "path"
import {spawnSync} from "child_process"

export default function(target: string) {
    let lib = path.resolve(path.dirname(target) + "/../lib")
    let classpath = fs.readdirSync(lib).map(jar => jar === "@types" ? "" : `${lib}/${jar}`).join(":")
    let child = spawnSync("jjs", ["-cp", classpath, target], {stdio: "inherit"})
    process.exit(child.status)
}