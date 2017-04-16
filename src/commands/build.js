"use strict";
exports.__esModule = true;
var fs = require("fs");
var const_1 = require("../const");
var autoprefixer = require("autoprefixer");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
function compilers(instdir, instmod, context, watch) {
    var entryJS = {};
    var entryJJS = {};
    if (fs.existsSync(context + "/src/js/entry")) {
        fs.readdirSync(context + "/src/js/entry").forEach(function (filename) {
            if (/\.j\.ts$/.test(filename)) {
                var basename = filename.replace(/\.j\.ts$/, "");
                entryJJS["build/" + basename + ".js"] = context + "/src/js/entry/" + filename;
            }
            else if (/\.tsx?/.test(filename) && !/\.d\.ts$/.test(filename)) {
                var basename = filename.replace(/\.tsx?$/, "");
                entryJS["build/assets/js/" + basename + ".min.js"] = context + "/src/js/entry/" + filename;
            }
        });
    }
    if (fs.existsSync(context + "/src/js/test")) {
        fs.readdirSync(context + "/src/js/test").forEach(function (filename) {
            if (!/^[Tt]est/.test(filename))
                return;
            if (/\.j\.ts$/.test(filename)) {
                var basename = filename.replace(/\.j\.ts$/, "");
                entryJJS["build/" + basename + ".js"] = context + "/src/js/test/" + filename;
            }
            else if (/\.tsx?/.test(filename) && !/\.d\.ts$/.test(filename)) {
                var basename = filename.replace(/\.tsx?$/, "");
                entryJS["build/assets/js/" + basename + ".min.js"] = context + "/src/js/test/" + filename;
            }
        });
    }
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
function default_1(instdir, instmod, context, watch) {
    if (watch) {
        compilers(instdir, instmod, context, true).forEach(function (c) {
            return c.watch({ poll: true }, function (err, stats) {
                console.log(stats.toString({ colors: true }));
            });
        });
    }
    else {
        compilers(instdir, instmod, context, false).forEach(function (c) {
            return c.run(function (err, stats) {
                console.log(stats.toString({ colors: true }));
                if (stats.hasErrors())
                    process.exit(const_1.EXIT_STATUS.WEBPACK_COMPILE_ERROR);
            });
        });
    }
}
exports["default"] = default_1;
