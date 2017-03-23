var spawn = require("child_process").spawn

function run(target) {
    var child = spawn("jjs", [target])
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

module.exports = run