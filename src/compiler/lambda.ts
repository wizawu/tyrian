import * as fs from "fs"

export let isLambda = {}

try {
    isLambda = require("../../@types/isLambda.js") || {}
} catch (ex) {
    console.log(ex.message)
}

export function addLambda(key: string) {
    isLambda[key] = true
}

export function addLambdaToFile(file: string, key: string) {
    delete require.cache[file]
    let isLambda = require(file) || {}
    if (!isLambda[key]) {
        fs.appendFileSync(file, `module.exports["${key}"] = true\n`)
    }
}