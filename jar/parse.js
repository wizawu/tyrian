var spawnSync = require("child_process").spawnSync

function commandOutput(command, args) {
    var child = spawnSync(command, args, {
        stdio: "pipe"
    })
    return child.stdout + child.stderr
}

function getClassContent(jar, classPath) {
    var className = classPath.replace(/\//g, ".").replace(/\.class$/, "")
    return commandOutput("javap", ["-cp", jar, className])
}

function getStructure(jar) {
    console.error("Disassembling " + jar)
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

function parse(jar) {
    var structure = getStructure(jar)
    return JSON.stringify(structure, null, 2)
}

module.exports = parse