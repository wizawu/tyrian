const assert = require("assert")
const fs = require("fs")
const { describe, it } = require("mocha")

const run = require("../../../dist/commands/run")

describe("commands/run", () => {
  it("checkRuntime", () => {
    {
      fs.writeFileSync("package.json", JSON.stringify({
        runtime: {
          graaljs: "/path/to/graaljs",
          nashorn: "/path/to/nashorn",
        }
      }, null, 2))
      let result = run.checkRuntime()
      assert.deepStrictEqual(result, ["graaljs", "/path/to/graaljs"])
    }
    {
      fs.writeFileSync("package.json", JSON.stringify({
        runtime: {
          nashorn: "/path/to/nashorn",
        }
      }, null, 2))
      let result = run.checkRuntime()
      assert.deepStrictEqual(result, ["nashorn", "/path/to/nashorn"])
    }
  })
})
