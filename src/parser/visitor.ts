import * as chalk from "colorette"
import fs from "fs"
import path from "path"

const LambdaSuffix = "$$lambda"

export function generateTsDef(context: CompilationUnitContext, ifs: InterfaceStat, typeRoot: string): boolean {
  fs.mkdirSync(typeRoot, { recursive: true })
  const references: string[] = []
  const topNamespaces: Record<string, boolean> = {}
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
      topNamespaces[type.packageName().Identifier(0).getText()] = true
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
          frontBuffer.push("  " + declareConstructor(member.constructorDeclaration(), ifs))
        } else if (member.fieldDeclaration()) {
          frontBuffer.push("  " + declareField(member.fieldDeclaration()))
        } else if (member.methodDeclaration()) {
          frontBuffer.push("  " + declareMethod(member.methodDeclaration(), ifs, true))
        }
      }
    } else if (c.interfaceDeclaration()) {
      const type = c.interfaceDeclaration().type()
      const extend = c.interfaceDeclaration().typeList()
      const interfaceBody = c.interfaceDeclaration().interfaceBody()
      filename = qualifiedName(type) + ".d.ts"
      topNamespaces[type.packageName().Identifier(0).getText()] = true
      // declare namespaces
      const nsDeclaration = declareNamespaces(type)
      frontBuffer.push(nsDeclaration[0])
      endBuffer.push(nsDeclaration[1])
      // generate lambda type
      if (isLambda(ifs, type)) {
        if (interfaceBody.interfaceMember()?.some(it => it.methodDeclaration())) {
          const method = interfaceBody
            .interfaceMember()
            .filter(it => it.methodDeclaration())[0]
            .methodDeclaration()
          frontBuffer.push(
            "interface " +
              type.Identifier().getText() +
              LambdaSuffix +
              typeArgumentsToString(type.typeArguments()) +
              " {\n(" +
              methodArgumentsToString(method.methodArguments(), ifs) +
              ")" +
              ": " +
              methodArgumentToString(method.type(), ifs) +
              "\n}\n"
          )
        } else {
          extend
            .type()
            .filter(it => isLambda(ifs, it))
            .forEach(it => {
              frontBuffer.push(
                "type " +
                  type.Identifier().getText() +
                  LambdaSuffix +
                  typeArgumentsToString(type.typeArguments()) +
                  " = " +
                  qualifiedName(it, true) +
                  LambdaSuffix +
                  typeArgumentsToString(it.typeArguments()) +
                  "\n"
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
          frontBuffer.push("  " + declareMethod(member.methodDeclaration(), ifs))
        }
      }
    } else {
      console.error("Cannot find class or interface declaration")
      continue
    }
    if (filename) {
      const content = [...frontBuffer, ...endBuffer.reverse()].join("\n")
      fs.writeFileSync(path.join(typeRoot, filename), content + lambdaBuffer)
      process.stdout.clearLine(0)
      process.stdout.cursorTo(0)
      process.stdout.write(`Generated lib/@types/${filename}`)
      references.push(filename)
    }
  }
  process.stdout.clearLine(0)
  process.stdout.cursorTo(0)
  fs.writeFileSync(
    path.join(typeRoot, "index.d.ts"),
    references
      .map(it => `/// <reference path="${it}" />`)
      .sort()
      .join("\n")
  )
  console.log(chalk.green("Generated " + path.join(typeRoot, "index.d.ts")))
  fs.writeFileSync(path.join(typeRoot, "namespace.json"), JSON.stringify(topNamespaces, null, 2))
  console.log(chalk.green("Generated " + path.join(typeRoot, "namespace.json")))
  return true
}

export function declareConstructor(constructor: ConstructorDeclarationContext, ifs: InterfaceStat): string {
  let result = ""
  constructor.modifier()?.forEach(it => (result += convertMemberModifier(it.getText()) + " "))
  result += "constructor"
  result += "(" + methodArgumentsToString(constructor.methodArguments(), ifs) + ")"
  return result
}

export function declareField(field: FieldDeclarationContext): string {
  if (field.Identifier().getText() === "constructor") return ""
  let result = ""
  field.modifier()?.forEach(it => (result += convertMemberModifier(it.getText(), true) + " "))
  result += field.Identifier().getText()
  result += ": " + typeToString(field.type())
  return result
}

export function declareMethod(method: MethodDeclarationContext, ifs: InterfaceStat, isClass = false): string {
  let result = ""
  if (isClass) {
    method.modifier()?.forEach(it => (result += convertMemberModifier(it.getText()) + " "))
  }
  result += method.Identifier().getText()
  result += typeArgumentsToString(method.typeArguments())
  result += "(" + methodArgumentsToString(method.methodArguments(), ifs) + ")"
  result += ": " + typeToString(method.type(), true)
  return result
}

function methodArgumentToString(type: TypeContext, ifs: InterfaceStat): string {
  if (isLambda(ifs, type)) {
    return [
      typeToString(type),
      qualifiedName(type, true) + LambdaSuffix + typeArgumentsToString(type.typeArguments()),
    ].join(" | ")
  } else {
    return typeAlias(qualifiedName(type, true))
      .map(it => it + typeArgumentsToString(type.typeArguments()))
      .join(" | ")
  }
}

function methodArgumentsToString(methodArgs: MethodArgumentsContext, ifs: InterfaceStat): string {
  const result: string[] = []
  for (const type of methodArgs.typeList()?.type() || []) {
    result.push("arg" + result.length + ": " + methodArgumentToString(type, ifs))
  }
  if (methodArgs.varargs()) {
    result.push("...vargs: (" + methodArgumentToString(methodArgs.varargs().type(), ifs) + ")[]")
  }
  return result.join(", ")
}

export function header(type: TypeContext, extend?: TypeContext[], implement?: TypeContext[]): string {
  let result = type.Identifier().getText() + typeArgumentsToString(type.typeArguments())
  if (extend && extend.length) {
    result += " extends " + extend.map(it => typeToString(it)).join(", ")
  }
  if (implement && implement.length) {
    result += " implements " + implement.map(it => typeToString(it)).join(", ")
  }
  return result
}

export function typeArgumentsToString(typeArgs: TypeArgumentsContext): string {
  if (!typeArgs) {
    return ""
  } else if (typeArgs.typeArgument().length) {
    const args = typeArgs.typeArgument().map(it => typeArgumentToString(it))
    return (
      "<" +
      args.join(",") +
      ">" +
      (typeArgs
        .arrayBrackets()
        ?.map(it => it.getText())
        .join("") || "")
    )
  } else {
    return typeArgs.getText()
  }
}

function typeArgumentToString(typeArg: TypeArgumentContext): string {
  if (typeArg.getChild(1)?.getText() === "extends") {
    if (typeArg.Identifier()) {
      return (
        typeArg.Identifier().getText() +
        " extends " +
        typeArg
          .type()
          .map(it => typeToString(it))
          .join(" & ")
      )
    } else {
      return typeArg
        .type()
        .map(it => typeToString(it))
        .join(" & ")
    }
  } else if (typeArg.getChild(1)?.getText() === "super") {
    return "unknown"
  } else if (typeArg.type(0)) {
    return typeToString(typeArg.type(0))
  } else {
    return "unknown"
  }
}

export function typeToString(type: TypeContext, alias = false): string {
  if (type.subType()) {
    return "unknown"
  } else if (alias) {
    return typeAlias(qualifiedName(type, true))[0] + typeArgumentsToString(type.typeArguments())
  } else {
    return qualifiedName(type, true) + typeArgumentsToString(type.typeArguments())
  }
}

export function declareNamespaces(type: TypeContext): [string, string] {
  const result: [string, string] = ["", ""]
  for (const id of type.packageName().Identifier()) {
    const ns = convertNamespace(id.getText())
    result[0] += `namespace ${ns} {\n`
    result[1] += "}\n"
  }
  return result[0] ? ["declare " + result[0], result[1]] : result
}

function typeAlias(type: string): string[] {
  switch (type) {
    case "boolean":
      return ["boolean", "java.lang.Boolean"]
    case "byte":
      return ["number", "java.lang.Byte"]
    case "char":
      return ["string", "java.lang.Character"]
    case "double":
      return ["number", "java.lang.Double"]
    case "float":
      return ["number", "java.lang.Float"]
    case "int":
      return ["number", "java.lang.Integer"]
    case "long":
      return ["number", "java.lang.Long"]
    case "short":
      return ["number", "java.lang.Short"]

    case "java.lang.Boolean":
      return ["boolean", "java.lang.Boolean"]
    case "java.lang.Byte":
      return ["number", "java.lang.Byte"]
    case "java.lang.CharSequence":
      return ["string", "java.lang.CharSequence"]
    case "java.lang.Character":
      return ["string", "java.lang.Character"]
    case "java.lang.Double":
      return ["number", "java.lang.Double"]
    case "java.lang.Float":
      return ["number", "java.lang.Float"]
    case "java.lang.Integer":
      return ["number", "java.lang.Integer"]
    case "java.lang.Long":
      return ["number", "java.lang.Long"]
    case "java.lang.Object":
      return ["java.lang.Object", "any"]
    case "java.lang.Short":
      return ["number", "java.lang.Short"]
    case "java.lang.String":
      return ["java.lang.String", "string"]

    default:
      return [type]
  }
}

// Convert member modifier
export function convertMemberModifier(modifier: string, isField = false): string {
  if (modifier === "abstract") return modifier
  if (modifier === "final" && isField) return "readonly"
  if (modifier === "private") return modifier
  if (modifier === "protected") return modifier
  if (modifier === "public") return modifier
  if (modifier === "static") return modifier
  return ""
}

// Append $ to namespace if it is a typescript keyword
export function convertNamespace(namespace: string): string {
  const invalid = ["debugger", "enum", "export", "function", "in", "is", "var"]
  return invalid.indexOf(namespace) < 0 ? namespace : namespace + "$"
}

export function qualifiedName(type: TypeContext, safe = false): string {
  if (safe) {
    const packages =
      type
        .packageName()
        ?.Identifier()
        .map(it => convertNamespace(it.getText())) || []
    return [...packages, type.Identifier().getText()].join(".")
  } else {
    return (type.packageName()?.getText().concat(".") || "") + type.Identifier().getText()
  }
}

// Return if an interface can be represented with a lambda expression
export function isLambda(stat: InterfaceStat, type: TypeContext): boolean {
  let count = 0
  const bfs = [qualifiedName(type)]
  if (bfs[0] === "java.util.function.Consumer") return true
  for (let i = 0; i < bfs.length; i++) {
    const current = bfs[i]
    if (stat[current]) {
      count += stat[current][0]
      stat[current].slice(1).forEach(it => {
        if (bfs.indexOf(it) < 0) bfs.push(it)
      })
    }
  }
  return count === 1
}
