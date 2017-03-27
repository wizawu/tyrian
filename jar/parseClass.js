function nextToken(source, offset, stack) {
    var skip = 0
    while (/\s/.test(source.charAt(offset + skip))) {
        skip += 1
    }

    var char = source.charAt(offset + skip)
    if (["(", ")", ",", ";"].indexOf(char) >= 0) {
        return { token: char, skip: skip + 1 }
    }

    var token = ""
    var count = 0
    while (count > 0 || /\S/.test(source.charAt(offset + skip))) {
        var char = source.charAt(offset + skip)
        if (char === "<") count += 1
        if (char === ">") count -= 1
        if (count === 0 && ["(", ")", ",", ";"].indexOf(char) >= 0) break
        token += char === "?" ? "any" : char
        skip += 1
    }

    return {
        token: token,
        skip: skip,
    }
}

function parseClassMember(source, offset, stack) {
    var line = "    "
    var returnType = ""
    var t = null
    while (t = nextToken(source, offset, stack)) {
        offset += t.skip
        if (["public", "protected", "static"].indexOf(t.token) >= 0) {
            line += t.token + " "
        } else if (t.token !== "final" && t.token !== "abstract") {
            returnType = t.token
            break
        }
    }

    if (returnType === "{}") {
        return {
            source: source,
            offset: offset + 1,
            stack: stack,
        }
    }

    t = nextToken(source, offset, stack)
    line += t.token
    offset += t.skip

    t = nextToken(source, offset, stack)
    offset += t.skip
    if (t.token === "(") {
        line += "("
        var i = 0
        while (t = nextToken(source, offset, stack)) {
            offset += t.skip
            if (t.token === ")") {
                line += ")"
                break
            } else if (t.token === ",") {
                line += ", "
            } else {
                if (t.token.endsWith("...")) {
                    line += "...arg" + i + ": " + t.token.replace("...", "[]")
                } else {
                    line += "arg" + i + ": " + t.token
                }
                i += 1
            }
        }
    }
    line += ": " + returnType
    stack.push(line)

    while (source.charAt(offset) !== "\n") offset += 1

    return {
        source: source,
        offset: offset,
        stack: stack,
    }
}

function parseClass(source, offset, stack, classType) {
    var t = nextToken(source, offset, stack)
    if (t.token !== "class" && t.token !== "interface") return null
    offset += t.skip
    var line = classType + t.token + " "

    t = nextToken(source, offset, stack)
    offset += t.skip
    var className = t.token
    line += className.split(".").reverse()[0]
    while (t = nextToken(source, offset, stack)) {
        line += " " + t.token
        offset += t.skip
        if (t.token === "{") break
    }
    stack.push(line)

    while (t = nextToken(source, offset, stack)) {
        if (t.token === "}") {
            offset += t.skip
            stack.push("}\n")
            break
        } else if (t.token === "public") {
            offset += t.skip
        } else if (t.token === className && source.charAt(offset + t.skip) === "(") {
            offset += t.skip
            var line = "    constructor"
            var i = 0
            while (t = nextToken(source, offset, stack)) {
                offset += t.skip
                if (t.token === "(") {
                    line += "("
                } else if (t.token === ")") {
                    line += ")"
                    break
                } else if (t.token === ",") {
                    line += ", "
                } else {
                    if (t.token.endsWith("...")) {
                        line += "...arg" + i + ": " + t.token.replace("...", "[]")
                    } else {
                        line += "arg" + i + ": " + t.token
                    }
                    i += 1
                }
            }
            stack.push(line)
            while (source.charAt(offset) !== "\n") offset += 1
        } else {
            var context = parseClassMember(source, offset, stack)
            if (!context) return null
            source = context.source
            offset = context.offset
            stack = context.stack
        }
    }

    return {
        source: source,
        offset: offset,
        stack: stack,
    }
}

function parse(source, offset, stack) {
    var type = ""
    while (offset < source.length) {
        var next = nextToken(source, offset, stack)
        var token = next.token
        var skip = next.skip
        if (token === "final" || token === "public") {
            offset += skip
        } else if (token === "abstract") {
            type += token + " "
            offset += skip
        } else if (token === "class" || token === "interface") {
            context = parseClass(source, offset, stack, type)
            if (!context) return { stack: stack }
            source = context.source
            offset = context.offset
            stack = context.stack
            type = ""
        } else {
            offset += skip
        }
    }
    return { stack: stack }
}

module.exports = function(source) {
    return parse(source, 0, []).stack.join("\n").replace(/<any extends (\S+)>/g, "<$1>")
}