var fs = require("fs")
var path = require("path")
var spawnSync = require("child_process").spawnSync

function run(target) {
    var libdir = path.resolve(path.dirname(target) + "/../lib")
    var classpath = fs.readdirSync(libdir).map(function(jar) {
        if (jar === "@types") return ""
        return libdir + "/" + jar
    }).join(":")
    var child = spawnSync("jjs", ["-cp", classpath, target], {
        stdio: "inherit"
    })
    process.exit(child.status)
}

module.exports = run