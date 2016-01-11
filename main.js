#!/usr/bin/env node

var fs = require("fs");
var path = require("path");
var webpack = require("webpack");

var version = JSON.parse(fs.readFileSync("./package.json")).version;
console.log("react-beaker " + version + "\n");

var command = process.argv[2];
var context = process.argv[3] && path.resolve(process.argv[3]);

if (!command || !context || ["watch", "build", "publish"].indexOf(command) < 0) {
    help();
    process.exit(1);
}

var entriesDir = context + "/js/entries/";
var entry = {};

fs.readdirSync(entriesDir).map(function(filename) {
    entry[filename.replace(/\.[^\.]+$/, "")] = entriesDir + filename;
});

var compiler = webpack({
    context: context,
    resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            "react": process.cwd() + "/alias/react.js",
            "react-dom": process.cwd() + "/alias/react-dom.js",
            "react-router": process.cwd() + "/alias/react-router.js",
            "redux": process.cwd() + "/alias/redux.js"
        }
    },
    entry: entry,
    output: {
        path: context + "/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel",
            query: { presets: ["react", "es2015"] }
        }]
    }
});

function buildReactCore() {
    webpack({
        context: process.cwd(),
        entry: "./react-core.js",
        output: {
            path: context + "/dist",
            filename: "react-core.js"
        }
    }).run(function(){});
}

function watch() {
    buildReactCore();
    compiler.watch({poll: true}, function(err, stats) {
        console.log(stats.toString({colors: true}));
    });
}

function build() {
    buildReactCore();
    compiler.run(function(err, stats) {
        console.log(stats.toString({colors: true}));
    });
}

function publish() {
    buildReactCore();
    compiler.run(function(err, stats) {
        console.log(stats.toString({colors: true}));
    });
}

function help() {
    console.error("Usage:");
    console.error("  react-beaker watch   <source dir>");
    console.error("  react-beaker build   <source dir>");
    console.error("  react-beaker publish <source dir>");
}

if (command === "watch") watch();
if (command === "build") build();
if (command === "publish") publish();
