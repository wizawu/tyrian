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
//# sourceMappingURL=util.js.map