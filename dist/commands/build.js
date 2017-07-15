"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var chalk = require("chalk");
var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
var const_1 = require("../const");
var parseJAR_1 = require("../compiler/parseJAR");
var autoprefixer = require("autoprefixer");
function compiler(instdir, instmod, entries, options) {
    var context = process.cwd();
    var entry = {};
    entries = entries.map(function (entry) { return "./" + path.relative("", entry); });
    if (entries.length === 1 && options.outFile) {
        entry[options.outFile] = entries[0];
    }
    else {
        entries.forEach(function (file) {
            if (/\.ts$/.test(file)) {
                entry[path.basename(file, ".ts") + ".js"] = file;
            }
            else if (/\.tsx$/.test(file)) {
                entry[path.basename(file, ".tsx") + ".js"] = file;
            }
            else {
                throw "invalid entry suffix: " + file;
            }
        });
    }
    var cssLoaders = [{
            loader: "style-loader"
        }, {
            loader: "css-loader",
            options: { minimize: true }
        }, {
            loader: "postcss-loader",
            options: {
                plugins: [
                    autoprefixer({
                        browsers: [
                            "last 3 versions",
                            "safari >= 6",
                            "IE >= 9",
                        ]
                    })
                ]
            }
        }];
    var globalVars = {};
    if (fs.existsSync(context + "/lib")) {
        var jars = fs.readdirSync(context + "/lib").filter(function (file) { return /\.jar$/.test(file); });
        jars.forEach(function (jar) {
            parseJAR_1.getTopPackages(context + "/lib/" + jar).forEach(function (pkg) {
                return globalVars[pkg] = "(typeof Packages === \"object\" && typeof " + pkg + " === \"undefined\" ? Packages." + pkg + " : " + pkg + ")";
            });
        });
    }
    return webpack({
        devtool: "source-map",
        context: context,
        resolve: {
            alias: fs.existsSync("package.json") && JSON.parse(fs.readFileSync("package.json", "utf-8")).alias || undefined,
            extensions: [".js", ".ts", ".tsx"]
        },
        resolveLoader: { modules: [instmod] },
        entry: entry,
        output: {
            path: path.resolve(options.outDir),
            filename: "[name]",
            libraryTarget: options.targetModule ? "commonjs2" : undefined
        },
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    loader: "ts-loader"
                }, {
                    test: /\.json$/,
                    loader: "json-loader"
                }, {
                    test: /^[^!]+\.css$/,
                    use: cssLoaders
                }, {
                    test: /^[^!]+\.less$/,
                    use: cssLoaders.concat({ loader: "less-loader" })
                }]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true
            }),
            new webpack.DefinePlugin(__assign({ "process.env": {
                    NODE_ENV: options.watch ? '"development"' : '"production"'
                } }, globalVars)),
        ].slice(options.uglify ? 0 : 1)
    });
}
function default_1(instdir, instmod, entries, options) {
    if (entries.length === 0) {
        console.error(chalk.yellow("no entry to build"));
        process.exit(const_1.EXIT_STATUS.BUILD_ENTRY_ERROR);
    }
    else if (options.outDir === undefined) {
        console.error(chalk.red("invalid -o option"));
        process.exit(const_1.EXIT_STATUS.BUILD_OUTDIR_ERROR);
    }
    else if (entries.some(function (entry) { return !/\.tsx?$/.test(entry); })) {
        console.error(chalk.red("entry suffix should be .ts or .tsx"));
        process.exit(const_1.EXIT_STATUS.BUILD_ENTRY_ERROR);
    }
    else if (!fs.existsSync("tsconfig.json")) {
        console.error(chalk.red("no tsconfig.json in current directory"));
        process.exit(const_1.EXIT_STATUS.TSCONFIG_NOT_FOUND);
    }
    if (options.outFile && entries.length > 1) {
        console.error(chalk.yellow("ignoring -o " + options.outFile));
    }
    var statsOptions = {
        colors: true,
        hash: true,
        timings: true,
        version: false
    };
    if (options.watch) {
        compiler(instdir, instmod, entries, options).watch({ poll: true }, function (err, stats) {
            console.log("Clock: " + new Date().toLocaleTimeString());
            console.log(stats.toString(statsOptions));
        });
    }
    else {
        compiler(instdir, instmod, entries, options).run(function (err, stats) {
            console.log(stats.toString(statsOptions));
            if (stats.hasErrors())
                process.exit(const_1.EXIT_STATUS.WEBPACK_COMPILE_ERROR);
        });
    }
}
exports["default"] = default_1;
