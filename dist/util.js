"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resultSetToJSON(resultSet) {
    var json = {};
    for (var i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        var key = resultSet.getMetaData().getColumnName(i);
        var value = resultSet.getObject(i);
        json[key.toString()] = value;
    }
    return json;
}
exports.resultSetToJSON = resultSetToJSON;
function log(exception) {
    if (exception.message) {
        print(exception.message);
    }
    else if (typeof exception === "string") {
        print(exception);
    }
}
exports.log = log;
//# sourceMappingURL=util.js.map