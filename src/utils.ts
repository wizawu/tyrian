import { spawnSync } from "child_process"
import * as fs from "fs"
import * as path from "path"

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

export function javap(classPaths: string[], classList: string[]): string {
  const child = spawnSync("javap", ["-package", "-cp", ":" + classPaths.join(":"), ...classList])
  if (child.status === 0) {
    return child.stdout.toString()
  } else {
    throw new Error(child.stderr.toString())
  }
}
