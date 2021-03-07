const assert = require("assert")
const { describe, it } = require("mocha")

const parser = require("../../../dist/parser/index")

describe("parser/index", () => {
  it("parseClasses", () => {
    {
      let result = parser.parseClasses([], ["java.lang.String"])
      assert.strictEqual(
        result.classOrInterface(0).classDeclaration().type(0).getText(),
        "java.lang.String"
      )
    }
    {
      let result = parser.parseClasses([], ["java.lang.Char"])
      assert.strictEqual(result, null)
    }
  })
})
