"use strict";
exports.__esModule = true;
var chalk = require("chalk");
var fs = require("fs");
var path = require("path");
var const_1 = require("../const");
var autoprefixer = require("autoprefixer");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
function compilers(instdir, instmod, context, entries, watch) {
    var entryJS = {};
    var entryJJS = {};
    entries.forEach(function (entry) {
        if (/\.j\.ts$/.test(entry)) {
            entryJJS["build/" + path.basename(entry, ".j.ts") + ".js"] = entry;
        }
        else if (/\.tsx?$/.test(entry) && !/\.d\.ts$/.test(entry)) {
            var basename = path.basename(entry).replace(/\.tsx?$/, "");
            entryJS["build/assets/js/" + basename + ".min.js"] = entry;
        }
    });
    var html = fs.existsSync(context + "/src/html") ? (fs.readdirSync(context + "/src/html").filter(function (filename) { return /\.html$/.test(filename); })) : [];
    var cssLoaders = [{
            loader: "style-loader"
        }, {
            loader: "css-loader",
            options: { minimize: true }
        }, {
            loader: "postcss-loader",
            options: {
                plugins: [
                    autoprefixer({ browsers: ["last 3 versions", "safari >= 6", "IE >= 9"] })
                ]
            }
        }];
    var createCompiler = function (entry, html, minimize) { return webpack({
        devtool: "source-map",
        context: context,
        resolve: { extensions: [".js", ".ts", ".j.ts", ".tsx"] },
        resolveLoader: { modules: [instmod] },
        entry: entry,
        output: { path: context, filename: "[name]" },
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
        plugins: html.map(function (filename) {
            return new HtmlWebpackPlugin({
                filename: "build/assets/" + filename,
                template: context + "/src/html/" + filename,
                inject: false
            });
        }).concat([
            new CopyWebpackPlugin([{
                    context: context + "/src/assets",
                    from: "**/*",
                    to: context + "/build/assets"
                }]),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: minimize ? '"production"' : '"development"'
                }
            }),
        ]).concat(minimize ? [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true
            })
        ] : [])
    }); };
    var list = [];
    if (Object.keys(entryJS).length > 0) {
        list.push(createCompiler(entryJS, html, !watch));
    }
    if (Object.keys(entryJJS).length > 0) {
        list.push(createCompiler(entryJJS, [], false));
    }
    return list;
}
function default_1(instdir, instmod, entries, watch) {
    if (entries.length === 0) {
        console.error(chalk.yellow("no entry to build"));
        process.exit(const_1.EXIT_STATUS.BUILD_ENTRY_ERROR);
    }
    var context = {};
    entries.forEach(function (entry, i) {
        entries[i] = path.resolve(entry);
        var tsconfigDir = path.dirname(entries[i]);
        while (!fs.existsSync(tsconfigDir + "/tsconfig.json")) {
            if (tsconfigDir === "/") {
                console.error(chalk.red("cannot find tsconfig.json"));
                process.exit(const_1.EXIT_STATUS.BUILD_ENTRY_ERROR);
            }
            else {
                tsconfigDir = path.dirname(tsconfigDir);
            }
        }
        context[tsconfigDir] = true;
    });
    if (Object.keys(context).length > 1) {
        console.error(chalk.red("entries not in the same project"));
        process.exit(const_1.EXIT_STATUS.BUILD_ENTRY_ERROR);
    }
    context = Object.keys(context)[0];
    if (watch) {
        compilers(instdir, instmod, context, entries, true).forEach(function (c) {
            return c.watch({ poll: true }, function (err, stats) {
                console.log(stats.toString({ colors: true }));
            });
        });
    }
    else {
        compilers(instdir, instmod, context, entries, false).forEach(function (c) {
            return c.run(function (err, stats) {
                console.log(stats.toString({ colors: true }));
                if (stats.hasErrors())
                    process.exit(const_1.EXIT_STATUS.WEBPACK_COMPILE_ERROR);
            });
        });
    }
}
exports["default"] = default_1;
