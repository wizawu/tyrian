import { spawnSync } from "child_process"
import * as chalk from "colorette"
import fs from "fs"
import path from "path"

import { code as ErrorCode } from "../errors"
import { PATH, CONFIG_KEY } from "../constants"

export default function (): void {
  console.log("Checking prerequisites...\n")
  if (!check("node", ["-v"]) || !check("npm", ["-v"]) || !check("gradle", ["-v"])) {
    console.error(chalk.red("You should add node, npm and gradle in `PATH` env."))
    process.exit(ErrorCode.BROKEN_ENV)
  }

  if (fs.existsSync("package.json")) {
    console.error(chalk.yellow("package.json already exists."))
    process.exit(ErrorCode.INIT_CONFLICT)
  } else if (fs.existsSync("tsconfig.json")) {
    console.error(chalk.yellow("tsconfig.json already exists."))
    process.exit(ErrorCode.INIT_CONFLICT)
  } else {
    createFiles()
    console.log(`Initialized project in ${process.cwd()}`)
  }
}

function createFiles(): void {
  // create package.json
  fs.writeFileSync(
    "package.json",
    JSON.stringify(
      {
        dependencies: {},
        mvnDependencies: {},
        config: {
          [CONFIG_KEY.NASHORN]: "jjs",
        },
      },
      null,
      2
    )
  )
  // create tsconfig.json
  fs.writeFileSync(
    "tsconfig.json",
    JSON.stringify(
      {
        compilerOptions: {
          paths: {
            tslib: [
              path.join(PATH.INSTALL_DIR, "node_modules", "tslib", "tslib.d.ts"),
              path.join(PATH.INSTALL_DIR, "..", "node_modules", "tslib", "tslib.d.ts"),
            ],
          },
          typeRoots: [path.join(PATH.INSTALL_DIR, "@types"), "node_modules/@types", "lib"],
        },
        include: ["**/*.ts", "**/*.tsx"],
      },
      null,
      2
    )
  )
  // create src/main.ts
  fs.mkdirSync("src", { recursive: true })
  if (!fs.existsSync(path.join("src", "main.ts"))) {
    const src = 'java.lang.System.out.println("Hello")'
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
