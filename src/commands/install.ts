import fs from "fs"
import path from "path"
import redent from "redent"
import { spawnSync } from "child_process"

import * as parser from "../parser"

export default function (tsDefinition: boolean) {
  if (!fs.existsSync("package.json")) {
    fs.writeFileSync("package.json", JSON.stringify({
      dependencies: {},
      mvnDependencies: {}
    }, null, 2))
  }

  npmInstall()
  gradleInstall()

  if (tsDefinition) {
    parser.parse(
      [path.join(process.cwd(), "lib")],
      {}, // TODO
      [], // TODO
    )
  }
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
