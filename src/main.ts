import { program } from "commander"
import path from "path"

import { PATH } from "./constants"
import * as utils from "./utils"
import commands from "./commands"

const { name, version } = utils.readJSON(path.join(PATH.INSTALL_DIR, "package.json"))
program.name(name).version(version)

program
  .command("init")
  .description("initialize a new project in the current directory")
  .action(() => commands.init())

program
  .command("install")
  .description("install dependencies of current project")
  .option("--offline", "generate lib/@types offline", false)
  .action(command => {
    commands.install(command.offline)
  })

program
  .command("build <entries...>")
  .description("compile one or more typescript entries")
  .option("-c <path>", "generate output in specific directory", ".")
  .option("-w --watch", "watch changes and re-build", false)
  .action((entries, { watch, c }) => {
    commands.build(entries, c, watch)
  })

program
  .command("run <output> [arguments...]")
  .description("execute one of the build output")
  .option("-w --watch", "watch changes and re-run", false)
  .action((output, args, { watch }) => {
    commands.run(output, args, watch)
  })

program.parse(process.argv)
