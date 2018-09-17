var secureRandom = new java.security.SecureRandom();
var that = global;
that.self = global;
that.console = {
    log: function (message) {
        java.lang.System.out.println(message);
    },
    error: function (message) {
        java.lang.System.err.println(message);
    },
};
that.setTimeout = function (runnable, delay) {
    if (delay === void 0) { delay = 0; }
    var thread = new java.lang.Thread(function () {
        java.lang.Thread.sleep(delay);
        runnable();
    });
    thread.start();
    return thread;
};
that.clearTimeout = function (thread) {
    try {
        if (thread.isAlive())
            thread.stop();
    }
    catch (ignored) {
    }
    thread.join();
};
that.crypto = {
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
//# sourceMappingURL=js-polyfill.js.map