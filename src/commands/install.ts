import * as fs from "fs"
import { spawnSync } from "child_process"

// TODO
const parseJAR = require("../compiler/parseJAR")

// build.gradle
const buildGradle = deps => `
apply plugin: "java"

repositories {
  mavenCentral()
}

task install(type: Copy) {
  into "lib"
  from configurations.runtime
}

dependencies {
  ${deps}
}
`.trim()

export default function () {
    let child = spawnSync("yarn", ["install"], { stdio: "inherit" })
    if (child.status !== 0) process.exit(child.status)

    try {
        let json = JSON.parse(fs.readFileSync("package.json").toString())
        if (!json.mvnDependencies) return

        let deps = json.mvnDependencies.map(dep => `compile '${dep}'`).join("\n")
        fs.writeFileSync("build.gradle", buildGradle(deps))

        child = spawnSync("gradle", ["install"], { stdio: "inherit" })
        if (child.status !== 0) process.exit(child.status)
    } catch (err) {
        console.error(err.message)
    }

    fs.readdirSync("lib").filter(jar => /\.jar$/.test(jar)).map(jar => {
        let filename = "lib/@types/" + jar.replace(/\.jar$/, ".d.ts")
        console.log("Generating " + filename)
        fs.writeFileSync(filename, parseJAR(`lib/${jar}`))
    })
}