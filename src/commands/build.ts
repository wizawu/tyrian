import * as chalk from "chalk"
import * as fs from "fs"
import * as path from "path"
import * as webpack from "webpack"
import { renderToStaticMarkup } from "react-dom/server"
import { EXIT_STATUS } from "../const"
import { getTopPackages } from "../compiler/parseJAR"

const autoprefixer = require("autoprefixer")
const CopyWebpackPlugin = require("copy-webpack-plugin")

function compilers(instdir: string, instmod: string, context: string, entries: string[], watch: boolean) {
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

    let builtAssets = false

    let createCompiler = (entry: any, minimize: boolean) => webpack({
        devtool: "source-map",
        context: context,
        resolve: { extensions: [".js", ".ts", ".j.ts", ".tsx"] },
        resolveLoader: { modules: [instmod] },
        entry: entry,
        output: {
            path: context,
            filename: "[name]",
            libraryTarget: entry === entryJJS ? undefined : "commonjs-module",
        },
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
        plugins: [
            new CopyWebpackPlugin(builtAssets ? [] : [{
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
        ].concat(minimize ? [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
            })
        ] : []),
    })

    let list: webpack.Compiler[] = []
    if (Object.keys(entryJS).length > 0) {
        list.push(createCompiler(entryJS, !watch))
        builtAssets = true
    }
    if (Object.keys(entryJJS).length > 0) {
        list.push(createCompiler(entryJJS, false))
        builtAssets = true
    }
    return list
}

function generateTsxHTML(options: webpack.Configuration) {
    Object.keys(options.entry).forEach(k => {
        if (/\.tsx$/.test((options.entry as any)[k])) {
            let html = k.replace(/js\/(.+).min.js/, "$1.tsx.html")
            try {
                let element = require(`${options.context}/${k}`).default
                try {
                    fs.writeFileSync(html, renderToStaticMarkup(element))
                } catch (ex) {
                    console.error(chalk.yellow(ex.message))
                }
            } catch (ex) {
            }
        }
    })
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
    let statsOptions = {
        children: false,
        chunks: false,
        colors: true,
        version: false,
    }

    if (watch) {
        compilers(instdir, instmod, context, entries, true).forEach(c =>
            c.watch({ poll: true }, (err, stats) => {
                console.log(stats.toString(statsOptions))
                generateTsxHTML(c.options)
            })
        )
    } else {
        compilers(instdir, instmod, context, entries, false).forEach(c =>
            c.run((err, stats) => {
                console.log(stats.toString(statsOptions))
                if (stats.hasErrors()) {
                    process.exit(EXIT_STATUS.WEBPACK_COMPILE_ERROR)
                } else {
                    generateTsxHTML(c.options)
                }
            })
        )
    }
}
