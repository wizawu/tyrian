import { assert } from "chai"
import { beforeEach, describe, it, report } from "lightest"

import { Model } from "../src/model"

class Repository extends Model {
    topics = this.ARRAY()
    private = this.BOOLEAN()
    size = this.NUMBER()
    owner = this.OBJECT()
    name = this.STRING()
}

describe("Model", () => {
    let repository

    beforeEach(() => {
        repository = new Repository()
    })

    it("ARRAY", () => {
        assert.deepEqual([], repository.topics)
    })

    it("BOOLEAN", () => {
        assert.deepEqual(false, repository.private)
    })

    it("NUMBER", () => {
        assert.deepEqual(0, repository.size)
    })

    it("OBJECT", () => {
        assert.deepEqual(null, repository.owner)
    })

    it("STRING", () => {
        assert.deepEqual("", repository.name)
    })
})

echo(report.toString())
assert.isOk(report.ok())
