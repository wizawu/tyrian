import chalk from "chalk"
import fs from "fs"

import { runCommand } from "./utils"

/**
 * Show classes and members
 */
export function javap(classPath: string[], classList: string[]) {
    classList = classList.map(it => it.trim()).filter((v, i, a) => v && a.indexOf(v) === i)
    let result: { [key: string]: string } = {}
    for (let i = 0; i < classList.length; i += 100) {
        let classes = classList.slice(i, i + 100)
        let command = runCommand("javap", ["-cp", ":" + classPath.join(":"), ...classes])
        if (command.stderr) {
            console.error(chalk.yellow((command.stderr || "").toString()))
        }
        let stdout = (command.stdout || "").toString()
        // TODO parse output
        classes.forEach(it => result[it] = "")
    }
    return result
}

/**
 * Show classes and members from a text file
 */
export function parseList(classPath: string[], file: string) {
    let content = fs.readFileSync(file, "utf-8").split("\n")
    return javap(classPath, content)
}

/**
 * Show classes and members from a JAR file
 */
export function parseJar(classPath: string[], file: string) {
    let output = (runCommand("jar", ["tf", file]).stdout || "").toString()
    let content = output.split("\n")
        .filter(it => it.endsWith(".class"))
        .map(it => it.replace(/(\$\d+)*\.class$/, ""))
    return javap([file, ...classPath], content)
}
