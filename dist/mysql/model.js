"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = __importStar(require("uuid"));
var Model = (function () {
    function Model(options) {
        var _this = this;
        if (options && options.client && options.table && options.primary) {
            var client_1 = options.client, table_1 = options.table;
            var Row_1 = this.constructor;
            this.BIGINT = (function () { return "BIGINT"; });
            this.BOOL = (function () { return "BOOL"; });
            this.DOUBLE = (function () { return "DOUBLE"; });
            this.JSON = (function () { return "JSON"; });
            this.VARCHAR = function (n) { return "VARCHAR(" + n + ")"; };
            this.UUID = function () { return "VARCHAR(40)"; };
            this.TEXT = function () { return "TEXT"; };
            this.TIMESTAMP = (function () { return "BIGINT"; });
            this.getTableName = function () { return table_1; };
            this.generateTable = function () {
                client_1.ensureTable(table_1, options.primary, _this[options.primary], options.engine, options.collate);
                Object.keys(_this).forEach(function (key) {
                    if (typeof _this[key] !== "function") {
                        client_1.ensureColumn(table_1, key, _this[key]);
                    }
                });
                (options.index || []).forEach(function (columns) { return client_1.ensureIndex(table_1, columns); });
                (options.unique || []).forEach(function (columns) { return client_1.ensureUniqueIndex(table_1, columns); });
                (options.fulltext || []).forEach(function (columns) {
                    return client_1.ensureFullText(table_1, columns.slice(1), columns[0]);
                });
            };
            this.get = function (query) {
                var _a = _this.queryToSQL("SELECT * FROM " + table_1 + " WHERE TRUE", query), sql = _a.sql, args = _a.args;
                var row = client_1.queryForObject(sql, args);
                return row ? new Row_1().merge(row) : null;
            };
            this.list = function (query) {
                var _a = _this.queryToSQL("SELECT * FROM " + table_1 + " WHERE TRUE", query), sql = _a.sql, args = _a.args;
                return client_1.query(sql, args).map(function (row) { return new Row_1().merge(row); });
            };
            this.delete = function (query) {
                var _a = _this.queryToSQL("DELETE FROM " + table_1 + " WHERE TRUE", query), sql = _a.sql, args = _a.args;
                if (args.length === 0) {
                    throw "Cannot delete rows with an empty query";
                }
                else {
                    return client_1.update(sql, args);
                }
            };
            this.insert = function (row, options) {
                if (options === void 0) { options = { upsert: false }; }
                var newRow = new Row_1().merge(row);
                var keys = Object.keys(newRow);
                var values = keys.map(function () { return "?"; }).join(",");
                return client_1.update((options.upsert ? "REPLACE" : "INSERT") + " INTO " + table_1 + "(" + keys.join(",") + ") VALUES(" + values + ")", keys.map(function (key) {
                    var value = newRow[key];
                    if (typeof value === "object") {
                        return value === null ? null : JSON.stringify(value);
                    }
                    else {
                        return value;
                    }
                }));
            };
            this.upsert = function (row) {
                return _this.insert(row, { upsert: true });
            };
            this.batchInsert = function (rows, options) {
                if (options === void 0) { options = { upsert: false }; }
                if (rows.length === 0)
                    return;
                var keys = Object.keys(new Row_1());
                var values = keys.map(function () { return "?"; }).join(",");
                var BatchPreparedStatementSetter = Java.extend(Java.type("org.springframework.jdbc.core.BatchPreparedStatementSetter"), {
                    setValues: function (preparedStatement, i) {
                        var newRow = new Row_1().merge(rows[i]);
                        keys.forEach(function (key, j) {
                            var value = newRow[key];
                            if (typeof value === "object") {
                                preparedStatement.setObject(j + 1, value === null ? null : JSON.stringify(value));
                            }
                            else {
                                preparedStatement.setObject(j + 1, value);
                            }
                        });
                    },
                    getBatchSize: function () {
                        return rows.length;
                    },
                });
                return client_1.db.batchUpdate((options.upsert ? "REPLACE" : "INSERT") + " INTO " + table_1 + "(" + keys.join(",") + ") VALUES(" + values + ")", new BatchPreparedStatementSetter());
            };
            this.batchUpsert = function (rows) {
                return _this.batchInsert(rows, { upsert: true });
            };
        }
    }
    Model.prototype.BIGINT = function () {
        return 0;
    };
    Model.prototype.BOOL = function () {
        return false;
    };
    Model.prototype.DOUBLE = function () {
        return 0;
    };
    Model.prototype.JSON = function () {
        return null;
    };
    Model.prototype.VARCHAR = function (n) {
        return "";
    };
    Model.prototype.UUID = function () {
        return uuid.v4();
    };
    Model.prototype.TEXT = function () {
        return "";
    };
    Model.prototype.TIMESTAMP = function () {
        return Date.now();
    };
    Model.prototype.queryToSQL = function (sql, query) {
        var args = [];
        Object.keys(query).forEach(function (key) {
            sql += " AND " + key + " = ?";
            args.push(query[key]);
        });
        return { sql: sql, args: args };
    };
    Model.prototype.merge = function (row) {
        var _this = this;
        if (!row)
            return this;
        Object.keys(this).forEach(function (key) {
            if (row[key] !== undefined)
                _this[key] = row[key];
        });
        return this;
    };
    Model.prototype.getTableName = function () {
        return "";
    };
    Model.prototype.generateTable = function () { };
    Model.prototype.get = function (query) {
        return null;
    };
    Model.prototype.list = function (query) {
        return [];
    };
    Model.prototype.delete = function (query) { };
    Model.prototype.insert = function (row, options) { };
    Model.prototype.upsert = function (row) { };
    Model.prototype.batchInsert = function (rows, options) { };
    Model.prototype.batchUpsert = function (rows) { };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map