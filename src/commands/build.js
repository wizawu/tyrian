"use strict";
exports.__esModule = true;
var fs = require("fs");
var autoprefixer = require("autoprefixer");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
function compiler(watch, instdir, instmod, context) {
    var entry = {};
    fs.readdirSync(context + "/src/js/entry").forEach(function (filename) {
        if (/\.j\.ts$/.test(filename)) {
            var basename = filename.replace(/\.j\.ts$/, "");
            entry["build/" + basename] = context + "/src/js/entry/" + filename;
        }
        else if (/\.tsx?/.test(filename)) {
            var basename = filename.replace(/\.tsx?$/, "");
            entry["build/assets/js/" + basename + ".min.js"] = context + "/src/js/entry/" + filename;
        }
    });
    var html = fs.readdirSync(context + "/src/html").filter(function (filename) { return /\.html$/.test(filename); });
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
    return webpack({
        devtool: watch && "inline-source-map",
        context: context,
        resolve: { extensions: [".js", ".j.ts", ".ts", ".tsx"] },
        resolveLoader: { modules: [instmod] },
        entry: entry,
        output: { path: context, filename: "[name]" },
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
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
        }).concat(watch ? [] : [
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                sourceMap: false
            })
        ]).concat([
            new CopyWebpackPlugin([{
                    context: context + "/src/assets",
                    from: "**/*",
                    to: context + "/build/assets"
                }])
        ])
    });
}
function build(instdir, instmod, context) {
    compiler(false, instdir, instmod, context).run(function (err, stats) {
        console.log(stats.toString({ colors: true }));
        if (stats.hasErrors())
            process.exit(2);
    });
}
exports.build = build;
function watch(instdir, instmod, context) {
    compiler(true, instdir, instmod, context).watch({ poll: true }, function (err, stats) {
        console.log(stats.toString({ colors: true }));
    });
}
exports.watch = watch;
