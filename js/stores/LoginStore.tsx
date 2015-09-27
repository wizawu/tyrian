const {
    assign,
} = require("../namespace");

const ActionTypes = require("../Constants").ActionTypes;
const BaseStore = require("./BaseStore");
const Dispatcher = require("../Dispatcher");

let _login = null;

const LoginStore = assign({}, BaseStore, {
    getAll() {
        return _login;
    },

    dispatcherIndex: Dispatcher.register(payload => {
        let changed = true;
        let data = payload.data;

        switch (payload.type) {
            case ActionTypes.LOGIN:
                _login = data;
                break;
            case ActionTypes.LOGOUT:
                _login = null;
                break;
            default:
                changed = false;
        }

        if (changed) LoginStore.emitChange();
    })
});

export = LoginStore;
