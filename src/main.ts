import fs from "fs"
import path from "path"
import { program } from "commander"

import commands from "./commands"

const { name, version } = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, "..", "package.json"),
  "utf-8"
))

program.name(name).version(version)

program.command("env")
  .action((command) => {
    commands.env()
  })

program.command("install")
  .action((command) => {
    commands.install()
  })

program.command("build")
  .action((command) => {
    commands.build()
  })

program.command("run")
  .action((command) => {
    commands.run()
  })

program.parse(process.argv)
