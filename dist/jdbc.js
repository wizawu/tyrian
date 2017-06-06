"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var JDBCClient = (function () {
    function JDBCClient() {
    }
    JDBCClient.prototype.get = function (bucket, key) {
        if (!this.one("SHOW TABLES LIKE ?", [bucket]))
            return null;
        var record = this.one("\n            SELECT *, expires_at - " + this.SQL_UNIX_TIMESTAMP + " as ttl\n            FROM " + bucket + " WHERE key_ = ?", [key]);
        if (record === null)
            return null;
        if (typeof record.ttl === "number" && record.ttl <= 0) {
            this.execute("DELETE FROM " + bucket + " WHERE " + this.SQL_UNIX_TIMESTAMP + " >= expires_at");
            return null;
        }
        return record[record.type + "_"];
    };
    JDBCClient.prototype.getJSON = function (bucket, key) {
        var value = this.get(bucket, key);
        return value === null ? null : JSON.parse(value);
    };
    JDBCClient.prototype.setInt = function (bucket, key, value, ttl) {
        this.setByType(bucket, "int", key, value, ttl);
    };
    JDBCClient.prototype.setFloat = function (bucket, key, value, ttl) {
        this.setByType(bucket, "float", key, value, ttl);
    };
    JDBCClient.prototype.setString = function (bucket, key, value, ttl) {
        this.setByType(bucket, "string", key, value, ttl);
    };
    JDBCClient.prototype.setJSON = function (bucket, key, json, ttl) {
        this.setByType(bucket, "string", key, JSON.stringify(json), ttl);
    };
    JDBCClient.prototype.setBlob = function (bucket, key, data, ttl) {
        this.setByType(bucket, "blob", key, data, ttl);
    };
    JDBCClient.prototype.ensureTable = function (table, pkey, type) {
        this.execute("\n            CREATE TABLE IF NOT EXISTS " + table + " (\n                " + pkey + " " + type + " PRIMARY KEY\n            ) " + this.defaultEngine + "\n        ");
    };
    JDBCClient.prototype.ensureColumn = function (table, column, type) {
        var columns = this.list("DESC " + table);
        if (columns.some(function (col) { return col.COLUMN_NAME === column; }))
            return;
        this.execute("ALTER TABLE " + table + " ADD COLUMN " + column + " " + type);
    };
    JDBCClient.prototype.ensureIndex = function (table, columns) {
        var index = util_1.indexName(table, columns, false);
        var indexes = this.list("SHOW INDEX FROM " + table);
        if (indexes.some(function (idx) { return idx.INDEX_NAME === index; }))
            return;
        this.execute("CREATE INDEX " + index + " ON " + table + "(" + columns.join(",") + ")");
    };
    JDBCClient.prototype.ensureUniqueIndex = function (table, columns) {
        var index = util_1.indexName(table, columns, true);
        var indexes = this.list("SHOW INDEX FROM " + table);
        if (indexes.some(function (idx) { return idx.INDEX_NAME === index; }))
            return;
        this.execute("CREATE UNIQUE INDEX " + index + " ON " + table + "(" + columns.join(",") + ")");
    };
    JDBCClient.prototype.one = function (sql, parameters) {
        var result = null;
        var statement = this.prepareStatement(sql, parameters);
        var resultSet = statement.executeQuery();
        if (resultSet.next())
            result = util_1.resultSetToJSON(resultSet);
        resultSet.close();
        statement.close();
        return result;
    };
    JDBCClient.prototype.list = function (sql, parameters) {
        var result = [];
        var statement = this.prepareStatement(sql, parameters);
        var resultSet = statement.executeQuery();
        while (resultSet.next())
            result.push(util_1.resultSetToJSON(resultSet));
        resultSet.close();
        statement.close();
        return result;
    };
    JDBCClient.prototype.insert = function (table, object) {
        var keys = Object.keys(object).join(",");
        var values = Object.keys(object).map(function () { return "?"; }).join(",");
        this.execute("INSERT INTO " + table + "(" + keys + ") VALUES(" + values + ")", Object.keys(object).map(function (key) { return object[key]; }));
    };
    JDBCClient.prototype.upsert = function (table, object) {
        var keys = Object.keys(object).join(",");
        var values = Object.keys(object).map(function () { return "?"; }).join(",");
        this.execute("REPLACE INTO " + table + "(" + keys + ") VALUES(" + values + ")", Object.keys(object).map(function (key) { return object[key]; }));
    };
    JDBCClient.prototype.execute = function (sql, parameters) {
        var statement = this.prepareStatement(sql, parameters);
        statement.executeUpdate();
        statement.close();
    };
    JDBCClient.prototype.delete = function (bucket_or_table, key) {
        var pkey = "";
        var indexes = this.list("SHOW INDEX FROM " + bucket_or_table);
        indexes.forEach(function (index) {
            if (index.INDEX_NAME === "PRIMARY")
                pkey = index.COLUMN_NAME;
        });
        this.execute("DELETE FROM " + bucket_or_table + " WHERE " + pkey + " = ?", [key]);
    };
    JDBCClient.prototype.close = function () {
        this.connection.close();
    };
    JDBCClient.prototype.prepareStatement = function (sql, parameters) {
        if (this.connection.isClosed())
            this.connect();
        var statement = this.connection.prepareStatement(sql);
        if (parameters) {
            parameters.forEach(function (parameter, i) { return statement.setObject(i + 1, parameter); });
        }
        return statement;
    };
    JDBCClient.prototype.setByType = function (bucket, type, key, value, ttl) {
        this.execute("\n            CREATE TABLE IF NOT EXISTS " + bucket + " (\n                key_ VARCHAR(255) PRIMARY KEY,\n                int_ BIGINT,\n                float_ DOUBLE,\n                string_ TEXT,\n                blob_ LONGBLOB,\n                type TEXT,\n                timestamp BIGINT,\n                expires_at BIGINT,\n                INDEX " + bucket + "_idx_expires_at (expires_at)\n            ) " + this.defaultEngine + "\n        ");
        var keys = "key_, " + type + "_, type, timestamp, expires_at";
        var expires_at = ttl === undefined ? "NULL" : this.SQL_UNIX_TIMESTAMP + " + " + ttl * 1e6;
        var values = "?, ?, ?, " + this.SQL_UNIX_TIMESTAMP + ", " + expires_at;
        this.execute("REPLACE INTO " + bucket + "(" + keys + ") VALUES(" + values + ")", [key, value, type]);
    };
    return JDBCClient;
}());
exports.JDBCClient = JDBCClient;
//# sourceMappingURL=jdbc.js.map