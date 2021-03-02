import chalk from "chalk"
import fs from "fs"
import path from "path"

import { compilerOptions } from "./build"

export default function (): void {
  if (fs.existsSync("package.json")) {
    console.error(chalk.yellow("package.json already exists"))
  } else {
    fs.writeFileSync("package.json", JSON.stringify({
      dependencies: {},
      mvnDependencies: {},
      runtime: {},
    }, null, 2))
  }
  if (fs.existsSync("tsconfig.json")) {
    console.error(chalk.yellow("tsconfig.json already exists"))
  } else {
    fs.writeFileSync("tsconfig.json", JSON.stringify({
      compilerOptions: compilerOptions,
      include: [
        path.join(__dirname, "..", "..", "@types", "**", "*.d.ts"),
        "**/*.ts",
      ]
    }, null, 2))
  }
}
