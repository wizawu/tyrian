import chalk from "chalk"
import fs from "fs"
import path from "path"

import { isLambda, qualifiedName, safeNamespace, memberModifier, typeAlias } from "./common"

const LambdaSuffix = "$$lambda"

export function generate(context: CompilationUnitContext, ifs: InterfaceStat, typeRoot: string): boolean {
  fs.mkdirSync(typeRoot, { recursive: true })
  for (const c of context.classOrInterface()) {
    let filename = ""
    const frontBuffer: string[] = []
    const endBuffer: string[] = []
    const lambdaBuffer = ""
    if (c.classDeclaration()) {
      const classModifier = c.classDeclaration().classModifier()
      const type = c.classDeclaration().type(0)
      const extend = c.classDeclaration().type(1)
      const implement = c.classDeclaration().typeList()
      const classBody = c.classDeclaration().classBody()
      filename = qualifiedName(type) + ".d.ts"
      // declare namespaces
      const nsDeclaration = declareNamespaces(type)
      frontBuffer.push(nsDeclaration[0])
      endBuffer.push(nsDeclaration[1])
      // class header
      const modifier = classModifier.some(it => it.getText() === "abstract") ? "abstract " : ""
      frontBuffer.push(modifier + "class " + header(type, extend && [extend], implement?.type()) + " {")
      endBuffer.push("}\n")
      // generate members
      for (const member of classBody.classMember()) {
        if (member.constructorDeclaration()) {
          frontBuffer.push("  " + declareConstructor(member.constructorDeclaration()))
        } else if (member.fieldDeclaration()) {
          frontBuffer.push("  " + declareField(member.fieldDeclaration()))
        } else if (member.methodDeclaration()) {
          frontBuffer.push("  " + declareMethod(member.methodDeclaration(), true))
        }
      }
    } else if (c.interfaceDeclaration()) {
      const type = c.interfaceDeclaration().type()
      const extend = c.interfaceDeclaration().typeList()
      const interfaceBody = c.interfaceDeclaration().interfaceBody()
      filename = qualifiedName(type) + ".d.ts"
      // declare namespaces
      const nsDeclaration = declareNamespaces(type)
      frontBuffer.push(nsDeclaration[0])
      endBuffer.push(nsDeclaration[1])
      // generate lambda type
      if (isLambda(ifs, type)) {
        if (interfaceBody.interfaceMember()?.some(it => it.methodDeclaration())) {
          const method = interfaceBody.interfaceMember().filter(it => it.methodDeclaration())[0].methodDeclaration()
          frontBuffer.push(
            "interface " + type.Identifier().getText() + LambdaSuffix + typeArgumentsToString(type.typeArguments()) +
            " {\n(" + methodArgumentsToString(method.methodArguments()) + ")" +
            ": " + typeToString(method.type()) + "\n}\n"
          )
        } else {
          extend.type().filter(it => isLambda(ifs, it)).forEach(it => {
            frontBuffer.push(
              "type " + type.Identifier().getText() + LambdaSuffix + typeArgumentsToString(type.typeArguments()) +
              " = " + qualifiedName(it, true) + LambdaSuffix + typeArgumentsToString(it.typeArguments()) + "\n"
            )
          })
        }
      }
      // interface header
      frontBuffer.push("interface " + header(type, extend?.type()) + " {")
      endBuffer.push("}\n")
      // generate members
      for (const member of interfaceBody.interfaceMember()) {
        if (member.fieldDeclaration()) {
          frontBuffer.push("  " + declareField(member.fieldDeclaration()))
        } else if (member.methodDeclaration()) {
          frontBuffer.push("  " + declareMethod(member.methodDeclaration()))
        }
      }
    } else {
      console.error("Cannot find class or interface declaration")
      continue
    }
    if (filename) {
      const content = [...frontBuffer, ...endBuffer.reverse()].join("\n")
      fs.writeFileSync(path.join(typeRoot, filename), content + lambdaBuffer)
      console.debug(chalk.green("Generated " + filename))
    }
  }
  return true
}

function declareConstructor(constructor: ConstructorDeclarationContext): string {
  let result = ""
  constructor.modifier()?.forEach(it => result += memberModifier(it.getText()) + " ")
  result += "constructor"
  result += "(" + methodArgumentsToString(constructor.methodArguments()) + ")"
  return result
}

function declareField(field: FieldDeclarationContext): string {
  let result = ""
  field.modifier()?.forEach(it => result += memberModifier(it.getText(), true) + " ")
  result += field.Identifier().getText()
  result += ": " + typeToString(field.type())
  return result
}

function declareMethod(method: MethodDeclarationContext, isClass = false): string {
  let result = ""
  if (isClass) {
    method.modifier()?.forEach(it => result += memberModifier(it.getText()) + " ")
  }
  result += method.Identifier().getText()
  result += typeArgumentsToString(method.typeArguments())
  result += "(" + methodArgumentsToString(method.methodArguments()) + ")"
  result += ": " + typeToString(method.type(), true)
  return result
}

function methodArgumentsToString(methodArgs: MethodArgumentsContext): string {
  const result: string[] = []
  for (const type of (methodArgs.typeList()?.type() || [])) {
    result.push("arg" + result.length + ": " + typeToString(type))
  }
  if (methodArgs.varargs()) {
    result.push("...arg" + result.length + ": " + typeToString(methodArgs.varargs().type()) + "[]")
  }
  return result.join(", ")
}

function header(type: TypeContext, extend?: TypeContext[], implement?: TypeContext[]): string {
  let result = type.Identifier().getText() + typeArgumentsToString(type.typeArguments())
  if (extend && extend.length) {
    result += " extends " + extend.map(it => typeToString(it)).join(", ")
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
    const args = typeArgs.typeArgument().map(it => typeArgumentToString(it))
    return "<" + args.join(",") + ">" + (typeArgs.arrayBrackets()?.map(it => it.getText()).join("") || "")
  } else {
    return typeArgs.getText()
  }
}

function typeArgumentToString(typeArg: TypeArgumentContext): string {
  if (typeArg.getChild(1)?.getText() === "extends") {
    if (typeArg.Identifier()) {
      return typeArg.Identifier().getText() + " extends " + typeToString(typeArg.type())
    } else {
      return typeToString(typeArg.type())
    }
  } else if (typeArg.getChild(1)?.getText() === "super") {
    return "unknown"
  } else if (typeArg.type()) {
    return typeToString(typeArg.type())
  } else {
    return "unknown"
  }
}

function typeToString(type: TypeContext, alias = false): string {
  if (type.subType()) {
    return "unknown"
  } else if (alias) {
    return typeAlias(qualifiedName(type, true))[0] + typeArgumentsToString(type.typeArguments())
  } else {
    return qualifiedName(type, true) + typeArgumentsToString(type.typeArguments())
  }
}

function declareNamespaces(type: TypeContext): [string, string] {
  const result: [string, string] = ["", ""]
  for (const id of type.packageName().Identifier()) {
    const ns = safeNamespace(id.getText())
    result[0] += `namespace ${ns} {\n`
    result[1] += "}\n"
  }
  return result[0] ? ["declare " + result[0], result[1]] : result
}
