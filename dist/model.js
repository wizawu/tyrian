"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = (function () {
    function Model() {
    }
    Model.prototype.ARRAY = function () {
        return [];
    };
    Model.prototype.BOOLEAN = function () {
        return false;
    };
    Model.prototype.NUMBER = function () {
        return 0;
    };
    Model.prototype.OBJECT = function () {
        return null;
    };
    Model.prototype.STRING = function () {
        return "";
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map