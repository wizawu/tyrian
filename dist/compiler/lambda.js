"use strict";
exports.__esModule = true;
exports.isLambda = {};
try {
    exports.isLambda = require("./isLambda.js") || {};
}
catch (ex) {
    console.log(ex.message);
}
function addLambda(key) {
    exports.isLambda[key] = true;
}
exports.addLambda = addLambda;
