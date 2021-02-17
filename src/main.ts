import fs from "fs"
import path from "path"
import { program } from "commander"

import commands from "./commands"
import { code as ErrorCode } from "./errors"

const { name, version } = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, "..", "package.json"),
  "utf-8"
))

program.name(name).version(version)

program.command("env")
  .description("check all prerequisites of " + name)
  .action(() => {
    if (!commands.env()) {
      process.exit(ErrorCode.BROKEN_ENV)
    }
  })

program.command("install")
  .description("install dependencies of current project")
  .option("-D", "do not generate .d.ts for Java libraries", false)
  .action(command => {
    commands.install(!command.D)
  })

program.command("build <entries...>")
  .description("compile one or more typescript entries")
  .option("-c", "generate output in specific directory", process.cwd())
  .option("-w --watch", "watch changes and re-build", false)
  .action((entries, { watch, c: outDir }) => {
    commands.build(entries, outDir, watch)
  })

program.command("run <output> [arguments...]")
  .description("execute one of the build output")
  .option("--inspect <host:port>", "activate inspector on host:port")
  .option("-w --watch", "watch changes and re-run", false)
  .action((output, args, { inspect, watch }) => {
    commands.run(output, args, { inspect, watch })
  })

program.parse(process.argv)
