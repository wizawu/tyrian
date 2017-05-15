"use strict";
exports.__esModule = true;
var fs = require("fs");
exports.isLambda = {};
try {
    exports.isLambda = require("../../@types/isLambda.js") || {};
}
catch (ex) {
    console.log(ex.message);
}
function addLambda(key) {
    exports.isLambda[key] = true;
}
exports.addLambda = addLambda;
function addLambdaToFile(file, key) {
    delete require.cache[file];
    var isLambda = require(file) || {};
    if (!isLambda[key]) {
        fs.appendFileSync(file, "module.exports[\"" + key + "\"] = true\n");
    }
}
exports.addLambdaToFile = addLambdaToFile;
