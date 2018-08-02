import * as crypto from "crypto"
import * as fs from "fs"
import * as os from "os"
import * as path from "path"
import chalk from "chalk"
import { spawnSync } from "child_process"

import parseJAR from "../parser/parseJAR"

// tsconfig.json
export const tsconfig = instdir => JSON.stringify({
    "compilerOptions": {
        "allowJs": true,
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "jsx": "react",
        "lib": ["dom", "es2017"],
        "noUnusedLocals": true,
        "pretty": true,
        "removeComments": true,
        "skipLibCheck": true,
        "sourceMap": true,
        "strictNullChecks": true,
        "target": "es5",
        "typeRoots": [
            `${instdir}/@types/jdk/rt`,
            "lib/@types/**",
            "node_modules/@types",
        ]
    },
    "include": [
        `${instdir}/node_modules/typescript/lib/lib.es6.d.ts`,
        `${instdir}/@types/index.d.ts`,
        `${instdir}/@types/jdk/rt/java.*.d.ts`,
        `${instdir}/@types/jdk/rt/javax.*.d.ts`,
        `${instdir}/@types/jdk/rt/jdk.*.d.ts`,
        "lib/@types/**/*.d.ts",
        "**/*.ts",
        "**/*.tsx",
    ]
}, null, 2)

// package.json
const package_json = JSON.stringify({
    "dependencies": {},
    "mvnDependencies": []
}, null, 2)

// build.gradle
const build_gradle = deps => `
    apply plugin: "java"

    repositories {
        jcenter()
        mavenCentral()
    }

    task install(type: Copy) {
        into "${process.cwd()}/lib"
        from configurations.runtime
    }

    dependencies {
        ${deps}
    }
`

export default function (instdir: string, noTypes = false) {
    // generate tsconfig.json
    if (!fs.existsSync("tsconfig.json")) {
        fs.writeFileSync("tsconfig.json", tsconfig(instdir))
    }

    // generate package.json
    if (!fs.existsSync("package.json")) {
        fs.writeFileSync("package.json", package_json)
    }

    // npm install
    let child = spawnSync("npm", ["install"], { stdio: "inherit" })
    if (child.status !== 0) process.exit(child.status)

    // gather all maven dependencies
    let mvnDependencies = {}
    if (fs.existsSync("node_modules")) {
        fs.readdirSync("node_modules").forEach(dir => {
            let json = fs.existsSync(`node_modules/${dir}/package.json`) ?
                JSON.parse(fs.readFileSync(`node_modules/${dir}/package.json`, "utf-8")) : {};
            (json.mvnDependencies || []).forEach(dep => {
                let [groupId, artifactId, version] = dep.split(":")
                mvnDependencies[`${groupId}:${artifactId}`] = version
            })
        })
    }
    let json = JSON.parse(fs.readFileSync("package.json", "utf-8"));
    (json.mvnDependencies || []).forEach(dep => {
        let [groupId, artifactId, version] = dep.split(":")
        mvnDependencies[`${groupId}:${artifactId}`] = version
    })

    if (Object.keys(mvnDependencies).length > 0) {
        // generate build.gradle
        let deps = Object.keys(mvnDependencies).map(key => `compile '${key}:${mvnDependencies[key]}'`)
        let path = `${os.tmpdir()}/build.gradle.` + crypto.randomBytes(16).toString("hex")
        fs.writeFileSync(path, build_gradle(deps.join("\n")))

        // gradle install
        child = spawnSync("gradle", ["-b", path, "--no-daemon", "install"], { stdio: "inherit" })
        if (child.status !== 0) process.exit(child.status)
    }

    if (noTypes) return

    if (fs.existsSync("lib")) {
        // Generate TypeScript definition for JAR
        if (!fs.existsSync("lib/@types")) fs.mkdirSync("lib/@types")
        fs.readdirSync("lib").filter(jar => /\.jar$/.test(jar)).map(jar => {
            parseJAR(`lib/${jar}`)
        })
        fs.readdirSync("lib").filter(jar => /\.jar$/.test(jar)).map(jar => {
            let targetDir = jar => path.join("lib", "@types", path.basename(jar, ".jar"))
            if (!fs.existsSync(targetDir(jar))) fs.mkdirSync(targetDir(jar))
            parseJAR(path.join("lib", jar), targetDir(jar))
            console.log(chalk.green("Generated " + targetDir(jar)))
        })
    }
}
