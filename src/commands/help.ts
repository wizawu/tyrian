import * as fs from "fs"

export function version(instdir: string) {
    return JSON.parse(fs.readFileSync(`${instdir}/package.json`, "utf-8")).version
}

export function help(instdir: string, status: number) {
    console.error(`

Version: ${version(instdir)}

Usage:
  1c env                    check running environment of 1c
  1c init                   initialize a new project in current directory
  1c install                install dependencies in package.json
  1c build                  build the project in current directory
  1c watch                  watch and rebuild the project
  1c run build/<outfile>    run output file compiled from .j.ts
  1c rerun build/<outfile>  run output file and enable hot reload
  1c version                output version number
  1c help                   output usage information

    `.trim())

    process.exit(status)
}
