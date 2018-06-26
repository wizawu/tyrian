import * as fs from "fs"
import * as path from "path"
import chalk from "chalk"
import { spawnSync } from "child_process"

import parseClass from "./parseClass"
import * as lambda from "./lambda"

const ILLEGAL_NAMESPACES = [
    "debugger",
    "enum",
    "export",
    "function",
    "in",
    "is",
]

function commandOutput(command: string, args: string[]): string {
    let child = spawnSync(command, args, { stdio: "pipe" })
    return child.stdout.toString() + child.stderr.toString()
}

function parsePackage(pkg: any, level: number): string {
    let result = ""
    Object.keys(pkg).forEach(key => {
        if (typeof pkg[key] === "string") {
            let text = pkg[key]
            ILLEGAL_NAMESPACES.forEach(ns => {
                text = text.replace(new RegExp(`\\.${ns}\\.`, "g"), `.${ns}$.`)
            })
            result += text
        } else {
            let namespace = key
            if (ILLEGAL_NAMESPACES.indexOf(key) >= 0) namespace += "$"
            result += `${level === 0 ? "declare " : ""}namespace ${namespace} {\n`
            result += parsePackage(pkg[key], level + 1).split("\n").map(line => `    ${line}`).join("\n")
            result += "\n}\n"
        }
    })
    return result
}

function parseJAR(jar: string): string {
    let classes = commandOutput("jar", ["tf", jar]).split("\n")
    classes = classes.filter(c => /\.(class|java)$/.test(c))
        .map(c => c.replace(/\//g, ".").replace(/\.(class|java)$/, ""))
    console.log(chalk.gray(`Disassembling ${jar}: ${classes.length} classes`))

    let pkg = {}
    for (let i = 0; i < classes.length; i += 2000) {
        let javaCode = commandOutput("javap", ["-protected", "-cp", jar].concat(classes.slice(i, i + 2000)))
        javaCode = javaCode.replace(/Compiled from "\w+.java\n"/g, "")
        parseClass(javaCode, pkg)
    }

    return parsePackage(pkg, 0)
}

export default parseJAR

export function generateJDKDefinition(root: string) {
    let jars = process.argv.slice(1)
    jars.forEach(jar => parseJAR(jar))
    jars.forEach(jar => parseJAR(jar))
    fs.writeFileSync(
        fs.realpathSync(`${root}/dist/parser/isLambda.js`),
        `module.exports = ${JSON.stringify(lambda.isLambda, null, 4)}`
    )
    jars.forEach(jar => {
        let target = path.basename(jar).replace(/\.jar$/, ".d.ts")
        fs.writeFileSync(target, parseJAR(jar).replace(/^\s+\n/gm, ""))
    })
}

export function getTopPackages(jar: string): string[] {
    let packages = {}
    let classes = commandOutput("jar", ["tf", jar]).split("\n")
    classes.filter(c => /\.class$/.test(c)).forEach(path => packages[path.split("/")[0]] = true)
    return Object.keys(packages)
}
