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
var MySQLConnection_1 = require("./MySQLConnection");
var String = java.lang.String;
var MariaDBConnection = (function (_super) {
    __extends(MariaDBConnection, _super);
    function MariaDBConnection(options) {
        var _this = _super.call(this) || this;
        _this.driver = new org.mariadb.jdbc.Driver();
        _this.url = String.format("jdbc:mariadb://%s:%d/%s?user=%s&password=%s&testOnBorrow=true", options.host, options.port, options.database, options.user, options.password);
        _this.connect();
        return _this;
    }
    return MariaDBConnection;
}(MySQLConnection_1.MySQLConnectionImpl));
exports.default = MariaDBConnection;
