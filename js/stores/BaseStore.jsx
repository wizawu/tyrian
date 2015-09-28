const {
    EventEmitter,
    assign,
} = require("../namespace");

const CHANGE_EVENT = "change";

const BaseStore = assign({}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    }
});

export = BaseStore;
