const assert = require("assert")
const { describe, it } = require("mocha")
const { runCommand } = require("../dist/utils")

describe("utils", () => {
    it("runCommand", () => {
        const output = runCommand("echo", ["-n", "1", "2"]).stdout.toString()
        assert.strictEqual(output, "1 2")
    })
})
