const assert = require("assert")
const { describe, it } = require("mocha")

const interfaces = require("../../../dist/jdk/interfaces.json")
const parser = require("../../../dist/parser/index")
const visitor = require("../../../dist/parser/visitor")

describe("parser/visitor", () => {
  it("safeNamespace", () => {
    assert.strictEqual(visitor.safeNamespace("debugger"), "debugger$")
    assert.strictEqual(visitor.safeNamespace("enum"), "enum$")
    assert.strictEqual(visitor.safeNamespace("export"), "export$")
    assert.strictEqual(visitor.safeNamespace("function"), "function$")
    assert.strictEqual(visitor.safeNamespace("in"), "in$")
    assert.strictEqual(visitor.safeNamespace("is"), "is$")
    assert.strictEqual(visitor.safeNamespace("util"), "util")
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
