"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function readAs(resultSet) {
    var json = {};
    for (var i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        var key = resultSet.getMetaData().getColumnName(i);
        var value = resultSet.getObject(i);
        json[key.toString()] = value;
    }
    return json;
}
exports.readAs = readAs;
