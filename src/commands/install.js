var fs = require("fs")
var spawnSync = require("child_process").spawnSync
var parseJAR = require("../compiler/parseJAR")

// build.gradle
var gradle = function(deps) { return `
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
`.trim() }

function install() {
    var child = spawnSync("yarn", ["install"], {
        stdio: "inherit",
    })
    if (child.status !== 0) process.exit(child.status)

    try {
        var json = JSON.parse(fs.readFileSync("package.json"))
        if (!json.mvnDependencies) return

        var deps = json.mvnDependencies.map(function(dep) {
            return `compile '${dep}'`
        }).join("\n")
        fs.writeFileSync("build.gradle", gradle(deps))

        var child = spawnSync("gradle", ["install"], {
            stdio: "inherit",
        })
        if (child.status !== 0) process.exit(child.status)
    } catch (err) {
        console.error(err.message)
    }

    fs.readdirSync("lib").map(function(jar) {
        if (jar === "@types") return
        var filename = "lib/@types/" + jar.replace(/\.jar$/, ".d.ts")
        console.log("Generating " + filename + ":")
        var content = parseJAR("lib/" + jar)
        fs.writeFileSync(filename, content)
    })
}

module.exports = install
