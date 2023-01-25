import * as chalk from "chalk"
import * as esbuild from "esbuild"
import * as fs from "fs"
import * as path from "path"

import { PATH } from "../constants"

export default function (entryPoints: string[], outdir: string, watch: boolean): void {
  let namespace = path.join(PATH.INSTALL_DIR, "@types", "jdk", "namespace.json")
  const globalVars = Object.keys(JSON.parse(fs.readFileSync(namespace, "utf-8")))
  namespace = path.join(process.cwd(), "lib", "@types", "namespace.json")
  if (fs.existsSync(namespace)) {
    const content = fs.readFileSync(namespace, "utf-8")
    Object.keys(JSON.parse(content)).forEach(it => {
      if (globalVars.indexOf(it) < 0) globalVars.push(it)
    })
  }
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
    target: "es6",
  }
  if (watch) {
    esbuild.context(options).then(context => context.watch())
  } else {
    esbuild.buildSync(options)
  }
}
