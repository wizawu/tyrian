const keyMirror = {
    ActionTypes: {
        LOGIN: null,
        LOGOUT: null,
        SETLNG: null,
    },
};

for (let group in keyMirror) {
    for (let key in keyMirror[group]) {
        keyMirror[group][key] = key;
    }
}

export default keyMirror;
