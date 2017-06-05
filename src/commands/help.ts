import * as fs from "fs"

export function version(instdir: string) {
    return JSON.parse(fs.readFileSync(`${instdir}/package.json`, "utf-8")).version
}

export function help(instdir: string, status: number) {
    console.error(`

version: ${version(instdir)}

usage:
  1c help                               print this message
  1c version                            print the version number
  1c env                                check if all dependencies of 1c are ready
  1c install                            install dependencies in package.json
  1c build [options] <entry>...         build one/multiple entries (.ts/.tsx)
  1c run [-w] [jjs options] <output>    run output file (.js)

build options:
  -c <dir>          output build result in <dir>
  -m                build each entry as a commonjs module
  -o <file>         output build result to <file>
  -u                uglify build result
  -w                watch changes and re-build

run options:
  -w                watch changes and re-run
  jjs options       check out 'jjs -h' (should after -w if exist)

    `.trim())

    process.exit(status)
}
