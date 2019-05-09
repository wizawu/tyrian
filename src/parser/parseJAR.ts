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
    return (child.stdout || "").toString() + (child.stderr || "").toString()
}

function outputPackage(pkg: any, namespaces: string[], outputDir: string) {
    Object.keys(pkg).forEach(key => {
        if (typeof pkg[key] === "string") {
            let result = "declare "
            let tail: string[] = []
            let space = ""
            namespaces.forEach(ns => {
                if (ILLEGAL_NAMESPACES.indexOf(ns) >= 0) ns += "$"
                result += `${space}namespace ${ns} {\n`
                tail.push(`${space}}`)
                space += "    "
            })
            let text = pkg[key]
            ILLEGAL_NAMESPACES.forEach(ns => {
                text = text.replace(new RegExp(`\\.${ns}\\.`, "g"), `.${ns}$.`)
            })
            result += text.split("\n").filter(line => !!line.trim())
                .map(line => space + line).join("\n") + "\n" + tail.reverse().join("\n")
            if (key.indexOf("<") > 0) key = key.substring(0, key.indexOf("<"))
            fs.writeFileSync(path.join(outputDir, [...namespaces, key, "d.ts"].join(".")), result)
        } else {
            outputPackage(pkg[key], [...namespaces, key], outputDir)
        }
    })
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

export default function parseJAR(jar: string, outputDir?: string) {
    let classes = commandOutput("jar", ["tf", jar]).split("\n")
    classes = classes.filter(c => /\.class$/.test(c)).map(c => c.replace(/\//g, ".").replace(/\.class$/, ""))

    let pkg = {}
    let step = 500
    for (let i = 0; i < classes.length; i += step) {
        console.log(chalk.gray(`Disassembling ${jar}: ${Math.min(i + step, classes.length)}/${classes.length} classes`))
        let javaCode = commandOutput("javap", ["-protected", "-cp", jar].concat(classes.slice(i, i + step)))
        parseClass(javaCode, pkg)
    }

    return outputDir ? outputPackage(pkg, [], outputDir) : parsePackage(pkg, 0)
}

export function generateJDKDefinition(root: string) {
    let targetDir = jar => path.basename(jar, ".jar")
    let jars = process.argv.slice(1)
    jars.forEach(jar => parseJAR(jar))
    jars.forEach(jar => fs.existsSync(targetDir(jar)) || fs.mkdirSync(targetDir(jar)))
    jars.forEach(jar => parseJAR(jar, targetDir(jar)))
    fs.writeFileSync(
        fs.realpathSync(`${root}/dist/parser/isLambda.js`),
        `module.exports = ${JSON.stringify(lambda.isLambda, null, 4)}`
    )
}

export function getTopPackages(jar: string): string[] {
    let packages = {}
    let classes = commandOutput("jar", ["tf", jar]).split("\n")
    classes.filter(c => /\.class$/.test(c)).forEach(path => packages[path.split("/")[0]] = true)
    return Object.keys(packages)
}
