import antlr from "antlr4"

import * as visitor from "./visitor"
import { JavapLexer } from "./javap/JavapLexer"
import { JavapParser } from "./javap/JavapParser"
import { javap } from "../utils"

const PARSE_CHUNK = 500

export function parse(classPaths: string[], counter: InterfaceStat, classList: string[], typeRoot?: string): boolean {
  const context = parseClasses(classPaths, classList.filter(it => !it.startsWith("kotlin.")))
  if (context === null) return false

  const interfaces = context.classOrInterface()
    .map(it => it.interfaceDeclaration()).filter(it => it)
  for (const it of interfaces) {
    const className = visitor.qualifiedName(it.type())
    const count = it.interfaceBody().interfaceMember()
      .filter(it => it.methodDeclaration()).length
    if (it.typeList()) {
      counter[className] = [count, ...it.typeList().type().map(it => visitor.qualifiedName(it))]
    } else {
      counter[className] = [count]
    }
  }
  if (typeRoot) {
    return visitor.generateTsDef(context, counter, typeRoot)
  } else {
    return true
  }
}

export function parseClasses(classPaths: string[], classList: string[]): CompilationUnitContext | null {
  const buffer: string[] = []
  for (let i = 0; i < classList.length; i += PARSE_CHUNK) {
    const output = javap(classPaths, classList.slice(i, i + PARSE_CHUNK))
    if (output === null) {
      return null
    } else {
      buffer.push(output)
    }
  }
  const input = buffer.join("\n")
  const lexer = new JavapLexer(new antlr.InputStream(input))
  const tokens = new antlr.CommonTokenStream(lexer as unknown as antlr.Lexer)
  const parser = new JavapParser(tokens)
  return parser.compilationUnit()
}
