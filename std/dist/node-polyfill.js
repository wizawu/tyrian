var random = new java.security.SecureRandom();
var _ = global;
_.self = global;
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