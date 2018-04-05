import Chalk from "chalk"

const SimpleDateFormat = java.text.SimpleDateFormat
const SourceMapConsumerV3 = com.google.debugging.sourcemap.SourceMapConsumerV3
const StandardCharsets = java.nio.charset.StandardCharsets
const { Files, Paths } = java.nio.file

const chalk = new Chalk.constructor({ enabled: true, level: 3 })
const sourceMapConsumer = getSourceMapConsumer()

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
    // stack 0: java thread
    // stack 1: here
    // stack 2: info/warn/error
    // stack 3: caller
    const stack = java.lang.Thread.currentThread().getStackTrace()[3]
    return [stack.getFileName(), stack.getLineNumber()]
}

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
    let line = `${level} ${time} ${chalk.gray(fileName + ":" + lineNumber + ":")} ${message}`
    if (fd === 1) {
        java.lang.System.out.println(line)
    } else {
        java.lang.System.err.println(line)
    }
}

export class Logger {
    static info(message: string) {
        let stack = getCallerSource()
        print(message, 1, chalk.blueBright("[INFO]"), stack)
    }

    static warn(message: string) {
        let stack = getCallerSource()
        print(message, 2, chalk.yellowBright("[WARN]"), stack)
    }

    static error(message: string) {
        let stack = getCallerSource()
        print(message, 2, chalk.redBright("[ERRO]"), stack)
    }
}
