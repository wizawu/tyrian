import chalk from "chalk"
import fs from "fs"
import path from "path"

import { qualifiedName } from "./common"

export function generate(context: CompilationUnitContext, counter: InterfaceStat, typeRoot: string): boolean {
  fs.mkdirSync(typeRoot, { recursive: true })
  for (const c of context.classOrInterface()) {
    const buffer = ""
    let filename = ""
    if (c.classDeclaration()) {
      const classModifier = c.classDeclaration().classModifier()
      const type = c.classDeclaration().type(0)
      const extend = c.classDeclaration().type(1)
      const implement = c.classDeclaration().typeList()
      const classBody = c.classDeclaration().classBody()
      filename = qualifiedName(type) + ".d.ts"
    } else if (c.interfaceDeclaration()) {
      const interfaceModifier = c.interfaceDeclaration().interfaceModifier()
      const type = c.interfaceDeclaration().type(0)
      const extend = c.interfaceDeclaration().type(1)
      const interfaceBody = c.interfaceDeclaration().interfaceBody()
      filename = qualifiedName(type) + ".d.ts"
    } else {
      console.error("Cannot find class or interface declaration")
      continue
    }
    if (filename) {
      fs.writeFileSync(path.join(typeRoot, filename), buffer)
      console.debug(chalk.green("Generated " + filename))
    }
  }
  return true
}

function isLambda(counter: InterfaceStat, className: string): boolean {
  let count = 0
  let current = counter[className]
  while (current) {
    count += current[0]
    if (current[1]) {
      current = counter[current[1]]
    } else {
      break
    }
  }
  return count === 1
}
