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
var JDBCConnection_1 = require("./JDBCConnection");
var MySQLConnection = (function (_super) {
    __extends(MySQLConnection, _super);
    function MySQLConnection(options) {
        var _this = _super.call(this) || this;
        _this.driver = new com.mysql.cj.jdbc.Driver();
        _this.url = java.lang.String.format("jdbc:mysql://%s:%d/%s?user=%s&password=%s&testOnBorrow=true", options.host, options.port, options.database, options.user, options.password);
        _this.url += "&useSSL=" + (options.useSSL ? "true" : "false");
        _this.url += "&characterEncoding=" + (options.characterEncoding || "UTF-8");
        _this.url += "&autoReconnect=" + (options.autoReconnect ? "true" : "false");
        _this.connect();
        return _this;
    }
    return MySQLConnection;
}(JDBCConnection_1.default));
exports.default = MySQLConnection;
//# sourceMappingURL=MySQLConnection.js.map