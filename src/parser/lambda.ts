export let isLambda = {}

try {
    isLambda = require("./isLambda") || {}
} catch (ex) {
    console.log(ex.message)
}

export function addLambda(key: string) {
    if (key === "java.lang.Class") return
    isLambda[key] = true
}
