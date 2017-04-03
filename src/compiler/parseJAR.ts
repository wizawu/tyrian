import { spawnSync } from "child_process"
import parseClass from "./parseClass"

function commandOutput(command: string, args: string[]): string {
    let child = spawnSync(command, args, { stdio: "pipe" })
    return child.stdout.toString() + child.stderr.toString()
}

function parsePackage(pkg: any, level: number): string {
    let result = ""
    Object.keys(pkg).forEach(key => {
        if (key === "function" || key === "is" || key === "in") {
            return ""
        } else if (typeof pkg[key] === "string") {
            result += pkg[key]
        } else {
            result += `${level === 0 ? "declare " : ""}namespace ${key} {\n`
            result += parsePackage(pkg[key], level + 1).split("\n").map(line => `    ${line}`).join("\n")
            result += "}\n"
        }
    })
    return result
}

export default function (jar: string): string {
    let classes = commandOutput("jar", ["tf", jar]).split("\n")
    classes = classes.filter(c => /\.class$/.test(c)).map(c => c.replace(/\//g, ".").replace(/\.class$/, ""))
    console.log(`Disassembling ${jar}: ${classes.length} classes`)

    let pkg = {}
    for (let i = 0; i < classes.length; i += 2000) {
        let javaCode = commandOutput("javap", ["-cp", jar].concat(classes.slice(i, i + 2000)))
        parseClass(javaCode, pkg)
    }

    return parsePackage(pkg, 0)
}