"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLambda = {};
try {
    exports.isLambda = require("./isLambda") || {};
}
catch (ex) {
    console.log(ex.message);
}
function addLambda(key) {
    if (key === "java.lang.Class")
        return;
    exports.isLambda[key] = true;
}
exports.addLambda = addLambda;
