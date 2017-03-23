function help(exit) {
    console.error("Usage:");
    console.error("  1c init");
    console.error("  1c install:npm");
    console.error("  1c install:mvn");
    console.error("  1c build:react");
    console.error("  1c build");
    console.error("  1c watch");
    console.error("  1c run build/<file>.min.js");
    console.error("  1c help");

    if (exit) process.exit(exit)
}

module.exports = help