import * as fs from "fs"

export function version(instdir: string) {
    return JSON.parse(fs.readFileSync(`${instdir}/package.json`, "utf-8")).version
}

export function help(instdir: string, status: number) {
    console.log()
    console.log(`
Version: ${version(instdir)}

Usage:
  1c help                               print this message
  1c version                            print the version number
  1c env                                check all prerequisites of 1c
  1c install                            install dependencies in package.json
  1c build [options] <output/entry>...  build one/multiple entries (.ts/.tsx)
  1c run [-w] [jjs options] <output>    run an output file (.js)

build options:
  --skipJDK             skip JDK definition checking
  -u                    uglify build results
  -w                    watch changes and re-build

build output/entry:
  -c <dir> <entry>...   output build results to a directory
  -o <file> <entry>     output to a specific file (CANNOT be used with -c)

  # Examples #
  input1.ts input2.tsx                  -> ./input1.js ./input2.js
  -c dir1 input1.ts -c dir2 input2.tsx  -> dir1/input1.js dir2/input2.js
  -o dir/output input.ts                -> dir/output

run options:
  -w                    watch changes and re-run
  jjs options           check out 'jjs -h' (must be AFTER -w if used)
                        e.g. -J-Xms64m -J-Xmx256m -Dfile.encoding=UTF-8
    `.trim())
    console.log()
    process.exit(status)
}
