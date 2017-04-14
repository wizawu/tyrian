"use strict";
exports.__esModule = true;
var fs = require("fs");
var const_1 = require("../const");
var autoprefixer = require("autoprefixer");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
function compiler(watch, instdir, instmod, context) {
    var entry = {};
    if (fs.existsSync(context + "/src/js/entry")) {
        fs.readdirSync(context + "/src/js/entry").forEach(function (filename) {
            if (/\.j\.ts$/.test(filename)) {
                var basename = filename.replace(/\.j\.ts$/, "");
                entry["build/" + basename] = context + "/src/js/entry/" + filename;
            }
            else if (/\.tsx?/.test(filename) && !/\.d\.ts$/.test(filename)) {
                var basename = filename.replace(/\.tsx?$/, "");
                entry["build/assets/js/" + basename + ".min.js"] = context + "/src/js/entry/" + filename;
            }
        });
    }
    if (fs.existsSync(context + "/src/js/test")) {
        fs.readdirSync(context + "/src/js/test").forEach(function (filename) {
            if (!/^test/.test(filename))
                return;
            if (/\.j\.ts$/.test(filename)) {
                var basename = filename.replace(/\.j\.ts$/, "");
                entry["build/" + basename] = context + "/src/js/test/" + filename;
            }
            else if (/\.tsx?/.test(filename) && !/\.d\.ts$/.test(filename)) {
                var basename = filename.replace(/\.tsx?$/, "");
                entry["build/assets/js/" + basename + ".min.js"] = context + "/src/js/test/" + filename;
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
    return webpack({
        devtool: watch && "inline-source-map",
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
                    NODE_ENV: watch ? '"development"' : '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                minimize: watch ? false : true,
                sourceMap: false
            }),
        ])
    });
}
function build(instdir, instmod, context) {
    compiler(false, instdir, instmod, context).run(function (err, stats) {
        console.log(stats.toString({ colors: true }));
        if (stats.hasErrors())
            process.exit(const_1.EXIT_STATUS.WEBPACK_COMPILE_ERROR);
    });
}
exports.build = build;
function watch(instdir, instmod, context) {
    compiler(true, instdir, instmod, context).watch({ poll: true }, function (err, stats) {
        console.log(stats.toString({ colors: true }));
    });
}
exports.watch = watch;
