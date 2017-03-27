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
                line += "arg" + i + ": " + t.token
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

    line += ": " + returnType
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
                    line += "arg" + i + ": " + t.token
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
    return parse(source || test, 0, []).stack.join("\n")
}

var test = `
            public final class org.pmw.tinylog.Configuration {
              org.pmw.tinylog.Configuration(org.pmw.tinylog.Configurator, org.pmw.tinylog.Level, java.util.Map<java.lang.String, org.pmw.tinylog.Level>, java.lang.String, java.util.Locale, java.util.List<org.pmw.tinylog.WriterDefinition>, org.pmw.tinylog.WritingThread, java.lang.Integer);
              public org.pmw.tinylog.Level getLevel();
              public boolean hasCustomLevels();
              public org.pmw.tinylog.Level getLevel(java.lang.String);
              public java.lang.String getFormatPattern();
              public java.util.Locale getLocale();
              public java.util.List<org.pmw.tinylog.writers.Writer> getWriters();
              public org.pmw.tinylog.WritingThread getWritingThread();
              public int getMaxStackTraceElements();
              org.pmw.tinylog.Configurator getConfigurator();
              boolean isOutputPossible(org.pmw.tinylog.Level);
              org.pmw.tinylog.writers.Writer[] getEffectiveWriters(org.pmw.tinylog.Level);
              java.util.List<org.pmw.tinylog.Token>[] getEffectiveFormatTokens(org.pmw.tinylog.Level);
              java.util.Set<org.pmw.tinylog.writers.LogEntryValue> getRequiredLogEntryValues(org.pmw.tinylog.Level);
              org.pmw.tinylog.StackTraceInformation getRequiredStackTraceInformation(org.pmw.tinylog.Level);
              static {};
            }
`