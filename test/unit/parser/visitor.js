const assert = require("assert")
const { describe, it } = require("mocha")

const interfaces = require("../../../dist/jdk/interfaces.json")
const parser = require("../../../dist/parser/index")
const visitor = require("../../../dist/parser/visitor")

describe("parser/visitor", () => {
  it("declareConstructor", () => {
    let context = parser.parseClasses([], ["java.util.concurrent.atomic.AtomicLong"])
    let member = context.classOrInterface(0).classDeclaration().classBody().classMember(1)
    let result = visitor.declareConstructor(member.constructorDeclaration(), interfaces)
    assert.strictEqual(result, "public constructor(arg0: number | java.lang.Long)")
  })

  it("declareField", () => {
    let context = parser.parseClasses([], ["java.util.Random"])
    let member = context.classOrInterface(0).classDeclaration().classBody().classMember(0)
    let result = visitor.declareField(member.fieldDeclaration())
    assert.strictEqual(result, "static readonly serialVersionUID: long")
  })

  it("declareMethod", () => {
    let context = parser.parseClasses([], ["java.nio.file.Path"])
    let member = context.classOrInterface(0).interfaceDeclaration().interfaceBody().interfaceMember(0)
    let result = visitor.declareMethod(member.methodDeclaration(), interfaces, false)
    assert.strictEqual(
      result,
      "of(arg0: java.lang.String | string, ...vargs: (java.lang.String | string)[]): java.nio.file.Path"
    )
  })

  it("header", () => {
    let context = parser.parseClasses([], ["java.nio.ByteBuffer"])
    let declaration = context.classOrInterface(0).classDeclaration()
    let result = visitor.header(declaration.type(0), [declaration.type(1)], declaration.typeList().type())
    assert.strictEqual(
      result,
      "ByteBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.ByteBuffer>"
    )
  })

  it("typeArgumentsToString", () => {
    {
      let context = parser.parseClasses([], ["java.lang.String"])
      let typeArgs = context.classOrInterface(0).classDeclaration().type(0).typeArguments()
      let result = visitor.typeArgumentsToString(typeArgs)
      assert.strictEqual(result, "")
    }
    {
      let context = parser.parseClasses([], ["java.util.EventListenerProxy"])
      let typeArgs = context.classOrInterface(0).classDeclaration().type(0).typeArguments()
      let result = visitor.typeArgumentsToString(typeArgs)
      assert.strictEqual(result, "<T extends java.util.EventListener>")
    }
    {
      let context = parser.parseClasses([], ["java.util.ArrayList"])
      let typeArgs = context.classOrInterface(0).classDeclaration().type(0).typeArguments()
      let result = visitor.typeArgumentsToString(typeArgs)
      assert.strictEqual(result, "<E>")
    }
  })

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
