const assert = require("assert")
const { describe, it } = require("mocha")

const init = require("../../../dist/commands/init")

describe("commands/init", () => {
  it("check", () => {
    {
      let result = init.check("node", ["-v"])
      assert.strictEqual(result, true)
    }
    {
      let result = init.check("node", ["-V"])
      assert.strictEqual(result, false)
    }
  })
})
