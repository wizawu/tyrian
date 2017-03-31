import * as fs from "fs"

const webpack = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

function compiler(watch: boolean, libdir: string, libmod: string, context: string) {
    let entry = {}
    fs.readdirSync(`${context}/src/js/entry`).forEach(filename => {
        if (/\.j\.ts$/.test(filename)) {
            let basename = filename.replace(/\.j\.ts$/, "")
            entry[`build/${basename}`] = `${context}/src/js/entry/${filename}`
        } else if (/\.tsx?/.test(filename)) {
            let basename = filename.replace(/\.tsx?$/, "")
            entry[`build/assets/js/${basename}.min.js`] = `${context}/src/js/entry/${filename}`
        }
    })

    let html = fs.readdirSync(`${context}/src/html`).filter(filename => /\.html$/.test(filename))

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
                exclude: /node_modules/,
            }, {
                test: /^[^!]+\.css$/,
                loader: "style-loader!css-loader?-minimize",
            }, {
                test: /^[^!]+\.less$/,
                loader: "style-loader!css-loader?-minimize!less-loader",
            }]
        },
        plugins: html.map(filename =>
            new HtmlWebpackPlugin({
                filename: `build/assets/${filename}`,
                template: `${context}/src/html/${filename}`,
                inject: false,
            })
        ).concat(watch ? [] : [
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                sourceMap: false,
            })
        ]).concat([
            new CopyWebpackPlugin([{
                context: `${context}/src/assets`,
                from: "**/*",
                to: `${context}/build/assets`,
            }])
        ]),
    })
}

export function entry(libdir: string, libmod: string, context: string) {
    compiler(false, libdir, libmod, context).run((err, stats) => {
        console.log(stats.toString({ colors: true }))
        if (stats.hasErrors()) process.exit(2)
    })
}

export function watch(libdir: string, libmod: string, context: string) {
    compiler(true, libdir, libmod, context).watch({ poll: true }, (err, stats) => {
        console.log(stats.toString({ colors: true }))
    })
}