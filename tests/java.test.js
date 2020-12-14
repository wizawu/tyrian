const assert = require("assert")
const { describe, it } = require("mocha")
const { javap, parseList, parseJar } = require("../dist/java")

describe("java", () => {
    it("javap", () => {
        let result = javap([], ["java/lang/String", "java/lang/Integer"])
        assert.strictEqual(Object.keys(result).length, 2)
    })

    it("parseList", () => {
        let result = parseList([], "tests/class.list")
        assert.strictEqual(Object.keys(result).length, 2)
    })

    it("parseJar", () => {
        let result = parseJar([], "tests/lib/gson-2.7.jar")
        assert.strictEqual(Object.keys(result).length, 86)
    })
})
