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
  .action(() => {
    if (!commands.env()) {
      process.exit(ErrorCode.BROKEN_ENV)
    }
  })

program.command("install")
  .option("-D", "do not generate typescript definitions for lib/*.jar")
  .action(command => {
    commands.install(!command.D)
  })

program.command("build")
  .action(command => {
    commands.build()
  })

program.command("run <output> [arguments...]")
  .option("-w --watch", "watch changes and re-run")
  .action((output, args, { watch }) => {
    commands.run(output, args, !!watch)
  })

program.parse(process.argv)
