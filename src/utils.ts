import { spawnSync } from "child_process"
import * as fs from "fs"
import * as path from "path"
import which from "which"

export function listFilesByExt(dirname: string, ext: string): string[] {
  if (fs.existsSync(dirname)) {
    if (fs.lstatSync(dirname).isDirectory()) {
      return fs
        .readdirSync(dirname)
        .filter(it => it.endsWith(ext))
        .map(it => path.join(dirname, it))
    } else {
      return []
    }
  } else {
    return []
  }
}

export function readJSON(path: string): Record<string, any> {
  if (fs.existsSync(path)) {
    const content = fs.readFileSync(path, "utf-8")
    return JSON.parse(content)
  } else {
    return {}
  }
}

// Return the full path of any executable command
export function realPath(command: string): string {
  const fullPath = which.sync(command)
  if (fs.lstatSync(fullPath).isSymbolicLink()) {
    return fs.realpathSync(fullPath)
  } else {
    return fullPath
  }
}

export function javap(classPaths: string[], classList: string[]): string | null {
  let command = process.env.JAVAP
  if (!command) {
    try {
      const runtime = "nashorn"
      command = runtime ? path.resolve(locateJdk(runtime)[1], "bin", "javap") : realPath("javap")
    } catch (e) {
      command = realPath("javap")
    }
  }
  const child = spawnSync(command, ["-package", "-cp", ":" + classPaths.join(":"), ...classList])
  if (child.status === 0) {
    return child.stdout.toString()
  } else {
    console.error(child.stderr.toString())
    return null
  }
}

// Return runtime type and home directory
export function locateJdk(runtime: string): [Runtime, string] {
  const fullPath = realPath(runtime)
  const child = spawnSync(runtime, ["--version:graalvm"])
  if (child.status === 0) {
    return ["graaljs", path.resolve(fullPath, "..", "..", "..", "..")]
  } else {
    return ["nashorn", path.resolve(fullPath, "..", "..")]
  }
}
