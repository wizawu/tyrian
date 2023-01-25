import * as chalk from "chalk"
import * as esbuild from "esbuild"
import * as path from "path"

import { PATH, TARGET } from "../constants"
import * as utils from "../utils"

export default function (entryPoints: string[], outdir: string, watch: boolean): void {
  let nsFile = path.join(PATH.INSTALL_DIR, "@types", "jdk", "namespace.json")
  const globalVars = Object.keys(utils.readJSON(nsFile))
  nsFile = path.join(process.cwd(), "lib", "@types", "namespace.json")
  Object.keys(utils.readJSON(nsFile)).forEach(it => {
    if (globalVars.indexOf(it) < 0) globalVars.push(it)
  })
  const define = globalVars.reduce((result, it) => {
    result[it] = `Packages.${it}`
    return result
  }, {})

  const options: esbuild.BuildOptions = {
    bundle: true,
    color: !!chalk.supportsColor,
    define: define,
    entryPoints: entryPoints.map(it => path.resolve(it)),
    logLevel: "info",
    outdir: outdir,
    platform: "node",
    target: TARGET,
  }
  if (watch) {
    esbuild.context(options).then(context => context.watch())
  } else {
    esbuild.buildSync(options)
  }
}
