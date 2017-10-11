"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JdbcTemplate = org.springframework.jdbc.core.JdbcTemplate;
var MysqlDataSource = com.mysql.cj.jdbc.MysqlDataSource;
var RowMapper = Java.type("org.springframework.jdbc.core.RowMapper");
exports.BIGINT = "BIGINT";
exports.BOOL = "BOOL";
exports.TEXT = "TEXT";
exports.VARCHAR = function (length) { return "VARCHAR(" + length + ")"; };
exports.mapRow = new RowMapper({
    mapRow: function (resultSet) {
        var json = {};
        for (var i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
            var key = resultSet.getMetaData().getColumnName(i);
            var type = resultSet.getMetaData().getColumnTypeName(i);
            if (type.toUpperCase() === "JSON") {
                json[key] = JSON.parse(resultSet.getString(i));
            }
            else {
                json[key] = resultSet.getObject(i);
            }
        }
        return json;
    }
});
var Client = (function () {
    function Client(options) {
        var host = options.host, port = options.port, database = options.database, user = options.user, password = options.password;
        var url = "jdbc:mysql://" + host + ":" + port + "/" + database + "?user=" + user + "&password=" + password;
        url += "&characterEncoding=" + (options.characterEncoding || "UTF-8");
        if (options.autoReconnect !== undefined) {
            url += "&autoReconnect=" + options.autoReconnect;
        }
        if (options.logger !== undefined) {
            url += "&logger=" + options.logger;
        }
        if (options.profileSQL !== undefined) {
            url += "&profileSQL=" + options.profileSQL;
        }
        if (options.rewriteBatchedStatements !== undefined) {
            url += "&rewriteBatchedStatements=" + options.rewriteBatchedStatements;
        }
        if (options.testOnBorrow !== undefined) {
            url += "&testOnBorrow=" + options.testOnBorrow;
        }
        if (options.useSSL !== undefined) {
            url += "&useSSL=" + options.useSSL;
        }
        if (options.useServerPrepStmts !== undefined) {
            url += "&useServerPrepStmts=" + options.useServerPrepStmts;
        }
        var dataSource = new MysqlDataSource();
        dataSource.setURL(url);
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    Client.prototype.ensureTable = function (table, pkey, type) {
        this.jdbcTemplate.execute("\n            CREATE TABLE IF NOT EXISTS " + table + " (" + pkey + " " + type + " PRIMARY KEY)\n        ");
    };
    Client.prototype.ensureColumn = function (table, column, type) {
        var columns = Java.from(this.jdbcTemplate.query("SHOW COLUMNS FROM " + table, exports.mapRow));
        if (columns.some(function (col) { return col.COLUMN_NAME === column; }))
            return;
        this.jdbcTemplate.execute("ALTER TABLE " + table + " ADD COLUMN " + column + " " + type);
    };
    Client.prototype.ensureIndex = function (table, columns, options) {
        if (options === void 0) { options = { unique: false }; }
        var index = table + (options.unique ? "_uidx_" : "_idx_") + columns.join("_");
        var indexes = Java.from(this.jdbcTemplate.query("SHOW INDEX FROM " + table, exports.mapRow));
        if (indexes.some(function (idx) { return idx.INDEX_NAME === index; }))
            return;
        this.jdbcTemplate.execute("\n            CREATE " + (options.unique ? "UNIQUE" : "") + " INDEX " + index + " ON " + table + "(" + columns.join(",") + ")\n        ");
    };
    Client.prototype.ensureUniqueIndex = function (table, columns) {
        this.ensureIndex(table, columns, { unique: true });
    };
    Client.prototype.insert = function (table, object, options) {
        if (options === void 0) { options = { upsert: false }; }
        var keys = Object.keys(object).join(",");
        var values = Object.keys(object).map(function () { return "?"; }).join(",");
        this.jdbcTemplate.update((options.upsert ? "REPLACE" : "INSERT") + " INTO " + table + "(" + keys + ") VALUES(" + values + ")", Object.keys(object).map(function (key) {
            var value = object[key];
            return typeof value === "object" ? JSON.stringify(value) : value;
        }));
    };
    Client.prototype.upsert = function (table, object) {
        this.insert(table, object, { upsert: true });
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=index.js.map