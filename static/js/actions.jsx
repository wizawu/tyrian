const {
    Mockxhr,
} = require("./namespace");

const store = require("./store");

export const login = {
    login(params, done, fail) {
        Mockxhr.post("/login", params, data => {
            store.dispatch2("LOGIN", data);
        });
    },

    logout(params, done, fail) {
        Mockxhr.post("/logout", params, data => {
            store.dispatch2("LOGOUT", {});
        });
    },
};
