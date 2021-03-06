"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var commander_1 = require("commander");
var commands_1 = __importDefault(require("./commands"));
var _a = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "..", "package.json"), "utf-8")), name = _a.name, version = _a.version;
commander_1.program.name(name).version(version);
commander_1.program.command("init")
    .description("initialize a new project in the current directory")
    .action(function () { return commands_1.default.init(); });
commander_1.program.command("install")
    .description("install dependencies of current project")
    .option("-D", "do not generate .d.ts for Java libraries", false)
    .action(function (command) {
    commands_1.default.install(!command.D);
});
commander_1.program.command("build <entries...>")
    .description("compile one or more typescript entries")
    .option("-c <path>", "generate output in specific directory", ".")
    .option("-w --watch", "watch changes and re-build", false)
    .action(function (entries, _a) {
    var watch = _a.watch, c = _a.c;
    commands_1.default.build(entries, c, watch);
});
commander_1.program.command("run <output> [arguments...]")
    .description("execute one of the build output")
    .option("--inspect-brk [port]", "activate inspector on port (only with graaljs runtime)")
    .option("-w --watch", "watch changes and re-run", false)
    .action(function (output, args, _a) {
    var inspectBrk = _a.inspectBrk, watch = _a.watch;
    commands_1.default.run(output, args, { inspectBrk: inspectBrk, watch: watch });
});
commander_1.program.parse(process.argv);
