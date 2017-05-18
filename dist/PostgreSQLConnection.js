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
var PostgreSQLConnection = (function (_super) {
    __extends(PostgreSQLConnection, _super);
    function PostgreSQLConnection(options) {
        var _this = _super.call(this) || this;
        _this.driver = new org.postgresql.Driver();
        _this.url = java.lang.String.format("jdbc:postgresql://%s:%d/%s?user=%s&password=%s&testOnBorrow=true", options.host, options.port, options.database, options.user, options.password);
        _this.connect();
        return _this;
    }
    return PostgreSQLConnection;
}(JDBCConnection_1.default));
exports.default = PostgreSQLConnection;
//# sourceMappingURL=PostgreSQLConnection.js.map