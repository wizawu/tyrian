import * as chalk from "chalk"
import * as fs from "fs"
import * as path from "path"
import { SourceMapConsumer } from "source-map"
import { spawn } from "child_process"

export default function (jjsArgs: string[], target: string, args: string[], watch: boolean) {
    target = path.resolve(target)
    let dirname = path.resolve(path.dirname(target))
    let lib = path.resolve(dirname + "/../lib")
    let classpath = fs.readdirSync(lib).map(jar => jar === "@types" ? "" : `${lib}/${jar}`).join(":")
    let sourceMap: SourceMapConsumer = null as any
    if (fs.existsSync(target + ".map")) {
        sourceMap = new SourceMapConsumer(JSON.parse(fs.readFileSync(target + ".map", "utf-8")))
    }

    let run = () => {
        let child = spawn("jjs", jjsArgs.concat(["-cp", classpath, target]).concat(args))
        child.on("exit", code => process.exit(code))

        let lookupSource = chunk => {
            if (sourceMap === null) return chunk
            let insert: any[] = []
            let regex = new RegExp(target + ":\\d+(:\\d+)?", "g")
            while (true) {
                let match = regex.exec(chunk)
                if (!match) break
                let position = sourceMap.originalPositionFor({
                    line: parseInt(match[0].split(":")[1]),
                    column: parseInt(match[0].split(":")[2]) || 1e16,
                })
                insert.push({
                    index: match.index + match[0].length,
                    position: `${position.source}:${position.line}`
                })
            }
            insert.reverse().forEach((s: any) => {
                chunk = chunk.substring(0, s.index) +
                    chalk.yellow(`->${s.position}`) +
                    chunk.substring(s.index)
            })
            return chunk
        }

        child.stdout.on("data", chunk => {
            process.stdout.write(lookupSource(chunk.toString()))
        })
        child.stderr.on("data", chunk => {
            process.stderr.write(lookupSource(chunk.toString()))
        })

        return child
    }

    let child = run()
    if (watch) {
        // restart child when target changes
        fs.watchFile(target, () => {
            child.removeAllListeners()
            child.on("exit", () => child = run())
            child.kill("SIGHUP")
        })
    }
}
