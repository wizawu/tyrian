var fs = require("fs")

function help(libdir, exit) {
    var version = JSON.parse(fs.readFileSync(libdir + "/package.json")).version
    console.log("Version: " + version)

    console.error("Usage:");
    console.error("  1c env");
    console.error("  1c init");
    console.error("  1c install:npm");
    console.error("  1c install:mvn");
    console.error("  1c build");
    console.error("  1c watch");
    console.error("  1c run build/<outfile>.min.js");
    console.error("  1c help");

    if (exit) process.exit(exit)
}

module.exports = help