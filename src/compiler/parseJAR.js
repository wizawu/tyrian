var spawnSync = require("child_process").spawnSync
var parseClass = require("./parseClass")

function commandOutput(command, args) {
    var child = spawnSync(command, args, {
        stdio: "pipe"
    })
    return child.stdout + child.stderr
}

function getClassContent(jar, classPath) {
    console.log("  Disassembling " + classPath)
    var className = classPath.replace(/\//g, ".").replace(/\.class$/, "")
    return commandOutput("javap", ["-cp", jar, className])
}

function getStructure(jar) {
    var classes = commandOutput("jar", ["tf", jar]).split("\n")
    var structure = {}
    classes.forEach(function(classPath) {
        if (!/\.class$/.test(classPath)) return
        var keys = classPath.split("/")
        var current = structure
        keys.forEach(function(key) {
            if (/\.class$/.test(key)) {
                if (key.indexOf("$") < 0) {
                    current[key] = getClassContent(jar, classPath)
                }
            } else if (current[key] === undefined) {
                current[key] = {}
                current = current[key]
            } else {
                current = current[key]
            }
        })
    })
    return structure
}

function parsePackage(package, level) {
    var result = ""
    Object.keys(package).forEach(function(key) {
        if (/\.class$/.test(key)) {
            result += parseClass(package[key])
        } else {
            result += (level === 0 ? "declare " : "") + "namespace " + key + " {\n"
            result += parsePackage(package[key], level + 1).split("\n").map(function(line) {
                return "   " + line
            }).join("\n")
            result += "\n}\n"
        }
    })
    return result
}

function parse(jar) {
    var structure = getStructure(jar)
    return parsePackage(structure, 0)
}

module.exports = parse