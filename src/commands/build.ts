import fs from "fs"
import path from "path"
import webpack, { Stats } from "webpack"

import { checkRuntime } from "./run"
import { code as ErrorCode } from "../errors"

export default function (entries: string[], outDir: string, watch: boolean): void {
  const compiler = getCompiler(entries, outDir)
  const printStats = (stats?: Stats): void => console.log(stats?.toString({
    colors: true,
    chunks: false,
    entrypoints: true,
    modules: false,
  }))
  if (watch) {
    compiler.watch({ poll: true }, (err, stats): void => {
      printStats(stats)
    })
  } else {
    compiler.run((err, stats) => {
      printStats(stats)
      if (stats?.hasErrors()) process.exit(ErrorCode.BUILD_ERROR)
    })
  }
}

function getCompiler(entries: string[], outDir: string): webpack.Compiler {
  const context = process.cwd()
  const entry = {}
  for (const src of entries) {
    const out = path.join(outDir, path.basename(src).replace(/(.ts|.tsx)$/, ".js"))
    entry[out] = path.format({ dir: ".", name: path.relative("", src) })
  }

  return webpack({
    devtool: false,
    mode: "development",
    context: context,
    entry: entry,
    target: checkRuntime()[0] === "nashorn" ? "es5" : "node",
    output: {
      path: process.cwd(),
      filename: "[name]",
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
    resolveLoader: {
      modules: [
        path.join(__dirname, "..", "..", "node_modules"),
        path.join(__dirname, "..", "..", ".."),
      ]
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: [{
          loader: "ts-loader",
          options: {
            transpileOnly: false,
          },
        }]
      }]
    },
    plugins: [
      new webpack.DefinePlugin(globalVarDefinition())
    ],
  })
}

function globalVarDefinition(): Record<string, string> {
  const vars = ["com", "java", "javax", "jdk", "netscape", "org"]
  const filePath = path.join(process.cwd(), "lib", "@types", "namespace.json")
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf-8")
    Object.keys(JSON.parse(content)).forEach(it => {
      if (vars.indexOf(it) < 0) vars.push(it)
    })
  }
  return vars.reduce((result, ns) => {
    const test = `typeof Packages === "object" && typeof ${ns} === "undefined"`
    result[ns] = `(${test} ? Packages.${ns} : ${ns})`
    return result
  }, {})
}
