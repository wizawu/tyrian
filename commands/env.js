var spawnSync = require("child_process").spawnSync

function header(name, link) {
    return `\n[${name}](${link})\n`
}

function notFound(name) {
    return `** not found **`
}

function env(alwaysPrint) {
    var ok = true
    var output = ""
    var child = null
    var spawnOptions = {
        stdio: "pipe"
    }

    // node
    child = spawnSync("node", ["-v"], spawnOptions)
    output += header("node", "https://nodejs.org/en/download/")
    output += child.stdout + child.stderr || notFound()
    if (child.status !== 0) ok = false

    // yarn
    child = spawnSync("yarn", ["-V"], spawnOptions)
    output += header("yarn", "npm install -g yarn")
    output += child.stdout + child.stderr || notFound()
    if (child.status !== 0) ok = false

    // java
    child = spawnSync("java", ["-version"], spawnOptions)
    output += header("java", "http://openjdk.java.net/install/")
    output += child.stdout + child.stderr || notFound()
    if (child.status !== 0) ok = false

    // jjs
    child = spawnSync("jjs", ["-fv"], Object.assign({input: "quit()"}, spawnOptions))
    output += "jjs -> " + (child.stdout + child.stderr || notFound()).replace(/jjs>\s+/, "")
    if (child.status !== 0) ok = false

    // javap
    child = spawnSync("which", ["javap"], spawnOptions)
    output += "javap -> " + (child.stdout + child.stderr || notFound())
    if (child.status !== 0) ok = false

    // jar
    child = spawnSync("which", ["jar"], spawnOptions)
    output += "jar -> " + (child.stdout + child.stderr || notFound())
    if (child.status !== 0) ok = false

    // gradle
    child = spawnSync("gradle", ["-version"], spawnOptions)
    output += header("gradle", "https://gradle.org/install")
    output += child.stdout + child.stderr || notFound()
    if (child.status !== 0) ok = false

    if (!ok || alwaysPrint) console.log(output)
    return ok
}

module.exports = env