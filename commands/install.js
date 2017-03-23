var spawn = require("child_process").spawn

function install(type) {
    var child = spawn(type, ["install"])
    child.stdout.on("data", function(data) {
        if (data) process.stdout.write(data)
    })
    child.stderr.on("data", function(data) {
        if (data) process.stderr.write(data)
    })
    child.on("exit", function(code) {
        process.exit(code)
    })
}

module.exports = {
    npm: function() { install("npm") },
    mvn: function() { install("gradle") },
}