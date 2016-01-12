#!/usr/bin/env node

var fs = require("fs");
var path = require("path");

var libdir = path.dirname(process.argv[1]);
var command = process.argv[2];
var context = process.argv[3] && path.resolve(process.argv[3]);

// Print version
var version = JSON.parse(fs.readFileSync(libdir + "/package.json")).version;
console.log("react-beaker " + version + "\n");

// Validate arguments
if (!command || !context || ["watch", "build", "publish"].indexOf(command) < 0) {
    help();
    process.exit(1);
}

// Find all entries
var entry = {};
var entriesDir = context + "/js/entries/";
fs.readdirSync(entriesDir).map(function(filename) {
    entry[filename.replace(/\.[^\.]+$/, "")] = entriesDir + filename;
});

var webpack = require(libdir + "/node_modules/webpack");

var compiler = webpack({
    devtool: command === "publish" ? false : "inline-source-map",
    context: context,
    resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            "react":        libdir + "/alias/react.js",
            "react-dom":    libdir + "/alias/react-dom.js",
            "react-router": libdir + "/alias/react-router.js",
            "redux":        libdir + "/alias/redux.js",
        }
    },
    resolveLoader: {
        modulesDirectories: [libdir + "/node_modules"]
    },
    entry: entry,
    output: {
        path: context + "/dist",
        filename: "[name].js",
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: [
                    libdir + "/node_modules/babel-preset-react",
                    libdir + "/node_modules/babel-preset-es2015",
                ]
            },
        }, {
            test: /\.less$/,
            loader: "style!css!less",
        }]
    },
    plugins: command === "publish" ? [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ] : []
});

function buildReactCore() {
    webpack({
        context: libdir,
        entry: libdir + "/react-toolkit.js",
        output: {
            path: context + "/dist",
            filename: "react-toolkit.min.js",
        },
        plugins: [new webpack.optimize.UglifyJsPlugin({minimize: true})]
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

function help() {
    console.error("Usage:");
    console.error("  react-beaker watch   <source dir>");
    console.error("  react-beaker build   <source dir>");
    console.error("  react-beaker publish <source dir>");
}

if (command === "watch") watch();
if (command === "build") build();
if (command === "publish") build();
