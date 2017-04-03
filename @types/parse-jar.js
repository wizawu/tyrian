var fs = require("fs")
var path = require("path")
var parseJAR = require("../src/compiler/parseJAR").default

var jars = process.argv.slice(2)

jars.forEach(function (jar) {
    if (!fs.existsSync(jar)) {
        console.error(jar + " not found")
        process.exit(1)
    }
})

jars.forEach(function (jar) {
    var target = path.basename(jar).replace(/\.jar$/, ".d.ts")
    fs.writeFileSync(target, parseJAR(jar))
})
