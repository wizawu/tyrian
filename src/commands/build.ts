import * as chalk from "colorette"
import * as path from "path"
import * as rollup from "rollup"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

import { PATH } from "../constants"
import * as utils from "../utils"

export default function (entryPoints: string[], outdir: string, watch: boolean): void {
  let nsFile = path.join(PATH.INSTALL_DIR, "@types", "jdk", "namespace.json")
  const globalVars = Object.keys(utils.readJSON(nsFile))
  nsFile = path.join(process.cwd(), "lib", "@types", "namespace.json")
  Object.keys(utils.readJSON(nsFile)).forEach(it => {
    if (globalVars.indexOf(it) < 0) globalVars.push(it)
  })
  const globals = globalVars.reduce((result, it) => {
    result[it] = `Packages.${it}`
    return result
  }, {})

  const options = entryPoints.map(entry => {
    return {
      input: path.resolve(entry),
      output: {
        dir: outdir,
        format: "cjs",
        generatedCode: "es5",
        globals: globals,
      },
      treeshake: false,
      plugins: [
        commonjs(),
        json(),
        resolve(),
        typescript({
          compilerOptions: {
            lib: ["es5"],
            target: "es5",
            typeRoots: [path.join(PATH.INSTALL_DIR, "@types"), path.join("node_modules", "@types"), "lib"],
          },
        }),
      ],
    } as rollup.RollupOptions
  })
  if (watch) {
    rollup.watch(options).on("event", (result: rollup.RollupWatcherEvent) => {
      if (result.code == "BUNDLE_START") {
        console.warn(chalk.gray(`[${new Date().toLocaleString("sv")}] rebuilding...`))
      }
      if (result.code == "BUNDLE_END") {
        console.warn(chalk.gray(`[${new Date().toLocaleString("sv")}] waiting for changes...`))
      }
    })
  } else {
    options.forEach(it => {
      rollup.rollup(it).then(res => {
        res.write(it.output as rollup.OutputOptions)
        res.close()
      })
    })
  }
}
