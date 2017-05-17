export let isLambda = {}

try {
    isLambda = require("./isLambda") || {}
} catch (ex) {
    console.log(ex.message)
}

export function addLambda(key: string) {
    isLambda[key] = true
}