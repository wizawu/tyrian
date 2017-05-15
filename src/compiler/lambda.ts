import * as fs from "fs"

export let isLambda = {}

try {
    isLambda = require("../../@types/jdk/index.js").isLambda || {}
} catch (ex) {
    console.log(ex.message)
}

export function addLambda(key: string) {
    isLambda[key] = true
}

export function addLambdaToFile(file: string, key: string) {
    delete require.cache[file]
    let isLambda = require(file).isLambda || {}
    if (!isLambda[key]) {
        fs.appendFileSync(file, `
module.exports.isLambda = module.exports.isLambda || {}
module.exports.isLambda["${key}"] = true
`
        )
    }
}