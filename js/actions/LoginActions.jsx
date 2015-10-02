const {
    Mockxhr,
} = require("../namespace");

const LoginStore = require("../stores/LoginStore");
const {ActionTypes} = require("../Constants");

export default {
    login(params, done, fail) {
        Mockxhr.post("/login", params, data => {
            LoginStore.dispatch({
                type: ActionTypes.LOGIN,
                data: data,
            });
        });
    },

    logout(params, done, fail) {
        Mockxhr.post("/logout", params, data => {
            LoginStore.dispatch({
                type: ActionTypes.LOGOUT,
                data: {},
            });
        });
    }
};
