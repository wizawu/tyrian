"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var JDBCConnection = (function () {
    function JDBCConnection() {
    }
    JDBCConnection.prototype.prepareStatement = function (sql, parameters) {
        if (this.connection.isClosed())
            this.connect();
        var statement = this.connection.prepareStatement(sql);
        parameters.forEach(function (parameter, i) { return statement.setObject(i + 1, parameter); });
        return statement;
    };
    JDBCConnection.prototype.indexName = function (columnNames, unique) {
        return (unique ? "uidx_" : "idx_") + columnNames.map(function (name) { return name.toLowerCase(); }).join("_");
    };
    JDBCConnection.prototype.connect = function () {
        this.connection = this.driver.connect(this.url, new java.util.Properties());
    };
    JDBCConnection.prototype.ensureTable = function (tableName) {
        this.execute("CREATE TABLE IF NOT EXISTS " + tableName + " (id VARCHAR(64))", []);
    };
    JDBCConnection.prototype.ensureColumn = function (tableName, columnName, columnType) {
        if (this.url.startsWith("jdbc:postgresql:")) {
            var info = this.one("\n                SELECT * FROM information_schema.columns\n                WHERE table_name = '" + tableName + "' AND column_name = '" + columnName.toLowerCase() + "'\n            ", []);
            if (info)
                return;
        }
        else {
            var columns = this.list("DESC " + tableName, []);
            if (columns.some(function (col) { return col.COLUMN_NAME == columnName; }))
                return;
        }
        this.execute("ALTER TABLE " + tableName + " ADD COLUMN " + columnName + " " + columnType, []);
    };
    JDBCConnection.prototype.ensureIndex = function (tableName, columnNames) {
        var indexName = this.indexName(columnNames, false);
        var indexColumns = columnNames.join(",");
        this.execute("CREATE INDEX IF NOT EXISTS " + indexName + " ON " + tableName + "(" + indexColumns + ")", []);
    };
    JDBCConnection.prototype.ensureUniqueIndex = function (tableName, columnNames) {
        var indexName = this.indexName(columnNames, true);
        var indexColumns = columnNames.join(",");
        this.execute("CREATE UNIQUE INDEX IF NOT EXISTS " + indexName + " ON " + tableName + "(" + indexColumns + ")", []);
    };
    JDBCConnection.prototype.one = function (sql, parameters) {
        var statement = this.prepareStatement("SELECT 0", []);
        try {
            statement.execute();
        }
        catch (ex) {
        }
        finally {
            statement.close();
        }
        var result = null;
        statement = this.prepareStatement(sql, parameters);
        try {
            var resultSet = statement.executeQuery();
            if (resultSet.next())
                result = util_1.resultSetToJSON(resultSet);
            resultSet.close();
        }
        finally {
            statement.close();
        }
        return result;
    };
    JDBCConnection.prototype.list = function (sql, parameters) {
        var statement = this.prepareStatement("SELECT 0", []);
        try {
            statement.execute();
        }
        catch (ex) {
        }
        finally {
            statement.close();
        }
        var result = [];
        statement = this.prepareStatement(sql, parameters);
        try {
            var resultSet = statement.executeQuery();
            while (resultSet.next())
                result.push(util_1.resultSetToJSON(resultSet));
            resultSet.close();
        }
        finally {
            statement.close();
        }
        return result;
    };
    JDBCConnection.prototype.save = function (tableName, obj, primary) {
        var exists = !!this.one("SELECT * FROM " + tableName + " WHERE " + primary + " = ?", [obj[primary]]);
        if (exists) {
            this.execute("DELETE FROM " + tableName + " WHERE " + primary + " = ?", [obj[primary]]);
        }
        var keys = Object.keys(obj).join(",");
        var values = Object.keys(obj).map(function () { return "?"; }).join(",");
        var parameters = Object.keys(obj).map(function (key) { return obj[key]; });
        this.execute("INSERT INTO " + tableName + "(" + keys + ") VALUES(" + values + ")", parameters);
    };
    JDBCConnection.prototype.execute = function (sql, parameters) {
        var statement = this.prepareStatement(sql, parameters);
        statement.executeUpdate();
        statement.close();
    };
    JDBCConnection.prototype.close = function () {
        this.connection.close();
    };
    return JDBCConnection;
}());
exports.default = JDBCConnection;
