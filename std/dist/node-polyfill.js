var random = new java.security.SecureRandom();
var _ = global;
_.innerHeight = 0;
_.innerWidth = 0;
_.self = global;
_.window = global;
_.setTimeout = function (runnable, delay) {
    if (delay === void 0) { delay = 0; }
    var thread = new java.lang.Thread(function () {
        java.lang.Thread.sleep(delay);
        runnable.run();
    });
    thread.start();
    return thread;
};
_.clearTimeout = function (thread) {
    try {
        if (thread.isAlive())
            thread.interrupt();
    }
    catch (ignored) {
    }
    thread.join();
};
_.crypto = {
    getRandomValues: function (array) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            switch (array.constructor.name) {
                case "Int8Array":
                    result.push(random.nextInt(256) - 128);
                    break;
                case "Uint8Array":
                    result.push(random.nextInt(256));
                    break;
                case "Int16Array":
                    result.push(random.nextInt(Math.pow(2, 16)) - Math.pow(2, 15));
                    break;
                case "Uint16Array":
                    result.push(random.nextInt(Math.pow(2, 16)));
                    break;
                case "Int32Array":
                    result.push(random.nextLong() % Math.pow(2, 32) - Math.pow(2, 31));
                    break;
                case "Uint32Array":
                    result.push(random.nextLong() % Math.pow(2, 32));
                    break;
                default:
                    result.push(random.nextInt(256));
            }
        }
        return result;
    }
};
//# sourceMappingURL=node-polyfill.js.map