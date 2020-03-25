import { assert } from "chai"
import { describe, it, report } from "lightest"

describe("nashorn", () => {
    it("primitive", () => {
        let b: byte = undefined as any
        let c: char = undefined as any
        let d: double = undefined as any
        let f: float = undefined as any
        let i: int = undefined as any
        let l: long = undefined as any
        let s: short = undefined as any
        assert.isUndefined(b)
        assert.isUndefined(c)
        assert.isUndefined(d)
        assert.isUndefined(f)
        assert.isUndefined(i)
        assert.isUndefined(l)
        assert.isUndefined(s)
    })

    it("variable", () => {
        assert.isDefined(Packages)
        assert.isDefined(Java)
    })

    it("function", () => {
        assert.isFunction(String)
        assert.isFunction(exit)
        assert.isFunction(quit)
        assert.isFunction(Java.extend)
        assert.isFunction(Java.from)
        assert.isFunction(Java.to)
        assert.isFunction(Java.type)
    })
})

console.log(report.toString())
assert.isOk(report.ok())
