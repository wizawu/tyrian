import { assert } from "chai"
import { describe, it, report } from "lightest"

import "../src/index"

describe("Node Polyfill", () => {
    it("console", () => {
        try {
            console.log("log")
            console.error("error")
        } catch (ignored) {
            assert.fail()
        }
    })

    it("setTimeout", () => {
        let x = 0
        setTimeout(() => x = x + 1, 1000)
        java.lang.Thread.sleep(500)
        assert.strictEqual(x, 0)
        java.lang.Thread.sleep(500)
        assert.strictEqual(x, 1)
    })

    it("clearTimeout", () => {
        let x = 0
        let timer = setTimeout(() => x = x + 1, 1000)
        java.lang.Thread.sleep(500)
        assert.strictEqual(x, 0)
        clearTimeout(timer)
        java.lang.Thread.sleep(500 + 100)
        assert.strictEqual(x, 0)
    })

    function some(array, test) {
        for (let i = 0; i < array.length; i++) {
            if (test(array[i])) return true
        }
        return false
    }

    it("crypto.getRandomValues Int8Array", () => {
        let array = new Int8Array(100)
        while (true) {
            crypto.getRandomValues(array)
            if (some(array, x => x > 127 || x < -128)) assert.fail()
            if (some(array, x => x > 64) && some(array, x => x < -64)) break
        }
    })

    it("crypto.getRandomValues Uint8Array", () => {
        let array = new Uint8Array(100)
        while (true) {
            crypto.getRandomValues(array)
            if (some(array, x => x > 255 || x < 0)) assert.fail()
            if (some(array, x => x > 128)) break
        }
    })

    it("crypto.getRandomValues Int16Array", () => {
        let array = new Int16Array(100)
        while (true) {
            crypto.getRandomValues(array)
            if (some(array, x => x > Math.pow(2, 15) - 1 || x < -Math.pow(2, 15))) assert.fail()
            if (some(array, x => x > Math.pow(2, 14)) && some(array, x => x < -Math.pow(2, 14))) break
        }
    })

    it("crypto.getRandomValues Uint16Array", () => {
        let array = new Uint16Array(100)
        while (true) {
            crypto.getRandomValues(array)
            if (some(array, x => x > Math.pow(2, 16) - 1 || x < 0)) assert.fail()
            if (some(array, x => x > Math.pow(2, 15))) break
        }
    })

    it("crypto.getRandomValues Int32Array", () => {
        let array = new Int32Array(100)
        while (true) {
            crypto.getRandomValues(array)
            if (some(array, x => x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31))) assert.fail()
            if (some(array, x => x > Math.pow(2, 30)) && some(array, x => x < -Math.pow(2, 30))) break
        }
    })

    it("crypto.getRandomValues Uint32Array", () => {
        let array = new Uint32Array(100)
        while (true) {
            crypto.getRandomValues(array)
            if (some(array, x => x > Math.pow(2, 32) - 1 || x < 0)) assert.fail()
            if (some(array, x => x > Math.pow(2, 31))) break
        }
    })
})

echo(report.toString())
assert.isOk(report.ok())
