import chalk from "chalk"
import fs from "fs"
import path from "path"
import redent from "redent"
import zip from "jszip"
import { GlobSync } from "glob"
import { spawnSync } from "child_process"

import * as parser from "../parser"
import * as utils from "../utils"
import interfaces from "../jdk/interfaces.json"
import { code as ErrorCode } from "../errors"

export default async function (tsDefinition: boolean): Promise<void> {
  if (!fs.existsSync("package.json")) {
    console.error(chalk.red("Cannot find package.json."))
    process.exit(ErrorCode.PROJECT_NOT_FOUND)
  }

  npmInstall()
  gradleInstall()

  if (tsDefinition) {
    const jars = utils.listFilesByExt("lib", ".jar")
    parser.parse(
      jars,
      interfaces as unknown as InterfaceStat,
      await listLibClasses(jars),
      path.join(process.cwd(), "lib", "@types")
    )
  }
}

async function listLibClasses(jars: string[]) {
  const classes: {[_: string]: boolean} = {}
  for (const jar of jars) {
    const data = fs.readFileSync(jar)
    const files = (await zip.loadAsync(data)).files
    Object.keys(files).forEach(it => {
      if (it.endsWith(".class")) {
        const key = it.replace(/(\$\d+)*\.class$/, "").replace(/\//g, ".")
        classes[key] = true
      }
    })
  }
  return Object.keys(classes)
}

function npmInstall() {
  const child = spawnSync("npm", ["install"], { stdio: "inherit" })
  if (child.status) process.exit(child.status)
}

function gradleInstall() {
  fs.mkdirSync(path.join("lib", "@types"), { recursive: true })
  const mvnDependencies: {[_:string]: string} = {}
  // find all mvnDependencies from node_modules
  ;["package.json", ...new GlobSync(path.join("node_modules", "**", "package.json")).found].forEach(it => {
    const pkg = JSON.parse(fs.readFileSync(it as string, "utf-8"))
    Object.keys(pkg.mvnDependencies || {}).forEach(k => {
      if (pkg.mvnDependencies[k] > (mvnDependencies[k] || ""))
        mvnDependencies[k] = pkg.mvnDependencies[k]
    })
  })
  const deps = Object.keys(mvnDependencies).map(it =>
    `compile "${it}:${mvnDependencies[it]}"`
  )
  fs.writeFileSync("build.gradle", gradleTemplate(deps))
  const child = spawnSync("gradle", ["--no-daemon", "install"], { stdio: "inherit" })
  if (child.status) process.exit(child.status)
}

const gradleTemplate = (deps: string[]) => redent(`
  apply plugin: "java"

  repositories {
    jcenter()
    mavenCentral()
  }

  task install(type: Copy) {
    into "${path.join(process.cwd(), "lib")}"
    from configurations.runtime
  }

  dependencies {
    ${deps.join("\n    ")}
  }
`, 0).trimStart()
