import fs from "fs"
import path from "path"
import webpack, { Stats } from "webpack"

import { checkRuntime } from "./run"
import { code as ErrorCode } from "../errors"

export const compilerOptions = {
  typeRoots: [
    path.join(__dirname, "..", "..", "@types"),
  ]
}

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
    entry[out] = path.format({ dir:".", name:path.relative("", src) })
  }

  return webpack({
    devtool: false,
    mode: "development",
    context: context,
    entry: entry,
    target: checkRuntime()[0] === "nashorn" ? "es5" : undefined,
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
        path.join(__dirname, "..", "..", "..", "node_modules"),
      ]
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: [{
          loader: "ts-loader",
          options: {
            transpileOnly: false,
            compilerOptions: compilerOptions,
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
  fs.readdirSync(path.join(process.cwd(), "lib", "@types")).forEach(it => {
    if (it === "index.d.ts") {
      return
    } else if (it.endsWith(".d.ts")) {
      const ns = it.split(".")[0].trim()
      if (vars.indexOf(ns) < 0) vars.push(ns)
    }
  })
  return vars.reduce((result, ns) => {
    const test = `typeof Packages === "object" && typeof ${ns} === "undefined"`
    result[ns] = `(${test} ? Packages.${ns} : ${ns})`
    return result
  }, {})
}
