var fs = require("fs");
var path = require("path");

var libdir = path.dirname(process.argv[1]);
var libmod = libdir + (fs.existsSync(libdir + "/node_modules") ? "/node_modules" : "/..");
var command = process.argv[2];
var context = process.argv[3] && path.resolve(process.argv[3]);

// Print version
var version = JSON.parse(fs.readFileSync(libdir + "/package.json")).version;
console.log("Version: reactc " + version + "\n");

// Validate arguments
if (!command || !context || ["watch", "build"].indexOf(command) < 0) {
    help();
    process.exit(command === "help" ? 0 : 1);
}

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
    console.log("Directory js/entries/ not found");
}

// Find all HTML files
try {
    var pages = fs.readdirSync(context + "/html").filter(function(filename) {
        return /\.sw.$/.test(filename) === false;
    });
} catch (_) {
    console.log("Directory html/ not found");
    var pages = [];
}

// Find all type files
try {
    var types = fs.readdirSync(context + "/../types").filter(function(filename) {
        return /\.sw.$/.test(filename) === false;
    });
} catch (_) {
    console.log("Directory ../types not found");
    var types = [];
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
var tsconfig = {
    compilerOptions: {
        "jsx": "react",
        "lib": ["dom", "es2017"],
        "target": "es5",
        "typeRoots": [
            context + "/dist/@types",
            context + "/js/@types",
            context + "/node_modules/@types",
        ],
    }
}
fs.writeFileSync(context + "/tsconfig.json", JSON.stringify(tsconfig, null, 2))

var webpack = require(libmod + "/webpack");
var HtmlWebpackPlugin = require(libmod + "/html-webpack-plugin");
var KotlinClassWebpackPlugin = require(libmod + "/kotlin-class-webpack-plugin");

var compiler = webpack({
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
    ]).concat(types.map(function(filename) {
        return new KotlinClassWebpackPlugin({
            source: context + "/../types/" + filename,
            output: filename.replace(/\.kt$/, ".d.ts"),
        })
    }))
});

function buildReactLib() {
    webpack({
        context: libdir,
        entry: libdir + "/react-lib.js",
        output: {
            path: context + "/dist",
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
    buildReactLib();
    compiler.watch({
        poll: true
    }, function(err, stats) {
        console.log(stats.toString({
            colors: true
        }));
    });
}

function build() {
    buildReactLib();
    compiler.run(function(err, stats) {
        console.log(stats.toString({
            colors: true
        }));
        if (stats.hasErrors()) process.exit(2);
    });
}

function help() {
    console.error("Usage:");
    console.error("  reactc watch <source dir>");
    console.error("  reactc build <source dir>");
}

if (command === "watch") watch();
if (command === "build") build();
