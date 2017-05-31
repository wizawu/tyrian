"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function indexName(table, columns, unique) {
    return table + "_" + (unique ? "u" : "") + "idx_" + columns.join("_").toLowerCase();
}
exports.indexName = indexName;
function resultSetToJSON(resultSet) {
    var json = {};
    for (var i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        var key = resultSet.getMetaData().getColumnName(i);
        json[key] = resultSet.getObject(i);
    }
    return json;
}
exports.resultSetToJSON = resultSetToJSON;
//# sourceMappingURL=util.js.map