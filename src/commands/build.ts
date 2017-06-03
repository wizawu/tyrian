import * as chalk from "chalk"
import * as fs from "fs"
import * as path from "path"
import * as webpack from "webpack"

import { EXIT_STATUS } from "../const"
import { getTopPackages } from "../compiler/parseJAR"

const autoprefixer = require("autoprefixer")

function compiler(instdir: string, instmod: string, entries: string[], watch: boolean) {
    let context = process.cwd()
    let entry = {}
    entries.forEach(file => entry[`${path.basename(file, ".ts")}.js`] = file)

    let cssLoaders = [{
        loader: "style-loader"
    }, {
        loader: "css-loader",
        options: { minimize: true },
    }, {
        loader: "postcss-loader",
        options: {
            plugins: [
                autoprefixer({
                    browsers: [
                        "last 3 versions",
                        "safari >= 6",
                        "IE >= 9",
                    ]
                })
            ]
        }
    }]

    let globalVars = {}
    if (fs.existsSync(`${context}/lib`)) {
        let jars = fs.readdirSync(`${context}/lib`).filter(file => /\.jar$/.test(file))
        jars.forEach(jar => {
            getTopPackages(`${context}/lib/${jar}`).forEach(pkg =>
                globalVars[pkg] = `typeof ${pkg} === "undefined" ? Packages.${pkg} : ${pkg}`
            )
        })
    }

    return webpack({
        devtool: "cheap-source-map",
        context: context,
        resolve: { extensions: [".js", ".ts", ".tsx"] },
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
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: watch ? '"development"' : '"production"'
                },
                ...globalVars,
            }),
        ].slice(watch ? 1 : 0)
    })
}

export default function (instdir: string, instmod: string, entries: string[], watch: boolean) {
    if (entries.length === 0) {
        console.error(chalk.yellow("no entry to build"))
        process.exit(EXIT_STATUS.BUILD_ENTRY_ERROR)
    } else if (!fs.existsSync("tsconfig.json")) {
        console.error(chalk.red("no tsconfig.json in current directory"))
        process.exit(EXIT_STATUS.TSCONFIG_NOT_FOUND)
    }

    let statsOptions = {
        children: false,
        chunks: false,
        colors: true,
        version: false,
    }

    if (watch) {
        compiler(instdir, instmod, entries, true).watch({ poll: true }, (err, stats) => {
            console.log(`Clock: ${new Date().toLocaleTimeString()}`)
            console.log(stats.toString(statsOptions))
        })
    } else {
        compiler(instdir, instmod, entries, false).run((err, stats) => {
            console.log(stats.toString(statsOptions))
            if (stats.hasErrors()) process.exit(EXIT_STATUS.WEBPACK_COMPILE_ERROR)
        })
    }
}
