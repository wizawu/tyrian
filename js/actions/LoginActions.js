const {
    Mockxhr,
} = global.__;

const ActionTypes = require("../Constants.js").ActionTypes;
const Dispatcher = require("../Dispatcher.js");

export default {
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
