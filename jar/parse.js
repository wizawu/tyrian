var spawnSync = require("child_process").spawnSync

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
                current[key] = getClassContent(jar, classPath)
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
            result += package[key]
        } else {
            result += (level === 0 ? "declare " : "") + "namespace " + key + " {\n"
            result += parsePackage(package[key], level + 1)
            result += "\n}\n"
        }
    })

    return result.split("\n").map(function(line) {
        return (level === 0 ? "" : "    ") + line
    }).join("\n")
}

function parse(jar) {
    var structure = getStructure(jar)
    return parsePackage(structure, 0)
}

module.exports = parse