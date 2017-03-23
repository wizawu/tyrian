var spawn = require("child_process").spawn

function install(type) {
    var child = spawn(type, ["install"])
    child.stdout.on("data", function(data) {
        if (data) {
            var content = data.toString().trim()
            if (content) process.stdout.write(content)
        }
    })
    child.stderr.on("data", function(data) {
        if (data) {
            var content = data.toString().trim()
            if (content) process.stderr.write(content)
        }
    })
    child.on("exit", function(code) {
        process.exit(code)
    })
}

module.exports = {
    npm: function() { install("npm") },
    mvn: function() { install("gradle") },
}