"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = require("./global");
var secureRandom = new java.security.SecureRandom();
global_1.that.crypto = {
    getRandomValues: function (array) {
        for (var i = 0; i < array.length; i++) {
            switch (array.constructor.name) {
                case "Int8Array":
                    array[i] = secureRandom.nextInt(256) - 128;
                    break;
                case "Uint8Array":
                    array[i] = secureRandom.nextInt(256);
                    break;
                case "Int16Array":
                    array[i] = secureRandom.nextInt(Math.pow(2, 16)) - Math.pow(2, 15);
                    break;
                case "Uint16Array":
                    array[i] = secureRandom.nextInt(Math.pow(2, 16));
                    break;
                case "Int32Array":
                    array[i] = secureRandom.nextLong() % Math.pow(2, 32) - Math.pow(2, 31);
                    break;
                case "Uint32Array":
                    array[i] = secureRandom.nextLong() % Math.pow(2, 32);
                    break;
                default:
                    array[i] = secureRandom.nextInt(256);
            }
        }
        return array;
    }
};
//# sourceMappingURL=crypto.js.map