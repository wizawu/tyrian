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
function Table(name) {
    var __Model__ = (function () {
        function __Model__() {
            var _this = this;
            Object.keys(__Model__.columns).forEach(function (key) {
                _this[key] = __Model__.columns[key].init();
            });
        }
        __Model__.prototype.setColumn = function (key, type, init) {
            __Model__.columns[key] = { key: key, type: type, init: init };
        };
        __Model__.prototype.addPrimary = function (key) {
            __Model__.primary.push(key);
        };
        __Model__.setClient = function (client) {
            this.client = client;
            return this;
        };
        __Model__.ensureTable = function (options) {
            var _this = this;
            this.client.execute("\n                CREATE TABLE IF NOT EXISTS " + this.TABLE_NAME + " (\n                    " + this.primary.map(function (key) { return key + " " + _this.columns[key].type + ","; }).join("") + "\n                    PRIMARY KEY (" + this.primary.join(",") + ")\n                )\n                " + (options && options.collate ? " COLLATE " + options.collate : "") + "\n                " + (options && options.engine ? " ENGINE " + options.engine : "") + "\n            ");
            Object.keys(this.columns).forEach(function (key) {
                _this.client.ensureColumn(_this.TABLE_NAME, key, _this.columns[key].type);
            });
        };
        __Model__.ensureIndex = function (columns) {
            this.client.ensureIndex(this.TABLE_NAME, columns);
        };
        __Model__.ensureUniqueIndex = function (columns) {
            this.client.ensureUniqueIndex(this.TABLE_NAME, columns);
        };
        __Model__.ensureFullTextIndex = function (columns) {
            this.client.ensureFullTextIndex(this.TABLE_NAME, columns);
        };
        __Model__.get = function (query) {
            var _a = this.queryToSQL("SELECT * FROM " + this.TABLE_NAME + " WHERE TRUE", query), sql = _a.sql, args = _a.args;
            var row = this.client.queryForObject(sql, args);
            return row ? this.struct(row) : null;
        };
        __Model__.list = function (query) {
            var _this = this;
            var _a = this.queryToSQL("SELECT * FROM " + this.TABLE_NAME + " WHERE TRUE", query), sql = _a.sql, args = _a.args;
            return this.client.query(sql, args).map(function (row) { return _this.struct(row); });
        };
        __Model__.delete = function (query) {
            var _a = this.queryToSQL("DELETE FROM " + this.TABLE_NAME + " WHERE TRUE", query), sql = _a.sql, args = _a.args;
            if (args.length === 0) {
                throw "Cannot delete rows with an empty query";
            }
            else {
                return this.client.update(sql, args);
            }
        };
        __Model__.insert = function (row, options) {
            if (options === void 0) { options = { upsert: false }; }
            var model = this.struct(row);
            var keys = Object.keys(this.columns);
            return this.client.update((options.upsert ? "REPLACE" : "INSERT") + " INTO\n                    " + this.TABLE_NAME + " (" + keys.join(",") + ")\n                    VALUES (" + keys.map(function () { return "?"; }).join(",") + ")\n                ", keys.map(function (key) {
                var value = model[key];
                if (typeof value === "object") {
                    return value === null ? null : JSON.stringify(value);
                }
                else {
                    return value;
                }
            }));
        };
        __Model__.upsert = function (row) {
            return this.insert(row, { upsert: true });
        };
        __Model__.batchInsert = function (rows, options) {
            if (options === void 0) { options = { upsert: false }; }
            if (rows.length === 0)
                return;
            var that = this;
            var keys = Object.keys(this.columns);
            var BatchPreparedStatementSetter = Java.extend(Java.type("org.springframework.jdbc.core.BatchPreparedStatementSetter"), {
                setValues: function (preparedStatement, i) {
                    var model = that.struct(rows[i]);
                    keys.forEach(function (key, j) {
                        var value = model[key];
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
            return this.client.db.batchUpdate((options.upsert ? "REPLACE" : "INSERT") + " INTO\n                    " + this.TABLE_NAME + " (" + keys.join(",") + ")\n                    VALUES (" + keys.map(function () { return "?"; }).join(",") + ")\n                ", new BatchPreparedStatementSetter());
        };
        __Model__.batchUpsert = function (rows) {
            return this.batchInsert(rows, { upsert: true });
        };
        __Model__.struct = function (json) {
            var model = new __Model__();
            Object.keys(__Model__.columns).forEach(function (key) {
                if (json && json[key] !== undefined)
                    model[key] = json[key];
            });
            return model;
        };
        __Model__.queryToSQL = function (sql, query) {
            var args = [];
            Object.keys(query).forEach(function (key) {
                sql += " AND " + key + " = ?";
                args.push(query[key]);
            });
            return { sql: sql, args: args };
        };
        __Model__.TABLE_NAME = name;
        __Model__.columns = {};
        __Model__.primary = [];
        return __Model__;
    }());
    return __Model__;
}
exports.Table = Table;
exports.Column = {
    PRIMARY: function (model, key) {
        model.addPrimary(key);
    },
    BIGINT: function (model, key) {
        model.setColumn(key, "BIGINT", function () { return 0; });
    },
    BOOL: function (model, key) {
        model.setColumn(key, "BOOL", function () { return false; });
    },
    DOUBLE: function (model, key) {
        model.setColumn(key, "DOUBLE", function () { return 0; });
    },
    JSON: function (model, key) {
        model.setColumn(key, "JSON", function () { return null; });
    },
    VARCHAR: function (n) {
        return function (model, key) {
            model.setColumn(key, "VARCHAR(" + n + ")", function () { return ""; });
        };
    },
    UUID: function (model, key) {
        model.setColumn(key, "VARCHAR(40)", function () { return uuid.v4(); });
    },
    TEXT: function (model, key) {
        model.setColumn(key, "TEXT", function () { return ""; });
    },
    TIMESTAMP: function (model, key) {
        model.setColumn(key, "BIGINT", function () { return Date.now(); });
    },
};
//# sourceMappingURL=table.js.map