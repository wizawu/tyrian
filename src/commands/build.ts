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
    watch: boolean
    uglify: boolean
    outDir: string
    outFile?: string
    skipJDK?: boolean
}

function getCompiler(instdir: string, instmod: string, entries: string[], options: Options) {
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
            path: path.resolve(options.outDir),
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

export default function (instdir: string, instmod: string, entries: string[], options: Options) {
    if (entries.length === 0) {
        console.error(chalk.red("No entry to build"))
        process.exit(EXIT_STATUS.BUILD_ENTRY_ERROR)
    }
    if (entries.some(entry => !/\.tsx?$/.test(entry))) {
        console.error(chalk.red("Entry suffix should be .ts or .tsx"))
        process.exit(EXIT_STATUS.BUILD_ENTRY_ERROR)
    }
    if (entries.length > 1 && options.outFile) {
        console.error(chalk.red("Cannot use -o option if there are multiple entries"))
        process.exit(EXIT_STATUS.BUILD_ENTRY_ERROR)
    }
    if (options.outFile && fs.existsSync(options.outFile)) {
        if (!fs.lstatSync(options.outFile).isFile()) {
            console.error(chalk.red(`${options.outFile} is not a file`))
            process.exit(EXIT_STATUS.BUILD_OUTFILE_ERROR)
        }
    }
    if (options.outDir && fs.existsSync(options.outDir)) {
        if (!fs.lstatSync(options.outDir).isDirectory()) {
            console.error(chalk.red(`${options.outDir} is not a directory`))
            process.exit(EXIT_STATUS.BUILD_OUTDIR_ERROR)
        }
    }

    if (!fs.existsSync("tsconfig.json")) {
        fs.writeFileSync("tsconfig.json", tsconfig(instdir))
        console.error(chalk.yellow("Generated tsconfig.json"))
    }

    if (options.watch) {
        getCompiler(instdir, instmod, entries, options).watch({ poll: true }, (err, stats) => {
            console.log(stats.toString("minimal"))
            console.log(`\nFinished last build at ${new Date().toLocaleTimeString()}\n`)
        })
    } else {
        getCompiler(instdir, instmod, entries, options).run((err, stats) => {
            console.log(stats.toString("minimal"))
            if (stats.hasErrors()) process.exit(EXIT_STATUS.WEBPACK_COMPILE_ERROR)
        })
    }
}
