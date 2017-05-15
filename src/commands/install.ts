import * as chalk from "chalk"
import * as crypto from "crypto"
import * as fs from "fs"
import * as os from "os"
import { spawnSync } from "child_process"

import parseJAR from "../compiler/parseJAR"
import { tsconfig } from "./init"

// build.gradle
const buildGradle = deps => `
apply plugin: "java"

repositories {
  mavenCentral()
}

task install(type: Copy) {
  into "${process.cwd()}/lib"
  from configurations.runtime
}

dependencies {
  ${deps}
}
`.trim()

export default function (instdir: string) {
    let child = spawnSync("yarn", ["install"], { stdio: "inherit" })
    if (child.status !== 0) process.exit(child.status)

    try {
        let mvnDependencies = {}
        // package.json
        let json = JSON.parse(fs.readFileSync("package.json", "utf-8"));
        (json.mvnDependencies || []).forEach(dep => {
            let [groupId, artifactId, version] = dep.split(":")
            mvnDependencies[`${groupId}:${artifactId}`] = version
        })
        // node_modules/*/package.json
        fs.readdirSync("node_modules").forEach(dir => {
            if (!fs.existsSync(`node_modules/${dir}/package.json`)) return
            json = JSON.parse(fs.readFileSync(`node_modules/${dir}/package.json`, "utf-8"));
            (json.mvnDependencies || []).forEach(dep => {
                let [groupId, artifactId, version] = dep.split(":")
                if (!mvnDependencies[`${groupId}:${artifactId}`]) {
                    mvnDependencies[`${groupId}:${artifactId}`] = version
                }
            })
        })

        // Generate build.gradle
        let deps = Object.keys(mvnDependencies).map(key => `compile '${key}:${mvnDependencies[key]}'`)
        let buildGradlePath = `${os.tmpdir()}/build.gradle.` + crypto.randomBytes(16).toString("hex")
        fs.writeFileSync(buildGradlePath, buildGradle(deps.join("\n  ")))

        // gradle install
        child = spawnSync("gradle", ["-b", buildGradlePath, "--no-daemon", "install"], { stdio: "inherit" })
        if (child.status !== 0) process.exit(child.status)
    } catch (err) {
        console.error(chalk.red(err.message))
    }

    // Generate TypeScript definition for JAR
    if (!fs.existsSync("lib")) fs.mkdirSync("lib")
    if (!fs.existsSync("lib/@types")) fs.mkdirSync("lib/@types")
    fs.readdirSync("lib").filter(jar => /\.jar$/.test(jar)).map(jar => {
        parseJAR(`lib/${jar}`)
    })
    fs.readdirSync("lib").filter(jar => /\.jar$/.test(jar)).map(jar => {
        let filename = "lib/@types/" + jar.replace(/\.jar$/, ".d.ts")
        fs.writeFileSync(filename, parseJAR(`lib/${jar}`))
        console.log(chalk.green("Generated " + filename))
    })

    // Generate tsconfig.json
    fs.writeFileSync("tsconfig.json", tsconfig(instdir, process.argv[3] === "--noJDK"))
}
