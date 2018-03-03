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
var parseJAR_1 = require("../parser/parseJAR");
var install_1 = require("./install");
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
    var alias;
    var plugins = [
        new webpack.DefinePlugin(__assign({ "process.env": {
                NODE_ENV: options.watch ? '"development"' : '"production"'
            } }, globalVars)),
    ];
    if (options.uglify) {
        plugins.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: true }));
    }
    if (fs.existsSync("package.json")) {
        var packageJSON = JSON.parse(fs.readFileSync("package.json", "utf-8"));
        alias = packageJSON.alias;
        if (packageJSON.commonsChunk) {
            plugins.push(new webpack.optimize.CommonsChunkPlugin(packageJSON.commonsChunk));
        }
    }
    return webpack({
        devtool: "source-map",
        context: context,
        resolve: {
            alias: alias,
            extensions: [".js", ".ts", ".tsx"]
        },
        resolveLoader: { modules: [instmod] },
        entry: entry,
        output: {
            path: path.resolve(options.outDir),
            filename: "[name]"
        },
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: options.skipJDK ? {
                        compilerOptions: {
                            typeRoots: [
                                instdir + "/@types-lite",
                                "lib/@types",
                                "node_modules/@types",
                            ]
                        }
                    } : {}
                }, {
                    test: /\.json$/,
                    loader: "json-loader"
                }, {
                    test: /^[^!]+\.css$/,
                    use: cssLoaders
                }, {
                    test: /^[^!]+\.less$/,
                    use: cssLoaders.concat({ loader: "less-loader" })
                }, {
                    test: /\.(eot|otf|ttf|woff|woff2|png|svg)$/,
                    use: "url-loader"
                }]
        },
        plugins: plugins
    });
}
function default_1(instdir, instmod, entries, options) {
    if (entries.length === 0) {
        console.error(chalk.red("No entry to build"));
        process.exit(const_1.EXIT_STATUS.BUILD_ENTRY_ERROR);
    }
    if (entries.some(function (entry) { return !/\.tsx?$/.test(entry); })) {
        console.error(chalk.red("Entry suffix should be .ts or .tsx"));
        process.exit(const_1.EXIT_STATUS.BUILD_ENTRY_ERROR);
    }
    if (entries.length > 1 && options.outFile) {
        console.error(chalk.red("Cannot use -o option if there are multiple entries"));
        process.exit(const_1.EXIT_STATUS.BUILD_ENTRY_ERROR);
    }
    if (options.outFile && fs.existsSync(options.outFile)) {
        if (!fs.lstatSync(options.outFile).isFile()) {
            console.error(chalk.red(options.outFile + " is not a file"));
            process.exit(const_1.EXIT_STATUS.BUILD_OUTFILE_ERROR);
        }
    }
    if (options.outDir && fs.existsSync(options.outDir)) {
        if (!fs.lstatSync(options.outDir).isDirectory()) {
            console.error(chalk.red(options.outDir + " is not a directory"));
            process.exit(const_1.EXIT_STATUS.BUILD_OUTDIR_ERROR);
        }
    }
    if (!fs.existsSync("tsconfig.json")) {
        fs.writeFileSync("tsconfig.json", install_1.tsconfig(instdir));
        console.error(chalk.yellow("Generated tsconfig.json"));
    }
    var statsOptions = {
        colors: true,
        hash: true,
        timings: true,
        version: false
    };
    if (options.watch) {
        compiler(instdir, instmod, entries, options).watch({ poll: true }, function (err, stats) {
            console.log(stats.toString(statsOptions));
            console.log("\nFinished last build at " + new Date().toLocaleTimeString() + "\n");
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
