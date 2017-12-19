"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RowMapper = Java.type("org.springframework.jdbc.core.RowMapper");
var ColumnType = (function () {
    function ColumnType() {
    }
    ColumnType.VARCHAR = function (length) {
        return "VARCHAR(" + length + ")";
    };
    ColumnType.BIGINT = "BIGINT";
    ColumnType.BOOL = "BOOL";
    ColumnType.DOUBLE = "DOUBLE";
    ColumnType.JSON = "JSON";
    ColumnType.TEXT = "TEXT";
    return ColumnType;
}());
exports.ColumnType = ColumnType;
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
    Model.prototype.merge = function (json) {
        var _this = this;
        Object.keys(this).forEach(function (key) {
            if (json[key] !== undefined)
                _this[key] = json[key];
        });
        return this;
    };
    return Model;
}());
exports.Model = Model;
exports.rowMapper = new RowMapper(function (resultSet) {
    var json = {};
    for (var i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        var key = resultSet.getMetaData().getColumnLabel(i);
        var type = resultSet.getMetaData().getColumnTypeName(i);
        if (resultSet.getObject(i) == null) {
            json[key] = null;
        }
        else if (type.toUpperCase() === "JSON") {
            json[key] = JSON.parse(resultSet.getString(i));
        }
        else {
            json[key] = resultSet.getObject(i);
        }
    }
    return json;
});
//# sourceMappingURL=model.js.map