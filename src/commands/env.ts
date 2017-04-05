import { spawnSync } from "child_process"
import { EXIT_STATUS } from "../const"

const header = (tool: string, link: string) => `\n[${tool}](${link})\n`
const notFound = () => `** not found **\n`

export default function () {
    let ok = true
    let output = ""
    let child = null
    let options = { stdio: "pipe" }

    // node
    child = spawnSync("node", ["-v"], options)
    output += header("node", "https://nodejs.org/en/download/")
    output += child.stdout + child.stderr || notFound()
    if (child.status !== 0) ok = false

    // yarn
    child = spawnSync("yarn", ["-V"], options)
    output += header("yarn", "npm install -g yarn")
    output += child.stdout + child.stderr || notFound()
    if (child.status !== 0) ok = false

    // java
    child = spawnSync("java", ["-version"], options)
    output += header("java", "http://openjdk.java.net/install/")
    output += child.stdout + child.stderr || notFound()
    if (child.status !== 0) ok = false

    // jjs
    child = spawnSync("jjs", ["-fv"], { ...{ input: "quit()" }, ...options })
    output += "jjs -> " + (child.stdout + child.stderr || notFound()).replace(/jjs>\s+/, "")
    if (child.status !== 0) ok = false

    // javap
    child = spawnSync("which", ["javap"], options)
    output += "javap -> " + (child.stdout + child.stderr || notFound())
    if (child.status !== 0) ok = false

    // jar
    child = spawnSync("which", ["jar"], options)
    output += "jar -> " + (child.stdout + child.stderr || notFound())
    if (child.status !== 0) ok = false

    // gradle
    child = spawnSync("gradle", ["-version"], options)
    output += header("gradle", "https://gradle.org/install")
    output += child.stdout + child.stderr || notFound()
    if (child.status !== 0) ok = false

    if (!ok) {
        console.error(output)
        process.exit(EXIT_STATUS.BROKEN_ENV)
    } else {
        return output
    }
}