"use strict";
exports.__esModule = true;
var fs = require("fs");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
function compiler(watch, libdir, libmod, context) {
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
    return webpack({
        devtool: watch && "inline-source-map",
        context: context,
        resolve: { extensions: [".js", ".j.ts", ".ts", ".tsx"] },
        resolveLoader: { modules: [libmod] },
        entry: entry,
        output: { path: context, filename: "[name]" },
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                }, {
                    test: /^[^!]+\.css$/,
                    loader: "style-loader!css-loader?-minimize"
                }, {
                    test: /^[^!]+\.less$/,
                    loader: "style-loader!css-loader?-minimize!less-loader"
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
function build(libdir, libmod, context) {
    compiler(false, libdir, libmod, context).run(function (err, stats) {
        console.log(stats.toString({ colors: true }));
        if (stats.hasErrors())
            process.exit(2);
    });
}
exports.build = build;
function watch(libdir, libmod, context) {
    compiler(true, libdir, libmod, context).watch({ poll: true }, function (err, stats) {
        console.log(stats.toString({ colors: true }));
    });
}
exports.watch = watch;
