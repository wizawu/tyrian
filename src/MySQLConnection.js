"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var DriverManager = java.sql.DriverManager;
var String = java.lang.String;
var MySQLConnectionImpl = (function () {
    function MySQLConnectionImpl() {
    }
    MySQLConnectionImpl.prototype.prepareStatement = function (sql, parameters) {
        if (this.connection.isClosed())
            this.connection = DriverManager.getConnection(this.url);
        var statement = this.connection.prepareStatement(sql);
        parameters.forEach(function (parameter, i) { return statement.setObject(i + 1, parameter); });
        return statement;
    };
    MySQLConnectionImpl.prototype.indexName = function (columnNames, unique) {
        return (unique ? "uidx_" : "idx_") + columnNames.map(function (name) { return name.toLowerCase(); }).join("_");
    };
    MySQLConnectionImpl.prototype.ensureTable = function (tableName) {
        this.execute("CREATE TABLE IF NOT EXISTS " + tableName + " (id VARCHAR(64))", []);
    };
    MySQLConnectionImpl.prototype.ensureColumn = function (tableName, columnName, columnType) {
        var columns = this.list("desc " + tableName, []);
        if (columns.some(function (col) { return col.COLUMN_NAME == columnName; }))
            return;
        this.execute("ALTER TABLE " + tableName + " ADD COLUMN " + columnName + " " + columnType, []);
    };
    MySQLConnectionImpl.prototype.ensureIndex = function (tableName, columnNames) {
        var indexName = this.indexName(columnNames, false);
        var indexColumns = columnNames.join(",");
        this.execute("CREATE INDEX IF NOT EXISTS " + indexName + " ON " + tableName + "(" + indexColumns + ")", []);
    };
    MySQLConnectionImpl.prototype.ensureUniqueIndex = function (tableName, columnNames) {
        var indexName = this.indexName(columnNames, true);
        var indexColumns = columnNames.join(",");
        this.execute("CREATE UNIQUE INDEX IF NOT EXISTS " + indexName + " ON " + tableName + "(" + indexColumns + ")", []);
    };
    MySQLConnectionImpl.prototype.one = function (sql, parameters) {
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
    MySQLConnectionImpl.prototype.list = function (sql, parameters) {
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
    MySQLConnectionImpl.prototype.save = function (tableName, obj, primary) {
        var keys = "";
        var values = "";
        var parameters = [];
        Object.keys(obj).forEach(function (key) {
            keys += "," + key;
            values += ",?";
            parameters.push(obj[key]);
        });
        this.connection.setAutoCommit(false);
        try {
            var sql = "DELETE FROM " + tableName + " WHERE " + primary + " = ?";
            this.execute(sql, [obj[primary]]);
            sql = "INSERT INTO " + tableName + "(" + keys.substring(1) + ") VALUES(" + values.substring(1) + ")";
            this.execute(sql, parameters);
            this.connection.commit();
        }
        catch (ex) {
            this.connection.rollback();
        }
        finally {
            this.connection.setAutoCommit(true);
        }
    };
    MySQLConnectionImpl.prototype.execute = function (sql, parameters) {
        var statement = this.prepareStatement(sql, parameters);
        statement.executeUpdate();
        statement.close();
    };
    MySQLConnectionImpl.prototype.close = function () {
        this.connection.close();
    };
    return MySQLConnectionImpl;
}());
exports.MySQLConnectionImpl = MySQLConnectionImpl;
var MySQLConnection = (function (_super) {
    __extends(MySQLConnection, _super);
    function MySQLConnection(options) {
        var _this = _super.call(this) || this;
        _this.url = String.format("jdbc:mysql://%s:%d/%s?user=%s&password=%s&testOnBorrow=true", options.server, options.port, options.database, options.user, options.password);
        _this.connection = DriverManager.getConnection(_this.url);
        return _this;
    }
    return MySQLConnection;
}(MySQLConnectionImpl));
exports.default = MySQLConnection;
