import mockxhr from "mockxhr";
import store from "./store";

export default {
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
