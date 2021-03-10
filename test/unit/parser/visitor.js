const assert = require("assert")
const { describe, it } = require("mocha")

const interfaces = require("../../../dist/jdk/interfaces.json")
const parser = require("../../../dist/parser/index")
const visitor = require("../../../dist/parser/visitor")

describe("parser/visitor", () => {
  it("typeToString", () => {
    {
      let context = parser.parseClasses([], ["java.util.ArrayList"])
      let type = context.classOrInterface(0).classDeclaration().type(0)
      let result = visitor.typeToString(type)
      assert.strictEqual(result, "java.util.ArrayList<E>")
    }
    {
      let context = parser.parseClasses([], ["java.lang.Integer"])
      let type = context.classOrInterface(0).classDeclaration().type(0)
      let result = visitor.typeToString(type, true)
      assert.strictEqual(result, "number")
    }
  })

  it("declareNamespaces", () => {
    let context = parser.parseClasses([], ["java.lang.String"])
    let type = context.classOrInterface(0).classDeclaration().type(0)
    let result = visitor.declareNamespaces(type)
    assert.deepStrictEqual(result, ["declare namespace java {\nnamespace lang {\n", "}\n}\n"])
  })

  it("convertMemberModifier", () => {
    assert.strictEqual(visitor.convertMemberModifier("abstract"), "abstract")
    assert.strictEqual(visitor.convertMemberModifier("final"), "")
    assert.strictEqual(visitor.convertMemberModifier("final", true), "readonly")
    assert.strictEqual(visitor.convertMemberModifier("private"), "private")
    assert.strictEqual(visitor.convertMemberModifier("protected"), "protected")
    assert.strictEqual(visitor.convertMemberModifier("public"), "public")
    assert.strictEqual(visitor.convertMemberModifier("static"), "static")
    assert.strictEqual(visitor.convertMemberModifier("volatile"), "")
  })

  it("convertNamespace", () => {
    assert.strictEqual(visitor.convertNamespace("debugger"), "debugger$")
    assert.strictEqual(visitor.convertNamespace("enum"), "enum$")
    assert.strictEqual(visitor.convertNamespace("export"), "export$")
    assert.strictEqual(visitor.convertNamespace("function"), "function$")
    assert.strictEqual(visitor.convertNamespace("in"), "in$")
    assert.strictEqual(visitor.convertNamespace("is"), "is$")
    assert.strictEqual(visitor.convertNamespace("util"), "util")
  })

  it("qualifiedName", () => {
    let context = parser.parseClasses([], ["java.util.function.IntConsumer"])
    let type = context.classOrInterface(0).interfaceDeclaration().type(0)
    {
      let result = visitor.qualifiedName(type, false)
      assert.strictEqual(result, "java.util.function.IntConsumer")
    }
    {
      let result = visitor.qualifiedName(type, true)
      assert.strictEqual(result, "java.util.function$.IntConsumer")
    }
  })

  it("isLambda", () => {
    {
      let context = parser.parseClasses([], ["java.util.function.IntConsumer"])
      let type = context.classOrInterface(0).interfaceDeclaration().type(0)
      let result = visitor.isLambda(interfaces, type)
      assert.strictEqual(result, false)
    }
    {
      let context = parser.parseClasses([], ["java.lang.Runnable"])
      let type = context.classOrInterface(0).interfaceDeclaration().type(0)
      let result = visitor.isLambda(interfaces, type)
      assert.strictEqual(result, true)
    }
  })
})
