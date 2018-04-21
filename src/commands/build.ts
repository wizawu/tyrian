import * as crypto from "crypto"
import * as fs from "fs"
import * as path from "path"
import * as webpack from "webpack"
import chalk from "chalk"

import { EXIT_STATUS } from "../const"
import { getTopPackages } from "../parser/parseJAR"
import { tsconfig } from "./install"

const autoprefixer = require("autoprefixer")

export interface Options {
    input: string[]
    output: string[]
    watch: boolean
    uglify: boolean
    skipJDK?: boolean
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

    // Create a tsconfig file for builds with --skipJDK
    let tsconfigFile = "tsconfig.json"
    if (options.skipJDK) {
        let tsBuildConfig = fs.readFileSync("tsconfig.json", "utf-8")
            .replace(/(1c\/@types)/g, options.skipJDK ? "1c/@types-lite" : "$1")
        let md5 = crypto.createHash("md5").update(tsBuildConfig).digest().toString("hex")
        tsconfigFile = "tsconfig.build." + md5 + ".json"
        fs.writeFileSync(tsconfigFile, tsBuildConfig)
    }

    return webpack({
        mode: options.uglify ? "production" : "development",
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
                    options: { configFile: tsconfigFile },
                }]
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
        plugins: [new webpack.DefinePlugin(javaPackages)],
        optimization: {
            nodeEnv: options.watch ? "development" : "production",
            minimize: options.uglify,
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

    let statsOptions = {
        colors: true,
        chunks: false,
        entrypoints: false,
        modules: false,
    }

    if (options.watch) {
        getCompiler(instdir, instmod, options).watch({ poll: true }, (err, stats) => {
            console.log(stats.toString(statsOptions))
        })
    } else {
        getCompiler(instdir, instmod, options).run((err, stats) => {
            console.log(stats.toString(statsOptions))
            if (stats.hasErrors()) process.exit(EXIT_STATUS.WEBPACK_COMPILE_ERROR)
        })
    }
}
