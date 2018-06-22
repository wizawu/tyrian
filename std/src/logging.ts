import Chalk from "chalk"

const SimpleDateFormat = java.text.SimpleDateFormat
const SourceMapConsumerV3 = com.google.debugging.sourcemap.SourceMapConsumerV3
const StandardCharsets = java.nio.charset.StandardCharsets
const { Files, Paths } = java.nio.file

export const Color = new Chalk.constructor({ enabled: true })

function getSourceMapConsumer() {
    let consumer = new SourceMapConsumerV3()
    let source = getCallerSource()
    let path = Paths.get(source[0] + ".map")
    if (Files.exists(path)) {
        let text = new java.lang.String(Files.readAllBytes(path), StandardCharsets.UTF_8)
        consumer.parse(text)
        return consumer
    } else {
        return null
    }
}

function getCallerSource() {
    let stacks = java.lang.Thread.currentThread().getStackTrace()
    let scripts: java.lang.StackTraceElement[] = []
    for (let i = 0; i < stacks.length; i++) {
        if (stacks[i].getClassName().startsWith("jdk.nashorn.internal.scripts.Script$")) {
            scripts.push(stacks[i])
        }
    }
    // scripts[0]: here
    // scripts[1]: info/warn/error
    // scripts[2]: caller
    return [scripts[2].getFileName(), scripts[2].getLineNumber()]
}

const sourceMapConsumer = getSourceMapConsumer()

function print(message: string, fd: 1 | 2, level: string, stack: any[]) {
    let fileName = stack[0]
    let lineNumber = stack[1]
    if (sourceMapConsumer) {
        let mapping = sourceMapConsumer.getMappingForLine(stack[1], 1e7)
        fileName = mapping.getOriginalFile()
        lineNumber = mapping.getLineNumber()
    }
    fileName = fileName.split(/[\/\\]/).reverse()[0]

    let time = (new SimpleDateFormat("yyyy/MM/dd HH:mm:ss") as any).format(new java.util.Date())
    let line = `${level} ${time} ${Color.gray(fileName + ":" + lineNumber + ":")} ${message}`
    if (fd === 1) {
        java.lang.System.out.println(line)
    } else {
        java.lang.System.err.println(line)
    }
}

export class Logger {
    static info(message: string) {
        let stack = getCallerSource()
        print(message, 1, Color.blue("[INFO]"), stack)
    }

    static warn(message: string) {
        let stack = getCallerSource()
        print(message, 2, Color.yellow("[WARN]"), stack)
    }

    static error(message: string) {
        let stack = getCallerSource()
        print(message, 2, Color.red("[ERRO]"), stack)
    }
}
