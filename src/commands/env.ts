import chalk from "chalk"
import { EXIT_STATUS } from "../const"
import { spawnSync } from "child_process"

function header(tool: string, link: string) {
    return "\n" + chalk.green(`[${tool}]`) + chalk.gray(`(${link})`) + "\n"
}

const notFound = (stdout, stderr) => (stdout + stderr) || chalk.red("** not found **\n")

export default function () {
    let ok = true
    let output = ""
    let options = { stdio: "pipe" }

    // node
    let child = spawnSync("node", ["-v"], options)
    output += header("node", "https://nodejs.org/en/download/")
    output += notFound(child.stdout, child.stderr)
    if (child.status !== 0) ok = false

    // npm
    child = spawnSync("npm", ["-v"], options)
    output += header("npm", "npm install -g npm")
    output += notFound(child.stdout, child.stderr)
    if (child.status !== 0) ok = false

    // java
    child = spawnSync("java", ["-version"], options)
    output += header("java", "http://openjdk.java.net/install/")
    output += notFound(child.stdout, child.stderr)
    if (child.status !== 0) ok = false

    // jjs
    child = spawnSync("jjs", ["-fv"], { ...{ input: "quit()" }, ...options })
    output += "jjs   -> " + notFound(child.stdout, child.stderr).replace(/jjs>\s+/, "")
    if (child.status !== 0) ok = false

    // javap
    child = spawnSync("which", ["javap"], options)
    output += "javap -> " + notFound(child.stdout, child.stderr)
    if (child.status !== 0) ok = false

    // jar
    child = spawnSync("which", ["jar"], options)
    output += "jar   -> " + notFound(child.stdout, child.stderr)
    if (child.status !== 0) ok = false

    // gradle
    child = spawnSync("gradle", ["-version"], options)
    output += header("gradle", "https://gradle.org/install")
    output += notFound(child.stdout, child.stderr)
    if (child.status !== 0) ok = false

    if (!ok) {
        console.log(output)
        process.exit(EXIT_STATUS.BROKEN_ENV)
    } else {
        return output
    }
}
