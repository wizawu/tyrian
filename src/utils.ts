import fs from "fs"
import path from "path"

export function listFilesByExt(dirname: string, ext: string): string[] {
  if (fs.existsSync(dirname)) {
    if (fs.lstatSync(dirname).isDirectory()) {
      return fs.readdirSync(dirname)
        .filter(it => it.endsWith(ext))
        .map(it => path.join(dirname, it))
    } else {
      return []
    }
  } else {
    return []
  }
}

export function qualifiedName(javaClass: string): string {
  return javaClass.replace(/(\$\d+)*\.class$/, "").replace(/\//g, ".")
}
