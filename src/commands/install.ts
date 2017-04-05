import * as fs from "fs"
import { spawnSync } from "child_process"
import parseJAR from "../compiler/parseJAR"

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

        let deps = Object.keys(mvnDependencies).map(key => `compile '${key}:${mvnDependencies[key]}'`)
        fs.writeFileSync("build.gradle", buildGradle(deps.join("\n")))

        child = spawnSync("gradle", ["install"], { stdio: "inherit" })
        if (child.status !== 0) process.exit(child.status)
    } catch (err) {
        console.error(err.message)
    }

    if (!fs.existsSync("lib/@types")) fs.mkdirSync("lib/@types")
    fs.readdirSync("lib").filter(jar => /\.jar$/.test(jar)).map(jar => {
        let filename = "lib/@types/" + jar.replace(/\.jar$/, ".d.ts")
        console.log("Generating " + filename)
        fs.writeFileSync(filename, parseJAR(`lib/${jar}`))
    })
}
