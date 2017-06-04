"use strict";
exports.__esModule = true;
var chalk = require("chalk");
var fs = require("fs");
var path = require("path");
var source_map_1 = require("source-map");
var child_process_1 = require("child_process");
function default_1(jjsArgs, target, args, watch) {
    target = path.resolve(target);
    var classpath = fs.readdirSync("lib").map(function (jar) { return jar === "@types" ? "" : "lib/" + jar; }).join(":");
    var sourceMap = null;
    if (fs.existsSync(target + ".map")) {
        sourceMap = new source_map_1.SourceMapConsumer(JSON.parse(fs.readFileSync(target + ".map", "utf-8")));
    }
    var run = function () {
        var child = child_process_1.spawn("jjs", jjsArgs.concat(["-cp", classpath, target]).concat(args));
        child.on("exit", function (code) { return process.exit(code); });
        var lookupSource = function (chunk) {
            if (sourceMap === null)
                return chunk;
            var insert = [];
            var regex = new RegExp(target + ":\\d+(:\\d+)?", "g");
            while (true) {
                var match = regex.exec(chunk);
                if (!match)
                    break;
                var position = sourceMap.originalPositionFor({
                    line: parseInt(match[0].split(":")[1]),
                    column: parseInt(match[0].split(":")[2]) || 1e16
                });
                insert.push({
                    index: match.index + match[0].length,
                    position: position.source + ":" + position.line
                });
            }
            insert.reverse().forEach(function (s) {
                chunk = chunk.substring(0, s.index) +
                    chalk.yellow("->" + s.position) +
                    chunk.substring(s.index);
            });
            return chunk;
        };
        child.stdout.on("data", function (chunk) {
            process.stdout.write(lookupSource(chunk.toString()));
        });
        child.stderr.on("data", function (chunk) {
            process.stderr.write(lookupSource(chunk.toString()));
        });
        return child;
    };
    var child = run();
    if (watch) {
        fs.watchFile(target, function () {
            child.removeAllListeners();
            child.on("exit", function () { return child = run(); });
            child.kill("SIGHUP");
        });
    }
}
exports["default"] = default_1;
