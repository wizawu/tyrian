const {
    Mockxhr,
} = require("../namespace");

const ActionTypes = require("../Constants").ActionTypes;
const Dispatcher = require("../Dispatcher");

export = {
    login(params, done, fail) {
        Mockxhr.post("/login", params, data => {
            Dispatcher.dispatch2(ActionTypes.LOGIN, data);
        });
    },

    logout(params, done, fail) {
        Mockxhr.post("/logout", params, data => {
            Dispatcher.dispatch2(ActionTypes.LOGOUT, {});
        });
    }
};
