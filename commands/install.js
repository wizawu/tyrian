var spawnSync = require("child_process").spawnSync

function install(type) {
    var child = spawnSync("npm", ["install"], {
        stdio: "inherit",
    })
    process.exit(child.status)
    /*
    child.stdout.on("data", function(data) {
        if (data) process.stdout.write(data)
    })
    child.stderr.on("data", function(data) {
        if (data) process.stderr.write(data)
    })
    child.on("exit", function(code) {
        process.exit(code)
    })
    */
}

module.exports = {
    npm: function() { install("npm") },
    mvn: function() { install("gradle") },
}