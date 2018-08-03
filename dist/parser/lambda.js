"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLambda = {};
try {
    exports.isLambda = require("./isLambda") || {};
}
catch (ex) {
    console.log(ex.message);
}
function addLambda(key, count) {
    if (count === void 0) { count = 1; }
    if (key === "java.lang.Class")
        return;
    exports.isLambda[key] = count;
}
exports.addLambda = addLambda;
