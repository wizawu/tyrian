const keyMirror = {
    ActionTypes: {
        LOGIN: null,
        LOGOUT: null,
    },
};

for (let group in keyMirror) {
    for (let key in keyMirror[group]) {
        keyMirror[group][key] = key;
    }
}

export default keyMirror;
