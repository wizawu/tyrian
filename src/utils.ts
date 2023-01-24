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

export function javap(classPaths: string[], classList: string[]): string {
  const child = spawnSync("javap", ["-package", "-cp", ":" + classPaths.join(":"), ...classList])
  if (child.status === 0) {
    return child.stdout.toString()
  } else {
    throw new Error(child.stderr.toString())
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
