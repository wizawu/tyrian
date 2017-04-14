import * as fs from "fs"

export function version(instdir: string) {
    return JSON.parse(fs.readFileSync(`${instdir}/package.json`, "utf-8")).version
}

export function help(instdir: string, status: number) {
    console.error(`

Version: ${version(instdir)}

Usage:
  1c env                        check running environment of 1c
  1c init                       initialize a new project in current directory
  1c install                    install dependencies in package.json
  1c build [-w]                 build the project in current directory
  1c run [-w] build/<outfile>   run output file compiled from .j.ts
  1c version                    output version number
  1c help                       output usage information

Options:
  -w    watch changes and re-build/re-run

    `.trim())

    process.exit(status)
}
