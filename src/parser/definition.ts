import chalk from "chalk"
import fs from "fs"
import path from "path"

import { qualifiedName, safeNamespace } from "./common"

export function generate(context: CompilationUnitContext, counter: InterfaceStat, typeRoot: string): boolean {
  fs.mkdirSync(typeRoot, { recursive: true })
  for (const c of context.classOrInterface()) {
    let filename = ""
    const frontBuffer: string[] = []
    const endBuffer: string[] = []
    if (c.classDeclaration()) {
      const classModifier = c.classDeclaration().classModifier()
      const type = c.classDeclaration().type(0)
      const extend = c.classDeclaration().type(1)
      const implement = c.classDeclaration().typeList()
      const classBody = c.classDeclaration().classBody()
      filename = qualifiedName(type) + ".d.ts"
      // declare namespaces
      let nsDeclaration = declareNamespaces(type)
      frontBuffer.push(nsDeclaration[0])
      endBuffer.push(nsDeclaration[1])
      // class header
      let modifier = classModifier.some(it => it.getText() === "abstract") ? "abstract " : ""
      frontBuffer.push(modifier + "class " + header(type, extend, implement?.type()) + " {\n")
      endBuffer.push("}\n")
    } else if (c.interfaceDeclaration()) {
      const type = c.interfaceDeclaration().type(0)
      const extend = c.interfaceDeclaration().type(1)
      const interfaceBody = c.interfaceDeclaration().interfaceBody()
      filename = qualifiedName(type) + ".d.ts"
      // declare namespaces
      let nsDeclaration = declareNamespaces(type)
      frontBuffer.push(nsDeclaration[0])
      endBuffer.push(nsDeclaration[1])
      // interface header
      frontBuffer.push("interface " + header(type, extend) + " {\n")
      endBuffer.push("}\n")
    } else {
      console.error("Cannot find class or interface declaration")
      continue
    }
    if (filename) {
      let content = [...frontBuffer, ...endBuffer.reverse()].join("\n")
      fs.writeFileSync(path.join(typeRoot, filename), content)
      console.debug(chalk.green("Generated " + filename))
    }
  }
  return true
}

function header(type: TypeContext, extend?: TypeContext, implement?: TypeContext[]): string {
  let result = type.Identifier().getText() + typeArgumentsToString(type.typeArguments())
  if (extend) {
    result += " extends " + typeToString(extend)
  }
  if (implement && implement.length) {
    result += " implements " + implement.map(it => typeToString(it)).join(", ")
  }
  return result
}

function typeArgumentsToString(typeArgs: TypeArgumentsContext): string {
  if (!typeArgs) {
    return ""
  } else if (typeArgs.typeArgument().length) {
    let args = typeArgs.typeArgument().map(it => typeArgumentToString(it))
    return "<" + args.join(",") + ">"
  } else {
    return typeArgs.getText()
  }
}

function typeArgumentToString(typeArg: TypeArgumentContext): string {
  if (typeArg.Identifier() && typeArg.type()) {
    return typeArg.Identifier().getText() + " extends " + typeToString(typeArg.type())
  } else if (typeArg.Identifier()) {
    return typeArg.Identifier().getText()
  } else if (typeArg.getChild(1).getText() === "extends") {
    return typeToString(typeArg.type())
  } else {
    return "unknown"
  }
}

function typeToString(type: TypeContext): string {
  return qualifiedName(type, true) + typeArgumentsToString(type.typeArguments())
}

function declareNamespaces(type: TypeContext): [string, string] {
  let result: [string, string] = ["", ""]
  for (let id of type.packageName().Identifier()) {
    let ns = safeNamespace(id.getText())
    result[0] += `declare namespace ${ns} {\n`
    result[1] += "}\n"
  }
  return result
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
