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
var jdbc_1 = require("./jdbc");
var MySQLClient = (function (_super) {
    __extends(MySQLClient, _super);
    function MySQLClient(options) {
        var _this = _super.call(this) || this;
        _this.driver = new com.mysql.cj.jdbc.Driver();
        var host = options.host, port = options.port, database = options.database, user = options.user, password = options.password, defaultEngine = options.defaultEngine;
        _this.SQL_UNIX_TIMESTAMP = "floor(unix_timestamp(current_timestamp(6)) * 1000000)";
        _this.defaultEngine = defaultEngine ? "ENGINE = " + defaultEngine : "";
        _this.url = "jdbc:mysql://" + host + ":" + port + "/" + database + "?user=" + user + "&password=" + password;
        _this.url += "&characterEncoding=" + (options.characterEncoding || "UTF-8");
        if (options.autoReconnect !== undefined) {
            _this.url += "&autoReconnect=" + options.autoReconnect;
        }
        if (options.logger !== undefined) {
            _this.url += "&logger=" + options.logger;
        }
        if (options.profileSQL !== undefined) {
            _this.url += "&profileSQL=" + options.profileSQL;
        }
        if (options.rewriteBatchedStatements !== undefined) {
            _this.url += "&rewriteBatchedStatements=" + options.rewriteBatchedStatements;
        }
        if (options.testOnBorrow !== undefined) {
            _this.url += "&testOnBorrow=" + options.testOnBorrow;
        }
        if (options.useSSL !== undefined) {
            _this.url += "&useSSL=" + options.useSSL;
        }
        if (options.useServerPrepStmts !== undefined) {
            _this.url += "&useServerPrepStmts=" + options.useServerPrepStmts;
        }
        _this.connect();
        _this.WAIT_TIMEOUT = _this.one("SHOW VARIABLES LIKE 'wait_timeout'").Value * 1000;
        return _this;
    }
    MySQLClient.prototype.connect = function () {
        this.connection = this.driver.connect(this.url, new java.util.Properties());
        this.interactedAt = Date.now();
    };
    return MySQLClient;
}(jdbc_1.JDBCClient));
exports.MySQLClient = MySQLClient;
//# sourceMappingURL=mysql.js.map