import * as path from "path"
import * as which from "which"
import chalk from "chalk"
import { spawnSync } from "child_process"

import { EXIT_STATUS } from "../const"

function header(tool: string, link: string) {
    return "\n" + chalk.green(`[${tool}]`) + chalk.gray(`(${link})`) + "\n"
}

const notFound = (stdout, stderr) => (stdout + stderr) || chalk.red("** not found **\n")

export function findJVMBin() {
    if (process.env.GRAALVM_HOME) {
        return path.join(process.env.GRAALVM_HOME, "bin")
    } else {
        let javaPath = which.sync("java")
        return path.dirname(javaPath)
    }
}

export default function () {
    let ok = true
    let output = ""
    let options = { stdio: "pipe" }

    // node
    let child = spawnSync("node", ["-v"], options)
    output += header("node", "https://nodejs.org/en/download")
    output += notFound(child.stdout, child.stderr)
    if (child.status !== 0) ok = false

    // npm
    child = spawnSync("npm", ["-v"], options)
    output += header("npm", "npm install -g npm")
    output += notFound(child.stdout, child.stderr)
    if (child.status !== 0) ok = false

    // java
    child = spawnSync(path.join(findJVMBin(), "java"), ["-version"], options)
    output += header("java", "https://www.graalvm.org/downloads")
    output += notFound(child.stdout, child.stderr)
    if (child.status !== 0) ok = false

    // gradle
    child = spawnSync("gradle", ["-version"], options)
    output += header("gradle", "https://gradle.org/install")
    output += notFound(child.stdout, child.stderr).replace(/(^|\n)\n/g, "$1")
    if (child.status !== 0) ok = false

    if (!ok) {
        console.log("\n" + output.trim() + "\n")
        process.exit(EXIT_STATUS.BROKEN_ENV)
    } else {
        return "\n" + output.trim() + "\n"
    }
}
