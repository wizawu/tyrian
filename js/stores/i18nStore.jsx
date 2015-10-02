const {
    Redux,
    i18n,
} = require("../namespace");

const {ActionTypes} = require("../Constants");

i18n.init({resStore: require("../translation")});
i18n.setLng("en-US");

export default Redux.createStore((state, {type, data}) => {
    if (type === ActionTypes.SETLNG) i18n.setLng(data);
    return i18n;
});
