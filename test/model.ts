import { assert } from "chai"
import { beforeEach, describe, it, report } from "lightest"

import { Model, ColumnType } from "../src/model"

class Repository extends Model {
    topics = this.ARRAY()
    private = this.BOOLEAN()
    size = this.NUMBER()
    owner = this.OBJECT()
    name = this.STRING()
}

describe("ColumnType", () => {
    it("VARCHAR", () => {
        assert.deepEqual("VARCHAR(64)", ColumnType.VARCHAR(64))
    })
})

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

    it("from", () => {
        let repository = new Repository().from({
            topics: ["z", "x", "c"],
            private: true,
            size: 10,
            owner: { url: "https://" },
            name: "wizawu",
            extra: "no",
        }) as Repository
        assert.deepEqual(["z", "x", "c"], repository.topics)
        assert.deepEqual(true, repository.private)
        assert.deepEqual(10, repository.size)
        assert.deepEqual("https://", repository.owner.url)
        assert.deepEqual("wizawu", repository.name)
        assert.isUndefined((repository as any).extra)
    })
})

echo(report.toString())
assert.isOk(report.ok())
