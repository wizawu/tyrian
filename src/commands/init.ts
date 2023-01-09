import { spawnSync } from "child_process"
import chalk from "chalk"
import fs from "fs"
import path from "path"

import { code as ErrorCode } from "../errors"
import { path as PATH, config as CONFIG } from "../constants"

export default function (): void {
  console.log("Checking prerequisites...\n")
  if (!check("node", ["-v"]) || !check("npm", ["-v"]) || !check("gradle", ["-v"])) {
    console.error(chalk.red("You should add node, npm and gradle in `PATH` env."))
    process.exit(ErrorCode.BROKEN_ENV)
  }

  if (fs.existsSync(PATH.PACKAGE)) {
    console.error(chalk.yellow(PATH.PACKAGE + " already exists."))
    process.exit(ErrorCode.INIT_CONFLICT)
  } else if (fs.existsSync(PATH.TSCONFIG)) {
    console.error(chalk.yellow(PATH.TSCONFIG + " already exists."))
    process.exit(ErrorCode.INIT_CONFLICT)
  } else {
    createFiles()
    console.log(`Initialized project in ${process.cwd()}`)
  }
}

function createFiles(): void {
  // create package.json
  fs.writeFileSync(
    PATH.PACKAGE,
    JSON.stringify({
      config: {
        [CONFIG.NASHORN]: "jjs"
      },
      dependencies: {},
      mvnDependencies: {},
    }, null, 2)
  )
  // create tsconfig.json
  fs.writeFileSync(
    PATH.TSCONFIG,
    JSON.stringify({
      compilerOptions: {
        typeRoots: [path.join(__dirname, "..", "..", "@types"), "lib", "node_modules/@types"],
      },
      include: ["**/*.ts"],
    }, null, 2)
  )
  // create src/main.ts
  fs.mkdirSync("src", { recursive: true })
  if (!fs.existsSync(path.join("src", "main.ts"))) {
    const src = "java.lang.System.out.println(\"Hello\")"
    fs.writeFileSync(path.join("src", "main.ts"), src)
  }
}

export function check(command: string, args: string[]): boolean {
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
