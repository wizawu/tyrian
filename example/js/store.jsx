const Redux = require("redux");
const i18n = require("i18next-client");

i18n.init({resStore: require("./translation")});
i18n.setLng("en-US");

let reducer = Redux.combineReducers({
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

let store = Redux.createStore(reducer);
store.dispatch2 = (type, data) => store.dispatch({type: type, data: data});

module.exports = store;
