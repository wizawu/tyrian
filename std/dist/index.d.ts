import "core-js/es6/map";
import "core-js/es6/set";
import "core-js/es6/symbol";
import "./js-polyfill";
import * as logging from "./logging";
import * as mysql from "./mysql";
declare const _default: {
    logging: typeof logging;
    mysql: typeof mysql;
};
export default _default;
