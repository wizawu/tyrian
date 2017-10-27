import * as chalk from "chalk"
import * as fs from "fs"
import * as path from "path"
import * as webpack from "webpack"

import { EXIT_STATUS } from "../const"
import { getTopPackages } from "../compiler/parseJAR"

const autoprefixer = require("autoprefixer")

export interface Options {
    watch: boolean
    uglify: boolean
    outDir: string
    outFile?: string
}

function compiler(instdir: string, instmod: string, entries: string[], options: Options) {
    let context = process.cwd()
    let entry = {}
    entries = entries.map(entry => "./" + path.relative("", entry))
    if (entries.length === 1 && options.outFile) {
        entry[options.outFile] = entries[0]
    } else {
        entries.forEach(file => {
            if (/\.ts$/.test(file)) {
                entry[path.basename(file, ".ts") + ".js"] = file
            } else if (/\.tsx$/.test(file)) {
                entry[path.basename(file, ".tsx") + ".js"] = file
            } else {
                throw `invalid entry suffix: ${file}`
            }
        })
    }

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
                globalVars[pkg] = `(typeof Packages === "object" && typeof ${pkg} === "undefined" ? Packages.${pkg} : ${pkg})`
            )
        })
    }

    let alias
    let plugins = [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: options.watch ? '"development"' : '"production"'
            },
            ...globalVars,
        }),
    ]
    if (options.uglify) {
        plugins.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: true }))
    }
    if (fs.existsSync("package.json")) {
        let packageJSON = JSON.parse(fs.readFileSync("package.json", "utf-8"))
        alias = packageJSON.alias
        if (packageJSON.commonsChunk) {
            plugins.push(new webpack.optimize.CommonsChunkPlugin(packageJSON.commonsChunk))
        }
    }

    return webpack({
        devtool: "source-map",
        context: context,
        resolve: {
            alias,
            extensions: [".js", ".ts", ".tsx"]
        },
        resolveLoader: { modules: [instmod] },
        entry: entry,
        output: {
            path: path.resolve(options.outDir),
            filename: "[name]",
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
            }, {
                test: /\.(eot|otf|ttf|woff|woff2|png|svg)$/,
                use: "url-loader",
            }]
        },
        plugins,
    })
}

export default function (instdir: string, instmod: string, entries: string[], options: Options) {
    if (entries.length === 0) {
        console.error(chalk.yellow("no entry to build"))
        process.exit(EXIT_STATUS.BUILD_ENTRY_ERROR)
    } else if (options.outDir === undefined) {
        console.error(chalk.red("invalid -o option"))
        process.exit(EXIT_STATUS.BUILD_OUTDIR_ERROR)
    } else if (entries.some(entry => !/\.tsx?$/.test(entry))) {
        console.error(chalk.red("entry suffix should be .ts or .tsx"))
        process.exit(EXIT_STATUS.BUILD_ENTRY_ERROR)
    } else if (!fs.existsSync("tsconfig.json")) {
        console.error(chalk.red("no tsconfig.json in current directory"))
        process.exit(EXIT_STATUS.TSCONFIG_NOT_FOUND)
    }

    if (options.outFile && entries.length > 1) {
        console.error(chalk.yellow(`ignoring -o ${options.outFile}`))
    }

    let statsOptions = {
        colors: true,
        hash: true,
        timings: true,
        version: false,
    }

    if (options.watch) {
        compiler(instdir, instmod, entries, options).watch({ poll: true }, (err, stats) => {
            console.log(`Clock: ${new Date().toLocaleTimeString()}`)
            console.log(stats.toString(statsOptions))
        })
    } else {
        compiler(instdir, instmod, entries, options).run((err, stats) => {
            console.log(stats.toString(statsOptions))
            if (stats.hasErrors()) process.exit(EXIT_STATUS.WEBPACK_COMPILE_ERROR)
        })
    }
}
