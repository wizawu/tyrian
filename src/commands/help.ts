import * as fs from "fs"

export function version(instdir: string) {
    return JSON.parse(fs.readFileSync(`${instdir}/package.json`, "utf-8")).version
}

export function help(instdir: string, status: number) {
    console.error(`

Version: ${version(instdir)}

Usage:
  1c env                    Check running environment of 1c
  1c init                   Initialize a new project in current directory
  1c install                Install dependencies in package.json
  1c build                  Build the project in current directory
  1c watch                  Watch and rebuild the project
  1c run build/<outfile>    Run output file compiled from .j.ts
  1c version                Output the version number
  1c help                   Output usage information

    `.trim())

    process.exit(status)
}
