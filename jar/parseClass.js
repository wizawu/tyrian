var typeMap = {
    "byte": "number",
    "short": "number",
    "int": "number",
    "long": "number",
    "float": "number",
    "double": "number",
    "char": "any",
}

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
    while (/\S/.test(source.charAt(offset + skip))) {
        var char = source.charAt(offset + skip)
        if (["(", ")", ",", ";"].indexOf(char) >= 0) break
        token += char
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
        if (["abstract", "public", "protected", "static"].indexOf(t.token) >= 0) {
            line += t.token + " "
        } else if (t.token !== "final") {
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
    if (t.token === "(") {
        offset += t.skip
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
                var type = typeMap[t.token] || t.token
                line += "arg" + i + ": " + type
                i += 1
            }
        }
        t = nextToken(source, offset, stack)
    }
    if (t.token === ";") {
        offset += t.skip
    } else {
        return null
    }

    line += ": " + (typeMap[returnType] || returnType)
    stack.push(line)
    return {
        source: source,
        offset: offset,
        stack: stack,
    }
}

function parseClass(source, offset, stack, classType) {
    var t = nextToken(source, offset, stack)
    if (t.token !== "class") return null
    offset += t.skip

    t = nextToken(source, offset, stack)
    var className = t.token
    offset += t.skip

    var line = classType + "class " + className.split(".").reverse()[0]
    while (t = nextToken(source, offset, stack)) {
        line += " " + t.token
        offset += t.skip
        if (t.token === "{") break
    }
    stack.push(line)

    while (t = nextToken(source, offset, stack)) {
        if (t.token === "}") {
            offset += t.skip
            stack.push("}")
            break
        } else if (t.token === "public") {
            offset += t.skip
        } else if (t.token === className) {
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
                    var type = typeMap[t.token] || t.token
                    line += "arg" + i + ": " + type
                    i += 1
                }
            }
            stack.push(line)
            offset += 1     // ;
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

function parseInterface(source, offset, stack, type) {

}

function parse(source, offset, stack) {
    var type = ""
    while (offset < source.length) {
        var next = nextToken(source, offset, stack)
        var token = next.token
        var skip = next.skip
        if (token === "final") {
            offset += skip
        } else if (token === "abstract" || token === "public") {
            type += token + " "
            offset += skip
        } else if (token === "class") {
            context = parseClass(source, offset, stack, type)
            if (!context) return { stack: stack }
            source = context.source
            offset = context.offset
            stack = context.stack
            type = ""
        } else if (token === "interface") {
            context = parseInterface(source, offset, stack, type)
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
    return parse(source, 0, []).stack.join("\n")
}