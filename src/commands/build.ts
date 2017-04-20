import * as chalk from "chalk"
import * as fs from "fs"
import * as path from "path"
import { EXIT_STATUS } from "../const"
import { getTopPackages } from "../compiler/parseJAR"

const autoprefixer = require("autoprefixer")
const webpack = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

function compilers(instdir: string, instmod: string, context: string, entries: string[], watch: boolean): any[] {
    let entryJS = {}
    let entryJJS = {}

    entries.forEach(entry => {
        if (/\.j\.ts$/.test(entry)) {
            entryJJS[`build/${path.basename(entry, ".j.ts")}.js`] = entry
        } else if (/\.tsx?$/.test(entry) && !/\.d\.ts$/.test(entry)) {
            let basename = path.basename(entry).replace(/\.tsx?$/, "")
            entryJS[`build/assets/js/${basename}.min.js`] = entry
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

    let globalVars = {}
    try {
        let jars = fs.readdirSync(`${context}/lib`).filter(filename => /\.jar$/.test(filename))
        jars.forEach(jar => {
            getTopPackages(`${context}/lib/${jar}`).forEach(pkg =>
                globalVars[pkg] = "Packages." + pkg
            )
        })
    } catch (ex) {
    }

    let createCompiler = (entry: any, html: any[], minimize: boolean) => webpack({
        devtool: "source-map",
        context: context,
        resolve: { extensions: [".js", ".ts", ".j.ts", ".tsx"] },
        resolveLoader: { modules: [instmod] },
        entry: entry,
        output: { path: context, filename: "[name]" },
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
            }, {
                test: /\.json$/,
                loader: "json-loader",
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
        ).concat([
            new CopyWebpackPlugin([{
                context: `${context}/src/assets`,
                from: "**/*",
                to: `${context}/build/assets`,
            }]),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: minimize ? '"production"' : '"development"'
                },
                ...(entry === entryJJS ? globalVars : {}),
            }),
        ]).concat(minimize ? [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
            })
        ] : []),
    })

    let list = []
    if (Object.keys(entryJS).length > 0) {
        list.push(createCompiler(entryJS, html, !watch) as never)
    }
    if (Object.keys(entryJJS).length > 0) {
        list.push(createCompiler(entryJJS, [], false) as never)
    }
    return list
}

export default function (instdir: string, instmod: string, entries: string[], watch: boolean) {
    if (entries.length === 0) {
        console.error(chalk.yellow("no entry to build"))
        process.exit(EXIT_STATUS.BUILD_ENTRY_ERROR)
    }

    let context: any = {}
    entries.forEach((entry, i) => {
        entries[i] = path.resolve(entry)
        let tsconfigDir = path.dirname(entries[i])
        while (!fs.existsSync(`${tsconfigDir}/tsconfig.json`)) {
            if (tsconfigDir === "/") {
                console.error(chalk.red("cannot find tsconfig.json"))
                process.exit(EXIT_STATUS.BUILD_ENTRY_ERROR)
            } else {
                tsconfigDir = path.dirname(tsconfigDir)
            }
        }
        context[tsconfigDir] = true
    })

    if (Object.keys(context).length > 1) {
        console.error(chalk.red("entries not in the same project"))
        process.exit(EXIT_STATUS.BUILD_ENTRY_ERROR)
    }

    context = Object.keys(context)[0]

    if (watch) {
        compilers(instdir, instmod, context, entries, true).forEach(c =>
            c.watch({ poll: true }, (err, stats) => {
                console.log(stats.toString({ colors: true }))
            })
        )
    } else {
        compilers(instdir, instmod, context, entries, false).forEach(c =>
            c.run((err, stats) => {
                console.log(stats.toString({ colors: true }))
                if (stats.hasErrors()) process.exit(EXIT_STATUS.WEBPACK_COMPILE_ERROR)
            })
        )
    }
}
