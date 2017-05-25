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
var server_1 = require("react-dom/server");
var const_1 = require("../const");
var parseJAR_1 = require("../compiler/parseJAR");
var autoprefixer = require("autoprefixer");
var CopyWebpackPlugin = require("copy-webpack-plugin");
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
    var globalVars = {};
    try {
        var jars = fs.readdirSync(context + "/lib").filter(function (filename) { return /\.jar$/.test(filename); });
        jars.forEach(function (jar) {
            parseJAR_1.getTopPackages(context + "/lib/" + jar).forEach(function (pkg) {
                return globalVars[pkg] = "Packages." + pkg;
            });
        });
    }
    catch (ex) {
    }
    var builtAssets = false;
    var createCompiler = function (entry, minimize) { return webpack({
        devtool: "cheap-source-map",
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
        plugins: [
            new CopyWebpackPlugin(builtAssets ? [] : [{
                    context: context + "/src/assets",
                    from: "**/*",
                    to: context + "/build/assets"
                }]),
            new webpack.DefinePlugin(__assign({ "process.env": {
                    NODE_ENV: minimize ? '"production"' : '"development"'
                } }, (entry === entryJJS ? globalVars : {}))),
        ].concat(minimize ? [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true
            })
        ] : [])
    }); };
    var list = [];
    if (Object.keys(entryJS).length > 0) {
        list.push(createCompiler(entryJS, !watch));
        builtAssets = true;
    }
    if (Object.keys(entryJJS).length > 0) {
        list.push(createCompiler(entryJJS, false));
        builtAssets = true;
    }
    return list;
}
function generateTsxHTML(options) {
    Object.keys(options.entry).forEach(function (k) {
        if (/\.tsx$/.test(options.entry[k])) {
            var filepath = k.replace(/js\/(.+).min.js/, "$1.tsx.html");
            var module_1 = options.context + "/" + k;
            delete require.cache[module_1];
            global._tsx_html = undefined;
            try {
                require(module_1);
                var html = global._tsx_html;
                if (typeof html !== "undefined") {
                    try {
                        fs.writeFileSync(filepath, server_1.renderToStaticMarkup(html));
                        console.log(chalk.green("[" + new Date().toTimeString().substring(0, 8) + "] emitted " + filepath));
                    }
                    catch (ex) {
                        console.error(chalk.yellow(ex.message));
                    }
                }
            }
            catch (ex) {
            }
        }
    });
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
    var statsOptions = {
        children: false,
        chunks: false,
        colors: true,
        version: false
    };
    if (watch) {
        compilers(instdir, instmod, context, entries, true).forEach(function (c) {
            return c.watch({ poll: true }, function (err, stats) {
                console.log(stats.toString(statsOptions));
                generateTsxHTML(c.options);
            });
        });
    }
    else {
        compilers(instdir, instmod, context, entries, false).forEach(function (c) {
            return c.run(function (err, stats) {
                console.log(stats.toString(statsOptions));
                if (stats.hasErrors()) {
                    process.exit(const_1.EXIT_STATUS.WEBPACK_COMPILE_ERROR);
                }
                else {
                    generateTsxHTML(c.options);
                }
            });
        });
    }
}
exports["default"] = default_1;
