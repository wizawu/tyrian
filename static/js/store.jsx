const Redux = require("react-redux");
const i18n = require("i18next");

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
                return state;
        }
    },
});

let store = Redux.createStore(reducer);
store.dispatch2 = (type, data) => store.dispatch({type: type, data: data});

export default store;
