const assign = require("react/lib/Object.assign");

global.__ = assign(global.__ || {}, {
    React: require("react"),
    EventEmitter: require("events").EventEmitter,
    FluxDispatcher: require("flux").Dispatcher,
    Mockxhr: require("mockxhr"),
    PolymerLayout: require("react-polymer-layout"),
    ReactRouter: require("react-router"),
    assign: assign,
    clone: x => JSON.parse(JSON.stringify(x)),
    i18n: require("i18next"),
    keyMirror: require("react/lib/keyMirror"),
    values: d => Object.keys(d).map(k => d[k])
});
