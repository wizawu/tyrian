const {
    assign,
} = global.__;

const ActionTypes = require("../Constants.js").ActionTypes;
const BaseStore = require("./BaseStore.js");
const Dispatcher = require("../Dispatcher.js");

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

export default LoginStore;
