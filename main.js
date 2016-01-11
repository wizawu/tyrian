#!/usr/bin/env node

var fs = require("fs");
var webpack = require("webpack");

var version = JSON.parse(fs.readFileSync("./package.json")).version;
console.log("react-beaker " + version + "\n");

var command = process.argv[2];
var context = process.argv[3] && path.resolve(process.argv[3]);

if (command && context) {
    switch (command) {
        case "watch":
            watch();
            break;
        case "build":
            build();
            break;
        case "publish":
            publish();
            break;
        default:
            help();
    }
} else {
    help();
}

function help() {
    console.error("Usage:");
    console.error("  react-beaker watch   <source dir>");
    console.error("  react-beaker build   <source dir>");
    console.error("  react-beaker publish <source dir>");
}

var entry = {};
fs.readdirSync(context + "/js/entries").map(function(filename) {
    entry[filename.replace(/\.[^\.]+$/, "")] = [filename];
});

var compiler = webpack({
    context: context,
    entry: entry,
    output: {
        path: context + "/dist",
        filename: "[name].js"
    }
});

function watch() {
    console.log('watch')
}

function build() {
    compiler.run();
}

function publish() {
    console.log('publish')
}
