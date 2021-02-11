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
  .option("-D", "do not generate typescript definitions for lib/*.jar", false)
  .action(command => {
    commands.install(!command.D)
  })

program.command("build <entries...>")
  .description("compile one or more typescript entries")
  .option("-d", "generate output in specific directory", process.cwd())
  .option("-w --watch", "watch changes and re-build", false)
  .action((entries, { watch, d: outDir }) => {
    commands.build(entries, outDir, watch)
  })

program.command("run <output> [arguments...]")
  .description("execute one of the build output")
  .option("-w --watch", "watch changes and re-run", false)
  .action((output, args, { watch }) => {
    commands.run(output, args, watch)
  })

program.parse(process.argv)
