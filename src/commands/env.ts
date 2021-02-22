import chalk from "chalk"
import { spawnSync } from "child_process"

export default function (): boolean {
  return [
    check("node", ["-v"]),
    check("npm", ["-v"]),
    check("gradle", ["-v"]),
  ].every(it => it)
}

function check(command: string, args: string[]): boolean {
  const { status, stdout, stderr } = spawnSync(command, args)
  if (status === 0) {
    console.log(chalk.green(`[${command}]`))
    console.log(stdout.toString().replace(/\n+/g, "\n").trim() + "\n")
    return true
  } else {
    console.log(chalk.red(`[${command}]`))
    const message = stderr?.toString().trim() || stdout?.toString().trim()
    if (message) {
      console.log(message + "\n")
    } else {
      console.log(chalk.gray("NOT FOUND\n"))
    }
    return false
  }
}
