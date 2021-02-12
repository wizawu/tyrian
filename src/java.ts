import chalk from "chalk"
import fs from "fs"
import { spawnSync, SpawnSyncReturns } from "child_process"

function runCommand(command: string, args: string[]): SpawnSyncReturns<Buffer> {
  return spawnSync(command, args, { stdio: "pipe" })
}

/**
 * Show classes and members
 */
export function javap(classPath: string[], classList: string[]): Map<string, string> {
  classList = classList.map(it => it.trim()).filter((v, i, a) => v && a.indexOf(v) === i)
  const result = new Map<string, string>()
  for (let i = 0; i < classList.length; i += 100) {
    const classes = classList.slice(i, i + 100)
    const command = runCommand("javap", ["-cp", ":" + classPath.join(":"), ...classes])
    if (command.stderr) {
      console.error(chalk.yellow((command.stderr || "").toString()))
    }
    // TODO parse output
    // const stdout = (command.stdout || "").toString()
    classes.forEach(it => result.set(it, ""))
  }
  return result
}

/**
 * Show classes and members from a text file
 */
export function parseList(classPath: string[], file: string): Map<string, string> {
  const content = fs.readFileSync(file, "utf-8").split("\n")
  return javap(classPath, content)
}

/**
 * Show classes and members from a JAR file
 */
export function parseJar(classPath: string[], file: string): Map<string, string> {
  const output = (runCommand("jar", ["tf", file]).stdout || "").toString()
  const content = output.split("\n")
    .filter(it => it.endsWith(".class"))
    .map(it => it.replace(/(\$\d+)*\.class$/, ""))
  return javap([file, ...classPath], content)
}
