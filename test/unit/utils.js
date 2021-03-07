const assert = require("assert")
const { describe, it } = require("mocha")

const utils = require("../../dist/utils")

describe("utils", () => {
  it("listFilesByExt", () => {
    let result = utils.listFilesByExt("../@types/builtin", ".d.ts")
    assert.deepStrictEqual(result, [ "../@types/builtin/index.d.ts" ])
  })

  it("javap", () => {
    {
      let result = utils.javap([], ["java.lang.String"])
      assert.strictEqual(result.indexOf(`Compiled from "String.java"`), 0)
    }
    {
      let result = utils.javap([], ["java.lang.Char"])
      assert.strictEqual(result, null)
    }
  })
})
