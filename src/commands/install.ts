import fs from "fs"
import path from "path"
import redent from "redent"
import zip from "jszip"
import { spawnSync } from "child_process"

import * as parser from "../parser"
import * as utils from "../utils"
import interfaces from "../jdk/interfaces.json"

export default async function (tsDefinition: boolean): Promise<void> {
  if (!fs.existsSync("package.json")) {
    fs.writeFileSync("package.json", JSON.stringify({
      dependencies: {},
      mvnDependencies: {},
      runtime: {
        graaljs: "/graalvm/languages/js/bin/node",
        nashorn: "/openjdk/bin/jjs",
      }
    }, null, 2))
  }

  npmInstall()
  gradleInstall()

  if (tsDefinition) {
    const jars = utils.listFilesByExt("lib", ".jar")
    parser.parse(
      jars,
      interfaces,
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
        classes[utils.qualifiedName(it)] = true
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
  const { mvnDependencies } = JSON.parse(fs.readFileSync("package.json", "utf-8"))
  // TODO: Add mvnDependencies from other tyrian packages
  const deps = Object.keys(mvnDependencies || {}).map(it =>
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
