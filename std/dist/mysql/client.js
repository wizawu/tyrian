"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RowMapper = Java.type("org.springframework.jdbc.core.RowMapper");
exports.rowMapper = new RowMapper(function (resultSet) {
    var row = {};
    for (var i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
        var key = resultSet.getMetaData().getColumnLabel(i);
        var type = resultSet.getMetaData().getColumnTypeName(i);
        if (resultSet.getObject(i) === null) {
            row[key] = null;
        }
        else if (type.toUpperCase() === "JSON") {
            row[key] = JSON.parse(resultSet.getString(i));
        }
        else {
            row[key] = resultSet.getObject(i);
        }
    }
    return row;
});
var Client = (function () {
    function Client(options) {
        var host = options.host, port = options.port, database = options.database, user = options.user, password = options.password;
        var url = "jdbc:mysql://" + host + ":" + port + "/" + database + "?user=" + user + "&password=" + password;
        url += "&characterEncoding=" + (options.characterEncoding || "UTF-8");
        if (options.autoReconnect !== undefined)
            url += "&autoReconnect=" + options.autoReconnect;
        if (options.testOnBorrow !== undefined)
            url += "&testOnBorrow=" + options.testOnBorrow;
        if (options.useSSL !== undefined)
            url += "&useSSL=" + options.useSSL;
        var dataSource = new com.zaxxer.hikari.HikariDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setJdbcUrl(url);
        this.db = new org.springframework.jdbc.core.JdbcTemplate(dataSource);
    }
    Client.prototype.query = function (sql, args) {
        return Java.from(args === undefined ? this.db.query(sql, exports.rowMapper) : this.db.query(sql, args, exports.rowMapper));
    };
    Client.prototype.queryForObject = function (sql, args) {
        try {
            return args === undefined ? this.db.queryForObject(sql, exports.rowMapper) : this.db.queryForObject(sql, args, exports.rowMapper);
        }
        catch (e) {
            if (e instanceof org.springframework.dao.EmptyResultDataAccessException) {
                return null;
            }
            else {
                throw e;
            }
        }
    };
    Client.prototype.execute = function (sql) {
        return this.db.execute(sql);
    };
    Client.prototype.update = function (sql, args) {
        return this.db.update(sql, args);
    };
    Client.prototype.ensureColumn = function (table, column, type) {
        var columns = this.query("SHOW COLUMNS FROM " + table + " LIKE ?", [column]);
        if (columns.length === 0) {
            this.execute("ALTER TABLE " + table + " ADD COLUMN " + column + " " + type);
        }
    };
    Client.prototype.ensureIndex = function (table, columns, options) {
        if (options === void 0) { options = { type: "", separator: "_idx_" }; }
        var name = table + options.separator + columns.join("_");
        var indexes = this.query("SHOW INDEX FROM " + table + " WHERE key_name = ?", [name]);
        if (indexes.length === 0) {
            this.execute("\n                CREATE " + options.type + " INDEX " + name + " ON " + table + " (" + columns.join(",") + ")\n            ");
        }
    };
    Client.prototype.ensureUniqueIndex = function (table, columns) {
        this.ensureIndex(table, columns, { type: "UNIQUE", separator: "_uidx_" });
    };
    Client.prototype.ensureFullTextIndex = function (table, columns) {
        this.ensureIndex(table, columns, { type: "FULLTEXT", separator: "_ft_" });
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map