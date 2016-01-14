import { combineReducers, createStore } from "redux";
import * as i18n from "i18next-client";
import translation from "./translation";

i18n.init({resStore: translation});
i18n.setLng("en-US");

let reducer = combineReducers({
    i18n: (state, {type, data}) => {
        if (type === "SETLNG") i18n.setLng(data);
        return i18n;
    },

    login: (state, {type, data}) => {
        switch (type) {
            case "LOGIN":
                return data;
            case "LOGOUT":
                return null;
            default:
                return null;
        }
    },
});

let store = createStore(reducer);
store.dispatch2 = (type, data) => store.dispatch({type: type, data: data});

export default store;
