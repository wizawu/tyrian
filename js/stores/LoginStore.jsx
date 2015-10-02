const {
    Redux,
} = require("../namespace");

const {ActionTypes} = require("../Constants");

export default Redux.createStore((state, {type, data}) => {
    switch (type) {
        case ActionTypes.LOGIN:
            return data;
        case ActionTypes.LOGOUT:
            return null;
        default:
            return null;
    }
});
