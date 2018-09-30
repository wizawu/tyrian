"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.that = global;
exports.that.self = global;
exports.that.console = {
    log: function (message) {
        java.lang.System.out.println(message);
    },
    error: function (message) {
        java.lang.System.err.println(message);
    },
};
exports.that.setTimeout = function (runnable, delay) {
    if (delay === void 0) { delay = 0; }
    var thread = new java.lang.Thread(function () {
        java.lang.Thread.sleep(delay);
        runnable();
    });
    thread.start();
    return thread;
};
exports.that.clearTimeout = function (thread) {
    try {
        if (thread.isAlive())
            thread.stop();
    }
    catch (ignored) {
    }
    thread.join();
};
//# sourceMappingURL=global.js.map