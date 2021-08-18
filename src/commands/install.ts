import chalk from "chalk"
import fs from "fs"
import path from "path"
import redent from "redent"
import zip from "jszip"
import { GlobSync } from "glob"
import { spawnSync } from "child_process"

import { code as ErrorCode } from "../errors"
import { path as PATH } from "../constants"
import * as parser from "../parser"
import * as utils from "../utils"
import interfaces from "../jdk/interfaces.json"

export default async function (offline: boolean): Promise<void> {
  if (!fs.existsSync(PATH.PACKAGE)) {
    console.error(chalk.red(PATH.PACKAGE + " does not exist."))
    process.exit(ErrorCode.PROJECT_NOT_FOUND)
  }

  if (!offline) {
    npmInstall()
    gradleInstall()
  }

  const jars = utils.listFilesByExt("lib", ".jar")
  if (jars.length > 0) {
    console.log("Parsing classes from the following libraries:")
    jars.map(it => console.log("  * " + it))
    const classes = await listLibClasses(jars)
    console.log(`Found ${chalk.green(classes.length)} classes`)
    console.log("Generating typescript definitions...")
    parser.parse(
      jars,
      interfaces as unknown as InterfaceStat,
      classes,
      path.join(process.cwd(), "lib", "@types")
    )
  }
}

export async function listLibClasses(jars: string[]): Promise<string[]> {
  const classes: { [_: string]: boolean } = {}
  for (const jar of jars) {
    const data = fs.readFileSync(jar)
    const files = (await zip.loadAsync(data)).files
    Object.keys(files).forEach(it => {
      if (it.endsWith(".class")) {
        const key = it.replace(/(\$\d+)*\.class$/, "").replace(/\//g, ".")
        if (key.split(".").reverse()[0].indexOf("-") < 0) {
          // Skip class like `package-info`
          classes[key] = true
        }
      }
    })
  }
  return Object.keys(classes)
}

function npmInstall(): void {
  const child = spawnSync("npm", ["install"], { stdio: "inherit" })
  if (child.status) process.exit(child.status)
}

function gradleInstall(): void {
  fs.mkdirSync(path.join("lib", "@types"), { recursive: true })
  fs.writeFileSync(path.join("lib", "@types", "index.d.ts"), "")
  const mvnDependencies: { [_: string]: string } = {};
  // find all mvnDependencies from node_modules
  [PATH.PACKAGE, ...new GlobSync(path.join("node_modules", "**", PATH.PACKAGE)).found].forEach(it => {
    const pkg = JSON.parse(fs.readFileSync(it as string, "utf-8"))
    Object.keys(pkg.mvnDependencies || {}).forEach(k => {
      if (pkg.mvnDependencies[k] > (mvnDependencies[k] || ""))
        mvnDependencies[k] = pkg.mvnDependencies[k]
    })
  })
  const deps = Object.keys(mvnDependencies).map(it => it + ":" + mvnDependencies[it])
  fs.writeFileSync(path.join("lib", "build.gradle"), gradleTemplate(deps))
  const child = spawnSync(
    "gradle",
    [
      "-b",
      path.join("lib", "build.gradle"),
      "--no-daemon",
      "install"
    ],
    { stdio: "inherit" }
  )
  if (child.status) process.exit(child.status)
}

export const gradleTemplate = (deps: string[]): string => redent(`
  apply plugin: "java"

  repositories {
    jcenter()
    mavenCentral()
  }

  task install(type: Copy) {
    into "."
    from configurations.runtime
  }

  dependencies {
    ${deps.map(it => `compile "${it}"`).join("\n    ")}
  }
`, 0).trimStart()
