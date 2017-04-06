import * as Jasmine from "jasmine"

const { describe, beforeEach, it, expect } = (new Jasmine()).jasmine.currentEnv_

describe("class MySQLConnection", () => {
    beforeEach(() => {
        console.log("before")
    })

    it("one", () => {
        expect(1).toEqual(1)
    })

    it("list", () => {
        expect(1).toEqual(2)
    })
})