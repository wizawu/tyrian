var fs = require("fs");
var path = require("path");

var libdir = path.dirname(process.argv[1]);
var libmod = libdir + (fs.existsSync(libdir + "/node_modules") ? "/node_modules" : "/..");
var command = process.argv[2];
var context = process.argv[3] && path.resolve(process.argv[3]);

// Print version
var version = JSON.parse(fs.readFileSync(libdir + "/package.json")).version;
console.log("Version: inferno-beaker " + version + "\n");

// Validate arguments
if (!command || !context || ["watch", "build", "publish"].indexOf(command) < 0) {
    help();
    process.exit(1);
}

// Find all JavaScript entries
var entry = {};
var entriesDir = context + "/js/entries/";
try {
    fs.readdirSync(entriesDir).forEach(function(filename) {
        if (/.*\.sw.$/.test(filename) === false) {
            entry[filename.replace(/\.[^\.]+$/, "")] = entriesDir + filename;
        }
    });
} catch (_) {
    console.log("Directory js/entries/ not found");
}

// Find all HTML files
try {
    var pages = fs.readdirSync(context + "/html").filter(function(filename) {
        return /.*\.sw.$/.test(filename) === false;
    });
} catch (_) {
    console.log("Directory html/ not found");
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
            "filename": "[name].js",
            "minimize": false,
            "sourceMap": false,
        };
        break;
    case "publish":
        options = {
            "NODE_ENV": '"production"',
            "filename": "[name].min.js",
            "minimize": true,
            "sourceMap": false,
        };
        break;
}

var webpack = require(libmod + "/webpack");
var HtmlWebpackPlugin = require(libmod + "/html-webpack-plugin");
var autoprefixer = require(libmod + "/autoprefixer");

var compiler = webpack({
    devtool: options.sourceMap && "inline-source-map",
    context: context,
    resolve: {
        extensions: ["", ".js", ".tsx"],
    },
    externals: {
        "inferno": "Inferno",
        "inferno-component": "InfernoComponent",
        "inferno-router": "InfernoRouter",
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
    },
    resolveLoader: {
        modulesDirectories: [libmod]
    },
    entry: entry,
    output: {
        path: context + "/dist",
        filename: options.filename,
    },
    module: {
        loaders: [{
            test: /\.tsx$/,
            exclude: /node_modules/,
            loader: "ts-loader"
        }, {
            test: /^[^!]+.css$/,
            loader: "style!css?-minimize!postcss",
        }, {
            test: /^[^!]+.less$/,
            loader: "style!css?-minimize!postcss!less",
        }]
    },
    ts: {
        compilerOptions: {
            "jsx": "react",
            "module": "commonjs",
            "target": "es5",
            "typeRoots": [context + "/node_modules/@types", context + "/js/@types"],
            "lib": ["dom", "es2015", "es2015.promise"]
        }
    },
    plugins: pages.map(function(filename) {
        return new HtmlWebpackPlugin({
            filename: filename,
            template: context + "/html/" + filename,
        });
    }).concat(options.minimize ? [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ] : []).concat([
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: options.NODE_ENV
            }
        })
    ]),
    postcss: function() {
        return [
            autoprefixer({
                browsers: ["last 2 versions", "Safari >= 8"]
            })
        ];
    }
});

function buildToolkit() {
    webpack({
        context: libdir,
        entry: libdir + "/inferno-toolkit.js",
        output: {
            path: context + "/dist",
            filename: "inferno-toolkit.min.js",
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                minimize: true
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
    buildToolkit();
    compiler.watch({
        poll: true
    }, function(err, stats) {
        console.log(stats.toString({
            colors: true
        }));
    });
}

function build() {
    buildToolkit();
    compiler.run(function(err, stats) {
        console.log(stats.toString({
            colors: true
        }));
    });
}

function help() {
    console.error("Usage:");
    console.error("  inferno-beaker watch   <source dir>");
    console.error("  inferno-beaker build   <source dir>");
    console.error("  inferno-beaker publish <source dir>");
}

if (command === "watch") watch();
if (command === "build") build();
if (command === "publish") build();
