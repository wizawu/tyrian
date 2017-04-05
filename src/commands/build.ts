import * as fs from "fs"
import { EXIT_STATUS } from "../const"

const autoprefixer = require("autoprefixer")
const webpack = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

function compiler(watch: boolean, instdir: string, instmod: string, context: string) {
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

    let html = fs.existsSync(`${context}/src/html`) ? (
        fs.readdirSync(`${context}/src/html`).filter(filename => /\.html$/.test(filename))
     ) : []

    let cssLoaders = [{
        loader: "style-loader"
    }, {
        loader: "css-loader",
        options: { minimize: true },
    }, {
        loader: "postcss-loader",
        options: {
            plugins: [
                autoprefixer({ browsers: ["last 3 versions", "safari >= 6", "IE >= 9"] })
            ]
        }
    }]

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
                exclude: /node_modules/,
            }, {
                test: /^[^!]+\.css$/,
                use: cssLoaders,
            }, {
                test: /^[^!]+\.less$/,
                use: cssLoaders.concat({ loader: "less-loader" })
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

export function build(instdir: string, instmod: string, context: string) {
    compiler(false, instdir, instmod, context).run((err, stats) => {
        console.log(stats.toString({ colors: true }))
        if (stats.hasErrors()) process.exit(EXIT_STATUS.WEBPACK_COMPILE_ERROR)
    })
}

export function watch(instdir: string, instmod: string, context: string) {
    compiler(true, instdir, instmod, context).watch({ poll: true }, (err, stats) => {
        console.log(stats.toString({ colors: true }))
    })
}
