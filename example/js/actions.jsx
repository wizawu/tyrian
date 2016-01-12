const mockxhr = require("mockxhr");
const store = require("./store");

module.exports = {
    login(params, done, fail) {
        mockxhr.post("/login", params, data => {
            store.dispatch2("LOGIN", data);
        });
    },

    logout(params, done, fail) {
        mockxhr.post("/logout", params, data => {
            store.dispatch2("LOGOUT", {});
        });
    },
};
