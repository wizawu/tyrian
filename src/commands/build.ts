import path from "path"
import webpack, { Stats } from "webpack"

import { code as ErrorCode } from "../errors"

export const compilerOptions = {
  typeRoots: [
    path.join(__dirname, "..", "..", "@types"),
    path.join(process.cwd(), "lib"),
  ]
}

export default function (entries: string[], outDir: string, watch: boolean): void {
  const compiler = getCompiler(entries, outDir)
  const printStats = (stats?: Stats) => console.log(stats?.toString({
    colors: true,
    chunks: false,
    entrypoints: true,
    modules: false,
  }))
  if (watch) {
    compiler.watch({ poll: true }, (err, stats) => {
      printStats(stats)
    })
  } else {
    compiler.run((err, stats) => {
      printStats(stats)
      if (stats?.hasErrors()) process.exit(ErrorCode.BUILD_ERROR)
    })
  }
}

function getCompiler(entries: string[], outDir: string) {
  const context = process.cwd()
  const entry = {}
  for (const src of entries) {
    const out = path.join(outDir, path.basename(src).replace(/(.ts|.tsx)$/, ".js"))
    entry[out] = path.format({dir:".", name:path.relative("", src)})
  }

  return webpack({
    devtool: false,
    mode: "development",
    context: context,
    entry: entry,
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
  })
}
