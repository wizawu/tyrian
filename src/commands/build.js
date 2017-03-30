var fs = require("fs")

function compiler(watch, libdir, libmod, context) {
    var webpack = require(libmod + "/webpack")
    var HtmlWebpackPlugin = require(libmod + "/html-webpack-plugin")
    var CopyWebpackPlugin = require(libmod + "/copy-webpack-plugin")

    var entry = {}
    try {
        fs.readdirSync(context + "/src/js/entry/").forEach(function(filename) {
            if (/\.j\.ts$/.test(filename)) {
                var name = filename.replace(/\.j\.ts$/, "")
                entry["build/" + name] = context + "/src/js/entry/" + filename
            } else if (/\.tsx?/.test(filename)) {
                var name = filename.replace(/\.tsx?$/, "")
                entry["build/assets/js/" + name + ".min.js"] = context + "/src/js/entry/" + filename
            }
        })
    } catch (_) {
    }

    try {
        var html = fs.readdirSync(context + "/src/html").filter(function(filename) {
            return /\.html$/.test(filename)
        })
    } catch (_) {
        var html = []
    }

    return webpack({
        devtool: watch && "inline-source-map",
        context: context,
        resolve: {
            extensions: [".js", ".j.ts", ".ts", ".tsx"],
        },
        resolveLoader: {
            modules: [libmod],
        },
        entry: entry,
        output: {
            path: context,
            filename: "[name]",
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }, {
                test: /^[^!]+.css$/,
                loader: "style-loader!css-loader?-minimize",
            }, {
                test: /^[^!]+.less$/,
                loader: "style-loader!css-loader?-minimize!less-loader",
            }]
        },
        plugins: html.map(function(filename) {
            return new HtmlWebpackPlugin({
                filename: "build/assets/" + filename,
                template: context + "/src/html/" + filename,
                inject: false,
            })
        }).concat(watch ? [] : [
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                sourceMap: false,
            })
        ]).concat([
            new CopyWebpackPlugin([{
                context: context + "/src/assets",
                from: "**/*",
                to: context + "/build/assets"
            }]),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: watch ? '"development"' : '"production"'
                }
            })
        ]),
    })
}

function entry(libdir, libmod, context) {
    compiler(false, libdir, libmod, context).run(function(err, stats) {
        console.log(stats.toString({
            colors: true
        }))
        if (stats.hasErrors()) process.exit(2)
    })
}

function watch(libdir, libmod, context) {
    compiler(true, libdir, libmod, context).watch({
        poll: true
    }, function(err, stats) {
        console.log(stats.toString({
            colors: true
        }))
    })
}

module.exports = {
    entry: entry,
    watch: watch,
}