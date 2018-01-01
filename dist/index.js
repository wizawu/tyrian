"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
__export(require("./model"));
var Collate;
(function (Collate) {
    Collate["utf8_bin"] = "utf8_bin";
    Collate["utf8mb4_unicode_ci"] = "utf8mb4_unicode_ci";
})(Collate = exports.Collate || (exports.Collate = {}));
var Engine;
(function (Engine) {
    Engine["ARCHIVE"] = "ARCHIVE";
    Engine["BLACKHOLE"] = "BLACKHOLE";
    Engine["CSV"] = "CSV";
    Engine["FEDERATED"] = "FEDERATED";
    Engine["INNODB"] = "INNODB";
    Engine["MEMORY"] = "MEMORY";
    Engine["MRG_MYISAM"] = "MRG_MYISAM";
    Engine["MYISAM"] = "MYISAM";
    Engine["PERFORMANCE_SCHEMA"] = "PERFORMANCE_SCHEMA";
    Engine["ROCKSDB"] = "ROCKSDB";
})(Engine = exports.Engine || (exports.Engine = {}));
var Parser;
(function (Parser) {
    Parser["mecab"] = "mecab";
    Parser["ngram"] = "ngram";
})(Parser = exports.Parser || (exports.Parser = {}));
var Client = (function () {
    function Client(options) {
        var _this = this;
        this.$ = {
            innodb_flush_log_at_trx_commit: function (value) {
                this.db.execute("SET GLOBAL innodb_flush_log_at_trx_commit = " + value);
            }
        };
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
        Object.keys(this.$).forEach(function (variable) { return _this.$[variable] = _this.$[variable].bind(_this); });
    }
    Client.prototype.ensureTable = function (table, pkey, type, engine, collate) {
        if (engine === void 0) { engine = Engine.INNODB; }
        this.db.execute("\n            CREATE TABLE IF NOT EXISTS " + table + " (\n                " + pkey + " " + type + " PRIMARY KEY\n            ) ENGINE = " + engine + " " + (collate ? ", COLLATE " + collate : "") + "\n        ");
    };
    Client.prototype.ensureColumn = function (table, column, type) {
        var columns = this.query("SHOW COLUMNS FROM " + table + " LIKE ?", [column]);
        if (columns.length === 0) {
            this.db.execute("ALTER TABLE " + table + " ADD COLUMN " + column + " " + type);
        }
    };
    Client.prototype.ensureIndex = function (table, columns, options) {
        if (options === void 0) { options = { type: "", separator: "_idx_", parser: "" }; }
        var name = table + options.separator + columns.join("_");
        var indexes = this.query("SHOW INDEX FROM " + table + " WHERE Key_name = ?", [name]);
        if (indexes.length === 0) {
            this.db.execute("\n                CREATE " + options.type + " INDEX " + name + " ON " + table + "(" + columns.join(",") + ") " + options.parser + "\n            ");
        }
    };
    Client.prototype.ensureUniqueIndex = function (table, columns) {
        this.ensureIndex(table, columns, { type: "UNIQUE", separator: "_uidx_", parser: "" });
    };
    Client.prototype.ensureFullText = function (table, columns, parser) {
        if (parser === void 0) { parser = Parser.ngram; }
        this.ensureIndex(table, columns, { type: "FULLTEXT", separator: "_ft_", parser: "WITH PARSER " + parser });
    };
    Client.prototype.query = function (sql, args) {
        return Java.from(args === undefined ? this.db.query(sql, model_1.rowMapper) : this.db.query(sql, args, model_1.rowMapper));
    };
    Client.prototype.queryForObject = function (sql, args) {
        return args === undefined ? this.db.queryForObject(sql, model_1.rowMapper) : this.db.queryForObject(sql, args, model_1.rowMapper);
    };
    Client.prototype.update = function (sql) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.db.update(sql, args);
    };
    Client.prototype.insert = function (table, doc, options) {
        if (options === void 0) { options = { upsert: false }; }
        var Doc = doc.constructor;
        var keys = Object.keys(new Doc());
        var values = keys.map(function () { return "?"; }).join(",");
        return this.db.update((options.upsert ? "REPLACE" : "INSERT") + " INTO " + table + "(" + keys.join(",") + ") VALUES(" + values + ")", keys.map(function (key) {
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
        return this.insert(table, doc, { upsert: true });
    };
    Client.prototype.batchInsert = function (table, docs, options) {
        if (options === void 0) { options = { upsert: false }; }
        if (docs.length === 0)
            return;
        var Doc = docs[0].constructor;
        var keys = Object.keys(new Doc());
        var values = keys.map(function () { return "?"; }).join(",");
        var BatchPreparedStatementSetter = Java.extend(Java.type("org.springframework.jdbc.core.BatchPreparedStatementSetter"), {
            setValues: function (preparedStatement, i) {
                var doc = docs[i];
                keys.forEach(function (key, j) {
                    var value = doc[key];
                    if (typeof value === "object") {
                        preparedStatement.setObject(j + 1, value === null ? null : JSON.stringify(value));
                    }
                    else {
                        preparedStatement.setObject(j + 1, value);
                    }
                });
            },
            getBatchSize: function () {
                return docs.length;
            },
        });
        return this.db.batchUpdate((options.upsert ? "REPLACE" : "INSERT") + " INTO " + table + "(" + keys.join(",") + ") VALUES(" + values + ")", new BatchPreparedStatementSetter());
    };
    Client.prototype.batchUpsert = function (table, docs) {
        this.batchInsert(table, docs, { upsert: true });
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=index.js.map