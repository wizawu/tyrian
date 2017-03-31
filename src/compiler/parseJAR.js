var spawnSync = require("child_process").spawnSync
var parseClass = require("./parseClass")

function commandOutput(command, args) {
    var child = spawnSync(command, args, {
        stdio: "pipe"
    })
    return child.stdout + child.stderr
}

function parsePackage(package, level) {
    var result = ""
    Object.keys(package).forEach(function(key) {
        if (key === "function") {
            return
        } else if (typeof package[key] === "string") {
            result += package[key]
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
    var classes = commandOutput("jar", ["tf", jar]).split("\n")
    classes = classes.filter(function(c) {
        return /\.class$/.test(c)
    }).map(function(c) {
        return c.replace(/\//g, ".").replace(/\.class$/, "")
    })

    console.log(`Disassembling ${jar}: ${classes.length} classes`)

    var package = {}

    for (var i = 0; i < classes.length; i += 2000) {
        var javaCode = commandOutput("javap", ["-protected", "-cp", jar].concat(classes.slice(i, i + 2000)))
        parseClass(javaCode, package)
    }

    return parsePackage(package, 0)
}

module.exports = parse