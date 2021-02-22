import antlr from "antlr4"

import { JavapLexer } from "../grammar/JavapLexer"
import { JavapParser } from "../grammar/JavapParser"
import { javap } from "../utils"

const PARSE_CHUNK = 500

export function parse(classPaths: string[], counter: InterfaceCounter, classList: string[], typeRoot?: string): boolean {
  const buffer: string[] = []
  for (let i = 0; i < classList.length; i += PARSE_CHUNK) {
    const output = javap(classPaths, classList.slice(i, i + PARSE_CHUNK))
    if (output === null) {
      return false
    } else {
      buffer.push(output)
    }
  }

  const input = buffer.join("\n")
  const lexer = new JavapLexer(new antlr.InputStream(input))
  const tokens = new antlr.CommonTokenStream(lexer as unknown as antlr.Lexer)
  const parser = new JavapParser(tokens)

  const context: CompilationUnitContext = parser.compilationUnit()
  const interfaces = context.classOrInterface()
    .map(it => it.interfaceDeclaration()).filter(it => it)
  interfaces.forEach(it => {
    const className = qualifiedName(it.type()[0])
    const count = it.interfaceBody().interfaceMember()
      .map(it => it.methodDeclaration()).filter(it => it).length
    if (it.type().length === 1) {
      counter[className] = [count]
    } else {
      counter[className] = [count, qualifiedName(it.type()[1])]
    }
  })

  if (typeRoot) {
  }

  return true
}

function qualifiedName(type: TypeContext) {
  return type.packageName().getText() + "." + type.Identifier().getText()
}
