/// <reference path="../index.d.ts" />

import { get, ensureExists } from "object-path"
import { EXIT_STATUS } from "../const"

const UNSUPPORTED_MODIFIERS = [
    "abstract",
    "final",
    "native",
    "strictfp",
    "synchronized",
    "transient",
    "volatile",
]

function safeType(type: string): string {
    // java.util.function.*
    if (/java\.util\.function/.test(type)) return "any"
    // XXX<T>.YYY
    if (/>\.\w+$/.test(type)) return "any"
    // XXX$YYY
    if (type.indexOf("$") >= 0) return "any"
    if (type === "java.lang.String") return "string"
    return type
}

function nextToken(ctx: Context): Token {
    let skip = 0
    while (/\s/.test(ctx.source.charAt(ctx.offset + skip))) skip += 1

    let char = ctx.source.charAt(ctx.offset + skip)
    if (["(", ")", ",", ";"].indexOf(char) >= 0) {
        return { value: char, skip: skip + 1 }
    }

    let value = ""
    let openAngles = 0
    while (openAngles > 0 || /\S/.test(ctx.source.charAt(ctx.offset + skip))) {
        char = ctx.source.charAt(ctx.offset + skip)
        if (char === "<") openAngles += 1
        if (char === ">") openAngles -= 1
        if (openAngles <= 0 && ["(", ")", ",", ";"].indexOf(char) >= 0) break
        if (char === "?") {
            skip += 1
            let token = nextToken({ ...ctx, ...{ offset: ctx.offset + skip } })
            if (token.value === "extends" || token.value === "super") {
                // ? extends XXX
                // ? super XXX
                skip += token.skip
                token = nextToken({ ...ctx, ...{ offset: ctx.offset + skip } })
                value += token.value
                skip += token.skip
            } else {
                // <?>
                value += "any"
            }
        } else {
            skip += 1
            value += char
        }
        if (ctx.source.charAt(ctx.offset + skip) === ">" && openAngles === 0) break
    }

    return { value, skip }
}

function parseParameters(ctx: Context, line: string): string {
    let token = nextToken(ctx)
    if (token.value !== "(") return line
    for (let i = 0; true; token = nextToken(ctx)) {
        ctx.offset += token.skip
        if (token.value === "(") {
            line += "("
        } else if (token.value === ")") {
            line += ")"
            break
        } else if (token.value === ",") {
            line += ", "
        } else {
            if (token.value.substring(token.value.length - 3) === "...") {
                line += `...arg${i}: ${token.value.replace("...", "[]")}`
            } else {
                line += `arg${i}: ${safeType(token.value)}`
            }
            i += 1
        }
    }

    return line
}

function parseMember(ctx: Context, isInterface: boolean, typeVariable: string): Context {
    let line = "    "
    let type = ""

    let token: Token = { value: "", skip: 0 }
    while (token = nextToken(ctx)) {
        ctx.offset += token.skip
        if (["public", "protected", "static"].indexOf(token.value) >= 0) {
            if (!isInterface) line += token.value + " "
        } else if (token.value.charAt(0) === "<") {
            typeVariable = token.value
        } else if (UNSUPPORTED_MODIFIERS.indexOf(token.value) >= 0) {
            continue
        } else {
            type = token.value
            break
        }
    }

    // static {}
    if (type === "{}") return { ...ctx, ...{ offset: ctx.offset + 1 } }

    token = nextToken(ctx)
    let member = token.value
    line += member + typeVariable
    ctx.offset += token.skip

    line = parseParameters(ctx, line)
    line += `: ${safeType(type)}`
    ctx.stack.push({ line, type: "MEMBER", name: member })

    while (ctx.source.charAt(ctx.offset) !== "\n") ctx.offset += 1
    return ctx
}

function parseClass(ctx: Context, modifier: string): Context | null {
    let token = nextToken(ctx)
    let isInterface = token.value === "interface"
    if (token.value !== "class" && !isInterface) return null
    ctx.offset += token.skip
    let line = modifier + token.value + " "

    token = nextToken(ctx)
    ctx.offset += token.skip
    let className = token.value
    line += className.replace(/^(\w+\.)+/, "")

    while (token = nextToken(ctx)) {
        line += " " + token.value
        ctx.offset += token.skip
        if (token.value === "{") break
    }
    ctx.stack.push({ line, type: "BEGIN", name: className })

    let memberModifier = ""
    let typeVariable = ""
    while (token = nextToken(ctx)) {
        if (token.value === "}") {
            ctx.offset += token.skip
            ctx.stack.push({ line: "}\n", type: "END", name: className })
            break
        } else if (token.value === "public" || token.value === "protected") {
            ctx.offset += token.skip
            memberModifier = token.value + " "
        } else if (token.value.charAt(0) === "<") {
            ctx.offset += token.skip
            typeVariable = token.value
        } else if (
            (token.value === className && ctx.source.charAt(ctx.offset + token.skip) === "(") ||
            (className.indexOf(token.value) === 0 && className.charAt(token.value.length) === "<")
        ) {
            ctx.offset += token.skip
            line = "    constructor"
            line = parseParameters(ctx, line)
            ctx.stack.push({ line: line.replace(/^(\s+)/, "$1" + memberModifier), type: "CONSTR", name: "" })

            memberModifier = ""
            while (ctx.source.charAt(ctx.offset) !== "\n") ctx.offset += 1
        } else {
            ctx = parseMember(ctx, isInterface, typeVariable)
            if (!ctx) return null
            if (!isInterface) {
                let lastItem = ctx.stack[ctx.stack.length - 1]
                lastItem.line = lastItem.line.replace(/^(\s+)/, "$1" + memberModifier)
            }
            memberModifier = ""
        }
    }

    return ctx
}

export default function (source: string, pkg: any) {
    let ctx: Context = { source, offset: 0, stack: [] }
    let modifier = ""
    while (ctx.offset < source.length) {
        let token = nextToken(ctx)
        if (token.value === "final" || token.value === "public") {
            ctx.offset += token.skip
        } else if (token.value === "abstract") {
            ctx.offset += token.skip
            modifier += token.value + " "
        } else if (token.value === "class" || token.value === "interface") {
            let ctx1 = parseClass(ctx, modifier)
            if (!ctx1) break
            ctx = ctx1
            modifier = ""
        } else {
            ctx.offset += token.skip
        }
    }

    let buffer = []
    let memberMap = {}
    let ignore = false

    for (let i = 0; i < ctx.stack.length; i++) {
        let item = ctx.stack[i]
        switch (item.type) {
            case "BEGIN":
                buffer = []
                memberMap = {}
                ignore = false
                if (item.name.indexOf("-") >= 0) ignore = true
                if (item.name.indexOf("$") >= 0) ignore = true
                if (!ignore) buffer.push(item.line as never)
                break
            case "CONSTR":
                if (ignore) break
                if (memberMap["&"]) {
                    memberMap["&"] = "    constructor(...args: any[])"
                } else {
                    memberMap["&"] = item.line
                }
                break
            case "MEMBER":
                if (ignore) break
                if (item.name === "prototype") break
                if (memberMap[item.name]) {
                    if (/\bstatic\b/.test(item.line) || /\bstatic\b/.test(memberMap[item.name])) {
                        memberMap[item.name] = `    static ${item.name}<T>(...args: any[]): any`
                    } else {
                        memberMap[item.name] = `    ${item.name}<T>(...args: any[]): any`
                    }
                } else {
                    memberMap[item.name] = item.line
                }
                break
            case "END":
                if (ignore) break
                Object.keys(memberMap).forEach(key => buffer.push(memberMap[key] as never))
                buffer.push(item.line as never)
                let className = item.name.replace(/^(\w+\.)+/, "")
                let ns = item.name.substring(0, item.name.length - className.length - 1)
                ensureExists(pkg, ns, {})
                get(pkg, ns)[className] = buffer.join("\n")
                break
            default:
                console.error(JSON.stringify(item))
                process.exit(EXIT_STATUS.PARSE_CLASS_ERROR)
        }
    }

    return buffer.join("\n")
}
