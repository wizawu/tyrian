import * as filesize from "filesize"
import * as fs from "fs"
import * as os from "os"
import * as path from "path"
import * as webpack from "webpack"
import chalk from "chalk"

import { EXIT_STATUS } from "../const"
import { getTopPackages } from "../parser/parseJAR"
import { tsconfig } from "./install"

const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const autoprefixer = require("autoprefixer")

export interface Options {
    input: string[]
    output: string[]
    watch: boolean
    uglify: RegExp | false
}

function getCompiler(instdir: string, instmod: string, options: Options) {
    let context = process.cwd()
    let entry = {}
    for (let i = 0; i < options.output.length; i++) {
        let inFile = path.format({ dir: ".", name: path.relative("", options.input[i]) })
        let outFile = path.relative("", options.output[i])
        entry[outFile] = inFile
    }

    // Support both CSS and Less
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

    // Find top packages from jars
    let javaPackages = {}
    if (fs.existsSync(`${context}/lib`)) {
        let jars = fs.readdirSync(`${context}/lib`).filter(file => /\.jar$/.test(file))
        jars.forEach(jar => {
            getTopPackages(`${context}/lib/${jar}`).forEach(pkg => {
                let test = `typeof Packages === "object" && typeof ${pkg} === "undefined"`
                javaPackages[pkg] = `(${test} ? Packages.${pkg} : ${pkg})`
            })
        })
    }

    // Load webpack config from package.json
    let webpackConfig: any = {}
    if (fs.existsSync("package.json")) {
        let packageJSON = JSON.parse(fs.readFileSync("package.json", "utf-8"))
        webpackConfig = packageJSON.webpack || {}
    }

    return webpack({
        mode: webpackConfig.mode || (options.watch ? "development" : "production"),
        devtool: "source-map",
        context: context,
        resolve: {
            extensions: [".js", ".ts", ".tsx"],
            ...webpackConfig.resolve
        },
        resolveLoader: { modules: [instmod] },
        entry: entry,
        output: {
            path: path.resolve(""),
            filename: "[name]",
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: [{
                    loader: "ts-loader",
                    options: { transpileOnly: true },
                }]
            }, {
                test: /^[^!]+\.css$/,
                use: cssLoaders,
            }, {
                test: /^[^!]+\.less$/,
                use: cssLoaders.concat({ loader: "less-loader" })
            }, {
                test: /\.(eot|otf|ttf|woff|woff2|png|svg)$/,
                use: "url-loader",
            }]
        },
        plugins: [
            new webpack.DefinePlugin(javaPackages),
            new ForkTsCheckerPlugin({
                memoryLimit: Math.max(1024, Math.floor(os.totalmem() / 1024 / 1024 / 4)),
            }),
        ],
        optimization: {
            minimize: options.uglify ? true : false,
            minimizer: options.uglify ? [
                new TerserPlugin({
                    test: options.uglify,
                    parallel: true,
                    sourceMap: false,
                })
            ] : undefined,
            ...webpackConfig.optimization,
        }
    })
}

export default function (instdir: string, instmod: string, options: Options) {
    if (options.input.length === 0) {
        console.error(chalk.red("No entry to build"))
        process.exit(EXIT_STATUS.CLI_INVALID_ENTRY)
    }
    if (options.input.length !== options.output.length) {
        console.error(chalk.red("Missing build output option"))
        process.exit(EXIT_STATUS.CLI_INVALID_OUTFILE)
    }
    options.output.forEach(filename => {
        if (fs.existsSync(filename) && fs.lstatSync(filename).isDirectory()) {
            console.error(chalk.red(filename + " is a directory"))
            process.exit(EXIT_STATUS.CLI_INVALID_OUTFILE)
        }
    })

    if (!fs.existsSync("tsconfig.json")) {
        fs.writeFileSync("tsconfig.json", tsconfig(instdir))
        console.error(chalk.yellow("Generated tsconfig.json"))
    }

    const printStats = (stats: webpack.Stats) => {
        console.log(stats.toString({
            assets: false,
            colors: true,
            chunks: false,
            entrypoints: false,
            modules: false,
        }))
        stats.toJson().assets.forEach(asset => {
            if (asset.emitted) {
                let size = filesize(asset.size, { standard: "iec", round: 2 })
                size = ("           " + size).slice(-10)
                console.log(`${chalk.gray("[emit]")} ${size} ${chalk.yellow(asset.name)}`)
            }
        })
        console.log()
    }

    if (options.watch) {
        getCompiler(instdir, instmod, options).watch({ poll: true }, (err, stats) => {
            printStats(stats)
        })
    } else {
        getCompiler(instdir, instmod, options).run((err, stats) => {
            printStats(stats)
            if (stats.hasErrors()) process.exit(EXIT_STATUS.WEBPACK_COMPILE_ERROR)
        })
    }
}
