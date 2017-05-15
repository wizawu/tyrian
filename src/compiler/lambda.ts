import * as fs from "fs"

export const isLambda = {}

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
        `)
    }
}