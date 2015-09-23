const {
    FluxDispatcher,
    assign
} = global.__;

const Dispatcher = assign(new FluxDispatcher(), {
    dispatch2(type, data) {
        this.dispatch({ type: type, data: data });
    }
});

export default Dispatcher;
