"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var SimpleDateFormat = java.text.SimpleDateFormat;
var SourceMapConsumerV3 = com.google.debugging.sourcemap.SourceMapConsumerV3;
var StandardCharsets = java.nio.charset.StandardCharsets;
var _a = java.nio.file, Files = _a.Files, Paths = _a.Paths;
var chalk = new chalk_1.default.constructor({ enabled: true, level: 3 });
var sourceMapConsumer = getSourceMapConsumer();
function getSourceMapConsumer() {
    var consumer = new SourceMapConsumerV3();
    var source = getCallerSource();
    var path = Paths.get(source[0] + ".map");
    if (Files.exists(path)) {
        var text = new java.lang.String(Files.readAllBytes(path), StandardCharsets.UTF_8);
        consumer.parse(text);
        return consumer;
    }
    else {
        return null;
    }
}
function getCallerSource() {
    var stack = java.lang.Thread.currentThread().getStackTrace()[3];
    return [stack.getFileName(), stack.getLineNumber()];
}
function print(message, fd, level, stack) {
    var fileName = stack[0];
    var lineNumber = stack[1];
    if (sourceMapConsumer) {
        var mapping = sourceMapConsumer.getMappingForLine(stack[1], 1e7);
        fileName = mapping.getOriginalFile();
        lineNumber = mapping.getLineNumber();
    }
    fileName = fileName.split(/[\/\\]/).reverse()[0];
    var time = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(new java.util.Date());
    var line = level + " " + time + " " + chalk.gray(fileName + ":" + lineNumber + ":") + " " + message;
    if (fd === 1) {
        java.lang.System.out.println(line);
    }
    else {
        java.lang.System.err.println(line);
    }
}
var Logger = (function () {
    function Logger() {
    }
    Logger.info = function (message) {
        var stack = getCallerSource();
        print(message, 1, chalk.blueBright("[INFO]"), stack);
    };
    Logger.warn = function (message) {
        var stack = getCallerSource();
        print(message, 2, chalk.yellowBright("[WARN]"), stack);
    };
    Logger.error = function (message) {
        var stack = getCallerSource();
        print(message, 2, chalk.redBright("[ERRO]"), stack);
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logging.js.map