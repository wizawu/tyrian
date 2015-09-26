const assign = require("react/lib/Object.assign");

assign(require("./namespace"), {
    React: require("react"),
    EventEmitter: require("events").EventEmitter,
    FluxDispatcher: require("flux").Dispatcher,
    Mockxhr: require("mockxhr"),
    ReactRouter: require("react-router"),
    assign: assign,
    clone: x => JSON.parse(JSON.stringify(x)),
    i18n: require("i18next-client"),
    keyMirror: require("react/lib/keyMirror"),
    values: d => Object.keys(d).map(k => d[k])
});
