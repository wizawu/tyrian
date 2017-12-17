"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
__export(require("./model"));
var JdbcTemplate = org.springframework.jdbc.core.JdbcTemplate;
var MysqlDataSource = com.mysql.cj.jdbc.MysqlDataSource;
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
        var dataSource = new MysqlDataSource();
        dataSource.setURL(url);
        this.db = new JdbcTemplate(dataSource);
        this.defaultEngine = options.defaultEngine || "INNODB";
    }
    Client.prototype.ensureTable = function (table, pkey, type, engine) {
        this.db.execute("\n            CREATE TABLE IF NOT EXISTS " + table + " (\n                " + pkey + " " + type + " PRIMARY KEY\n            ) ENGINE = " + (engine || this.defaultEngine) + "\n        ");
    };
    Client.prototype.ensureColumn = function (table, column, type) {
        var columns = this.query("SHOW COLUMNS FROM " + table);
        if (columns.some(function (col) { return col.Field === column; }))
            return;
        this.db.execute("ALTER TABLE " + table + " ADD COLUMN " + column + " " + type);
    };
    Client.prototype.ensureIndex = function (table, columns, options) {
        if (options === void 0) { options = { unique: false }; }
        var index = table + (options.unique ? "_uidx_" : "_idx_") + columns.join("_");
        var indexes = this.query("SHOW INDEX FROM " + table);
        if (indexes.some(function (idx) { return idx.Key_name === index; }))
            return;
        this.db.execute("\n            CREATE " + (options.unique ? "UNIQUE" : "") + " INDEX " + index + " ON " + table + "(" + columns.join(",") + ")\n        ");
    };
    Client.prototype.ensureUniqueIndex = function (table, columns) {
        this.ensureIndex(table, columns, { unique: true });
    };
    Client.prototype.ensureFullText = function (table, columns) {
        var index = table + "_ft_" + columns.join("_");
        var indexes = this.query("SHOW INDEX FROM " + table);
        if (indexes.some(function (idx) { return idx.Key_name === index; }))
            return;
        this.db.execute("\n            ALTER TABLE " + table + " ADD FULLTEXT " + index + "(" + columns.join(",") + ") WITH PARSER ngram\n        ");
    };
    Client.prototype.query = function (sql, args) {
        return Java.from(args === undefined ? this.db.query(sql, model_1.rowMapper) : this.db.query(sql, args, model_1.rowMapper));
    };
    Client.prototype.queryForObject = function (sql, args) {
        return args === undefined ? this.db.queryForObject(sql, model_1.rowMapper) : this.db.queryForObject(sql, args, model_1.rowMapper);
    };
    Client.prototype.insert = function (table, doc, options) {
        if (options === void 0) { options = { upsert: false }; }
        var Doc = doc.constructor;
        var keys = Object.keys(new Doc());
        var values = keys.map(function () { return "?"; }).join(",");
        this.db.update((options.upsert ? "REPLACE" : "INSERT") + " INTO " + table + "(" + keys.join(",") + ") VALUES(" + values + ")", keys.map(function (key) {
            var value = doc[key];
            if (typeof value === "object") {
                return value === null ? null : JSON.stringify(value);
            }
            else {
                return value;
            }
        }));
    };
    Client.prototype.upsert = function (table, doc) {
        this.insert(table, doc, { upsert: true });
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=index.js.map