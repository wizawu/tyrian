import antlr from "antlr4"

import * as definition from "./definition"
import { JavapLexer } from "../grammar/JavapLexer"
import { JavapParser } from "../grammar/JavapParser"
import { javap } from "../utils"
import { qualifiedName } from "./common"

const PARSE_CHUNK = 500

export function parse(classPaths: string[], counter: InterfaceStat, classList: string[], typeRoot?: string): boolean {
  const buffer: string[] = []
  for (let i = 0; i < classList.length; i += PARSE_CHUNK) {
    const output = javap(classPaths, classList.slice(i, i + PARSE_CHUNK))
    if (output === null) {
      return false
    } else {
      buffer.push(output)
    }
  }

  const input = buffer.join("\n") // && require("fs").readFileSync("test.class", "utf-8")
  const lexer = new JavapLexer(new antlr.InputStream(input))
  const tokens = new antlr.CommonTokenStream(lexer as unknown as antlr.Lexer)
  const parser = new JavapParser(tokens)

  const context: CompilationUnitContext = parser.compilationUnit()
  const interfaces = context.classOrInterface()
    .map(it => it.interfaceDeclaration()).filter(it => it)
  for (const it of interfaces) {
    const className = qualifiedName(it.type())
    const count = it.interfaceBody().interfaceMember()
      .filter(it => it.methodDeclaration()).length
    if (it.typeList()) {
      counter[className] = [count, it.typeList().type().map(it => qualifiedName(it))]
    } else {
      counter[className] = [count]
    }
  }

  if (typeRoot) {
    return definition.generate(context, counter, typeRoot)
  } else {
    return true
  }
}
