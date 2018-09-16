import "core-js/es6/map"
import "core-js/es6/set"
import "core-js/es6/symbol"

import "./node-polyfill"

import * as logging from "./logging"
import * as mysql from "./mysql"

export default {
    logging,
    mysql,
}
