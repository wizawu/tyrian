"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/es6/map");
require("core-js/es6/set");
require("core-js/es6/symbol");
var logging = __importStar(require("./logging"));
var mysql = __importStar(require("./mysql"));
exports.default = {
    logging: logging,
    mysql: mysql,
};
//# sourceMappingURL=index.js.map