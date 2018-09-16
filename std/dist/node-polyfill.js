var random = new java.security.SecureRandom();
var _ = global;
_.self = global;
_.crypto = {
    getRandomValues: function (array) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            result.push(random.nextInt(256));
        }
        return result;
    }
};
//# sourceMappingURL=node-polyfill.js.map