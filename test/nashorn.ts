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
        assert.isArray($ARG)
        assert.isObject($ENV)
        assert.isDefined(Packages)
        assert.isDefined(Java)
    })

    it("function", () => {
        assert.isFunction(String)
        assert.isFunction(echo)
        assert.isFunction(exit)
        assert.isFunction(load)
        assert.isFunction(loadWithNewGlobal)
        assert.isFunction(quit)
        assert.isFunction(readFully)
        assert.isFunction(readLine)
        assert.isFunction(Java.extend)
        assert.isFunction(Java.from)
        assert.isFunction(Java.to)
        assert.isFunction(Java.type)
    })
})

echo(report.toString())
assert.isOk(report.ok())
