const {
    FluxDispatcher,
    assign
} = require("./namespace");

const Dispatcher = assign(new FluxDispatcher(), {
    dispatch2(type, data) {
        this.dispatch({ type: type, data: data });
    }
});

export = Dispatcher;
