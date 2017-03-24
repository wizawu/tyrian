var fs = require("fs")
var spawnSync = require("child_process").spawnSync

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
        var deps = json.mvnDependencies.map(function(dep) {
            return `compile '${dep}'`
        }).join("\n")
        fs.writeFileSync("build.gradle", gradle(deps))
        var child = spawnSync("gradle", ["install"], {
            stdio: "inherit",
        })
        process.exit(child.status)
    } catch (err) {
        console.error(err.message)
    }
}

module.exports = install