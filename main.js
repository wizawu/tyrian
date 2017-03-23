/*

var webpack = require(libmod + "/webpack");
var HtmlWebpackPlugin = require(libmod + "/html-webpack-plugin");

// Find all JavaScript entries
var entry = {};
var entriesDir = context + "/js/entries/";
try {
    fs.readdirSync(entriesDir).forEach(function(filename) {
        if (/\.sw.$/.test(filename) === false) {
            entry[filename.replace(/\.[^.]+$/, "")] = entriesDir + filename;
        }
    });
} catch (_) {
}

// Find all HTML files
try {
    var pages = fs.readdirSync(context + "/html").filter(function(filename) {
        return /\.sw.$/.test(filename) === false;
    });
} catch (_) {
    var pages = [];
}

// Choose options
var options = {};
switch (command) {
    case "watch":
        options = {
            "NODE_ENV": '"development"',
            "filename": "[name].min.js",
            "minimize": false,
            "sourceMap": true,
        };
        break;
    case "build":
        options = {
            "NODE_ENV": '"production"',
            "filename": "[name].min.js",
            "minimize": true,
            "sourceMap": false,
        };
        break;
}

// Generate tsconfig.json
var tsconfig =
if (command === "watch" || command === "build") {
    fs.writeFileSync(context + "/tsconfig.json", JSON.stringify(tsconfig, null, 2))
}

var compiler = (command === "watch" || command === "build") && webpack({
    devtool: options.sourceMap && "inline-source-map",
    context: context,
    resolve: {
        extensions: [".js", ".ls", ".ts", ".tsx"],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
    },
    resolveLoader: {
        modules: [libmod],
    },
    entry: entry,
    output: {
        path: context + "/dist",
        filename: options.filename,
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: "ts-loader"
        }, {
            test: /\.ls$/,
            exclude: /node_modules/,
            loader: "livescript-loader"
        }, {
            test: /^[^!]+.css$/,
            loader: "style-loader!css-loader?-minimize",
        }, {
            test: /^[^!]+.less$/,
            loader: "style-loader!css-loader?-minimize!less-loader",
        }]
    },
    plugins: pages.map(function(filename) {
        return new HtmlWebpackPlugin({
            filename: filename,
            template: context + "/html/" + filename,
            inject: false,
        });
    }).concat(options.minimize ? [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: options.sourceMap,
        })
    ] : []).concat([
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: options.NODE_ENV
            }
        })
    ]),
});

function buildReactLib() {
    webpack({
        context: libdir,
        entry: libdir + "/react-lib.js",
        output: {
            path: context,
            filename: "react-lib.min.js",
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                sourceMap: false,
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: '"production"'
                }
            })
        ]
    }).run(function() {});
}

function watch() {
    compiler.watch({
        poll: true
    }, function(err, stats) {
        console.log(stats.toString({
            colors: true
        }));
    });
}

function build() {
    compiler.run(function(err, stats) {
        console.log(stats.toString({
            colors: true
        }));
        if (stats.hasErrors()) process.exit(2);
    });
}
*/

var fs = require("fs")
var path = require("path")

var help = require("./commands/help")
var init = require("./commands/init")
var install = require("./commands/install")

var libdir = path.dirname(process.argv[1])
var libmod = libdir + (fs.existsSync(libdir + "/node_modules") ? "/node_modules" : "/..")
var command = process.argv[2]
var context = path.resolve(process.argv[3] || "")

// Print version
var version = JSON.parse(fs.readFileSync(libdir + "/package.json")).version
console.log("Version: " + version)

if (command === "init") init(context)
else if (command === "install:npm") install.npm()
else if (command === "install:mvn") install.mvn()
else if (command === "build:react") help()
else if (command === "build") help()
else if (command === "watch") help()
else if (command === "run") help()
else if (command === "help") help()
else help(1)