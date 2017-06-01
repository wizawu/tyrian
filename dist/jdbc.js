"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var JDBCClient = (function () {
    function JDBCClient() {
    }
    JDBCClient.prototype.connect = function () {
        this.cache = net.sf.ehcache.CacheManager.create();
        this.connection = this.driver.connect(this.url, new java.util.Properties());
    };
    JDBCClient.prototype.getInt = function (bucket, key) {
        return this.getByType(bucket, key, "int");
    };
    JDBCClient.prototype.getFloat = function (bucket, key) {
        return this.getByType(bucket, key, "float");
    };
    JDBCClient.prototype.getString = function (bucket, key) {
        return this.getByType(bucket, key, "string");
    };
    JDBCClient.prototype.getJSON = function (bucket, key) {
        var value = this.getByType(bucket, key, "string");
        return value === null ? null : JSON.parse(value);
    };
    JDBCClient.prototype.setInt = function (bucket, key, value, ttl) {
        this.setByType(bucket, key, "int", value, ttl);
    };
    JDBCClient.prototype.setFloat = function (bucket, key, value, ttl) {
        this.setByType(bucket, key, "float", value, ttl);
    };
    JDBCClient.prototype.setString = function (bucket, key, value, ttl) {
        this.setByType(bucket, key, "string", value, ttl);
    };
    JDBCClient.prototype.setJSON = function (bucket, key, json, ttl) {
        this.setByType(bucket, key, "string", JSON.stringify(json), ttl);
    };
    JDBCClient.prototype.fetch = function (bucket, key) {
        return this.getByType(bucket, key, "blob");
    };
    JDBCClient.prototype.put = function (bucket, key, data, ttl) {
        this.setByType(bucket, key, "blob", data, ttl);
    };
    JDBCClient.prototype.ensureTable = function (table, pkey, type) {
        this.execute("\n            CREATE TABLE IF NOT EXISTS " + table + " (\n                " + pkey + " " + type + " NOT NULL,\n                PRIMARY KEY (" + pkey + ")\n            )\n        ");
    };
    JDBCClient.prototype.ensureColumn = function (table, column, type) {
        var rows = this.list("DESC " + table);
        if (rows.some(function (row) { return row.COLUMN_NAME === column; }))
            return;
        this.execute("ALTER TABLE " + table + " ADD COLUMN " + column + " " + type);
    };
    JDBCClient.prototype.ensureIndex = function (table, columns) {
        var index = util_1.indexName(table, columns, false);
        var rows = this.list("SHOW INDEX FROM " + table);
        if (rows.some(function (row) { return row.INDEX_NAME === index; }))
            return;
        this.execute("CREATE INDEX " + index + " ON " + table + "(" + columns.join(",") + ")");
    };
    JDBCClient.prototype.ensureUniqueIndex = function (table, columns) {
        var index = util_1.indexName(table, columns, true);
        var rows = this.list("SHOW INDEX FROM " + table);
        if (rows.some(function (row) { return row.INDEX_NAME === index; }))
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
        var rows = this.list("SHOW INDEX FROM " + bucket_or_table);
        rows.forEach(function (row) {
            if (row.INDEX_NAME === "PRIMARY")
                pkey = row.COLUMN_NAME;
        });
        this.execute("DELETE FROM " + bucket_or_table + " WHERE " + pkey + " = ?", [key]);
        if (this.cache.cacheExists(bucket_or_table)) {
            this.cache.getCache(bucket_or_table).remove(key);
        }
    };
    JDBCClient.prototype.close = function () {
        this.connection.close();
        this.cache.shutdown();
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
    JDBCClient.prototype.existsTable = function (table) {
        var rows = this.list("SHOW TABLES");
        return rows.some(function (row) { return row.TABLE_NAME === table; });
    };
    JDBCClient.prototype.ensureBucket = function (bucket, withCache) {
        this.execute("\n            CREATE TABLE IF NOT EXISTS " + bucket + " (\n                _key VARCHAR(2048) NOT NULL,\n                _int BIGINT,\n                _float DOUBLE,\n                _string TEXT,\n                _blob LONGBLOB,\n                timestamp BIGINT,\n                expires_at BIGINT,\n                PRIMARY KEY (_key),\n                INDEX " + bucket + "_idx_expires_at (expires_at)\n            )\n        ");
        if (withCache)
            this.ensureBucketInCache(bucket);
    };
    JDBCClient.prototype.ensureBucketInCache = function (bucket) {
        if (!this.cache.cacheExists(bucket)) {
            var cache = new net.sf.ehcache.Cache(bucket, 4096, false, false, 3600, 300);
            this.cache.addCacheIfAbsent(cache);
        }
    };
    JDBCClient.prototype.getByType = function (bucket, key, type) {
        var useCache = type !== "blob";
        if (useCache) {
            if (this.cache.cacheExists(bucket)) {
                var element = this.cache.getCache(bucket).get(key);
                if (element !== null)
                    return element.getValue();
            }
        }
        else if (!this.existsTable(bucket)) {
            return null;
        }
        var record = this.one("\n            SELECT *, expires_at - " + this.SQL_UNIX_TIMESTAMP + " as ttl\n            FROM " + bucket + " WHERE _key = ?", [key]);
        if (record === null)
            return null;
        if (typeof record.ttl === "number" && record.ttl <= 0) {
            this.wipeUpExpiration(bucket);
            return null;
        }
        var value = null;
        switch (type) {
            case "int":
                value = record._int;
                break;
            case "float":
                value = record._float;
                break;
            case "string":
                value = record._string;
                break;
            case "blob":
                value = record._blob;
                break;
        }
        if (useCache) {
            this.ensureBucketInCache(bucket);
            this.putToCache(bucket, key, value, record.ttl / 1e6);
        }
        return value;
    };
    JDBCClient.prototype.setByType = function (bucket, key, type, value, ttl) {
        var useCache = type !== "blob";
        if (useCache) {
            this.ensureBucketInCache(bucket);
            var element = this.cache.getCache(bucket).get(key);
            if (element !== null && element.getValue() === value)
                return;
        }
        this.ensureBucket(bucket, useCache);
        var keys = "_key,_" + type + ",timestamp,expires_at";
        var expires_at = ttl === undefined ? "NULL" : this.SQL_UNIX_TIMESTAMP + " + " + ttl * 1e6;
        var values = "?,?," + this.SQL_UNIX_TIMESTAMP + "," + expires_at;
        this.execute("REPLACE INTO " + bucket + "(" + keys + ") VALUES(" + values + ")", [key, value]);
        if (useCache)
            this.putToCache(bucket, key, value, ttl);
    };
    JDBCClient.prototype.putToCache = function (bucket, key, value, ttl) {
        var config = this.cache.getConfiguration().getDefaultCacheConfiguration();
        if (typeof ttl === "number" && ttl <= 0)
            return;
        if (ttl === undefined || ttl === null || ttl === NaN)
            ttl = config.getTimeToLiveSeconds();
        var element = new net.sf.ehcache.Element(key, value, config.getTimeToIdleSeconds(), ttl);
        this.cache.getCache(bucket).put(element);
    };
    JDBCClient.prototype.wipeUpExpiration = function (bucket) {
        this.execute("DELETE FROM " + bucket + " WHERE " + this.SQL_UNIX_TIMESTAMP + " >= expires_at");
    };
    return JDBCClient;
}());
exports.JDBCClient = JDBCClient;
//# sourceMappingURL=jdbc.js.map