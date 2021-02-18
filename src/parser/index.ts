import antlr from "antlr4"

import * as javap from "./javap"
import { JavapLexer } from "../grammar/JavapLexer"
import { JavapParser } from "../grammar/JavapParser"

const PARSE_CHUNK = 500

interface Counter {
  [_: string]: number
}

export function parse(classPaths: string[], interfaceCount: Counter, classList: string[], typeRoot?: string): boolean {
  const buffer: string[] = []
  for (let i = 0; i < classList.length; i += PARSE_CHUNK) {
    const output = javap.disassemble(classPaths, classList.slice(i, i + PARSE_CHUNK))
    if (output === null) {
      return false
    } else {
      buffer.push(output)
    }
  }

  const input = buffer.join("\n")
  const lexer: antlr.Lexer = new JavapLexer(new antlr.InputStream(input)) as any
  const tokens = new antlr.CommonTokenStream(lexer)
  const parser = new JavapParser(tokens)

  const context = parser.compilationUnit()
  const interfaces = context.classOrInterface()
    .map(it => it.interfaceDeclaration()).filter(it => it)
  interfaces.forEach(it => {
    const className = it.type()[0].packageName().getText() + "." + it.type()[0].Identifier().getText()
    const count = it.interfaceBody().interfaceMember()
      .map(it => it.methodDeclaration()).filter(it => it).length
    interfaceCount[className] = count
  })

  if (typeRoot) {
  }

  return true
}
