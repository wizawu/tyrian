export let isLambda = {}

try {
    isLambda = require("./isLambda") || {}
} catch (ex) {
    console.log(ex.message)
}

export function addLambda(key: string, count = 1) {
    if (key === "java.lang.Class") return
    isLambda[key] = count
}
