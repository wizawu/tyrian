import * as chalk from "colorette"
import * as path from "path"
import * as rollup from "rollup"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import less from "rollup-plugin-less"
import preset from "@babel/preset-env"
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
  const banner =
    globalVars.map(it => `if (typeof Packages !== 'undefined') var ${it} = Packages.${it};\n`).join("") +
    "if (typeof process === 'undefined') var process = { env: { NODE_ENV: 'production' } };\n"

  const options = entryPoints.map(entry => {
    return {
      input: path.resolve(entry),
      output: {
        dir: outdir,
        format: "cjs",
        generatedCode: "es5",
        banner: banner,
      },
      treeshake: false,
      plugins: [
        resolve(),
        commonjs(),
        babel({
          babelHelpers: "bundled",
          presets: [preset],
        }),
        json(),
        less({ insert: true }),
        typescript({
          compilerOptions: {
            jsx: "react",
            lib: ["es5", "dom"],
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
