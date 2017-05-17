export let isLambda = {}

try {
    isLambda = require("./isLambda.js") || {}
} catch (ex) {
    console.log(ex.message)
}

export function addLambda(key: string) {
    isLambda[key] = true
}