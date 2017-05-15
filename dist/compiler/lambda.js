"use strict";
exports.__esModule = true;
var fs = require("fs");
exports.isLambda = {};
function addLambda(key) {
    exports.isLambda[key] = true;
}
exports.addLambda = addLambda;
function addLambdaToFile(file, key) {
    delete require.cache[file];
    var isLambda = require(file).isLambda || {};
    if (!isLambda[key]) {
        fs.appendFileSync(file, "\nmodule.exports.isLambda = module.exports.isLambda || {}\nmodule.exports.isLambda[\"" + key + "\"] = true\n");
    }
}
exports.addLambdaToFile = addLambdaToFile;
