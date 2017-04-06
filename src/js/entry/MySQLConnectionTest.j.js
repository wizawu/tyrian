"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jasmine = require("jasmine");
var _a = (new Jasmine()).jasmine.currentEnv_, describe = _a.describe, beforeEach = _a.beforeEach, it = _a.it, expect = _a.expect;
describe("class MySQLConnection", function () {
    beforeEach(function () {
        console.log("before");
    });
    it("one", function () {
        expect(1).toEqual(1);
    });
    it("list", function () {
        expect(1).toEqual(2);
    });
});
