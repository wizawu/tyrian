/// <reference path="../index.d.ts" />
"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var object_path_1 = require("object-path");
var UNSUPPORTED_MODIFIERS = [
    "abstract",
    "final",
    "native",
    "strictfp",
    "synchronized",
    "transient",
    "volatile",
];
function safeType(type) {
    return type.indexOf("java.util.function") === 0 ? "any" : type;
}
function nextToken(ctx) {
    var skip = 0;
    while (/\s/.test(ctx.source.charAt(ctx.offset + skip)))
        skip += 1;
    var char = ctx.source.charAt(ctx.offset + skip);
    if (["(", ")", ",", ";"].indexOf(char) >= 0) {
        return { value: char, skip: skip + 1 };
    }
    var value = "";
    var openAngles = 0;
    while (openAngles > 0 || /\S/.test(ctx.source.charAt(ctx.offset + skip))) {
        char = ctx.source.charAt(ctx.offset + skip);
        if (char === "<")
            openAngles += 1;
        if (char === ">")
            openAngles -= 1;
        if (openAngles <= 0 && ["(", ")", ",", ";"].indexOf(char) >= 0)
            break;
        if (char === "?") {
            skip += 1;
            var token = nextToken(__assign({}, ctx, { offset: ctx.offset + skip }));
            if (token.value === "extends" || token.value === "super") {
                // ? extends XXX
                // ? super XXX
                skip += token.skip;
                token = nextToken(__assign({}, ctx, { offset: ctx.offset + skip }));
                value += token.value;
                skip += token.skip;
            }
            else {
                // <?>
                value += "any";
            }
        }
        else {
            skip += 1;
            value += char;
        }
        if (ctx.source.charAt(ctx.offset + skip) === ">" && openAngles === 0)
            break;
    }
    return { value: value, skip: skip };
}
function parseParameters(ctx, line) {
    var token = nextToken(ctx);
    if (token.value !== "(")
        return line;
    for (var i = 0; true; token = nextToken(ctx)) {
        ctx.offset += token.skip;
        if (token.value === "(") {
            line += "(";
        }
        else if (token.value === ")") {
            line += ")";
            break;
        }
        else if (token.value === ",") {
            line += ", ";
        }
        else {
            if (token.value.substring(token.value.length - 3) === "...") {
                line += "...arg" + i + ": " + token.value.replace("...", "[]");
            }
            else {
                line += "arg" + i + ": " + safeType(token.value);
            }
            i += 1;
        }
    }
    return line;
}
function parseMember(ctx, isInterface, typeVariable) {
    var line = "    ";
    var type = "";
    var token = null;
    while (token = nextToken(ctx)) {
        ctx.offset += token.skip;
        if (["public", "protected", "static"].indexOf(token.value) >= 0) {
            if (!isInterface)
                line += token.value + " ";
        }
        else if (token.value.charAt(0) === "<") {
            typeVariable = token.value;
        }
        else if (UNSUPPORTED_MODIFIERS.indexOf(token.value) >= 0) {
            continue;
        }
        else {
            type = token.value;
            break;
        }
    }
    // static {}
    if (type === "{}")
        return __assign({}, ctx, { offset: ctx.offset + 1 });
    token = nextToken(ctx);
    var member = token.value;
    line += member + typeVariable;
    ctx.offset += token.skip;
    line = parseParameters(ctx, line);
    line += ": " + safeType(type);
    ctx.stack.push({ line: line, type: "MEMBER", name: member });
    while (ctx.source.charAt(ctx.offset) !== "\n")
        ctx.offset += 1;
    return ctx;
}
function parseClass(ctx, modifier) {
    var token = nextToken(ctx);
    var isInterface = token.value === "interface";
    if (token.value !== "class" && isInterface)
        return null;
    ctx.offset += token.skip;
    var line = modifier + token.value + " ";
    token = nextToken(ctx);
    ctx.offset += token.skip;
    var className = token.value;
    line += className.replace(/^(\w+\.)+/, "");
    while (token = nextToken(ctx)) {
        line += " " + token.value;
        ctx.offset += token.skip;
        if (token.value === "{")
            break;
    }
    ctx.stack.push({ line: line, type: "BEGIN", name: className });
    var memberModifier = "";
    var typeVariable = "";
    while (token = nextToken(ctx)) {
        if (token.value === "}") {
            ctx.offset += token.skip;
            ctx.stack.push({ line: "}\n", type: "END", name: className });
            break;
        }
        else if (token.value === "public" || token.value === "protected") {
            ctx.offset += token.skip;
            memberModifier = token.value + " ";
        }
        else if (token.value.charAt(0) === "<") {
            ctx.offset += token.skip;
            typeVariable = token.value;
        }
        else if ((token.value === className && ctx.source.charAt(ctx.offset + token.skip) === "(") ||
            (className.indexOf(token.value) === 0 && className.charAt(token.value.length) === "<")) {
            ctx.offset += token.skip;
            line = "    constructor";
            line = parseParameters(ctx, line);
            ctx.stack.push({ line: line.replace(/^(\s+)/, "$1" + memberModifier), type: "CONSTR" });
            memberModifier = "";
            while (ctx.source.charAt(ctx.offset) !== "\n")
                ctx.offset += 1;
        }
        else {
            ctx = parseMember(ctx, isInterface, typeVariable);
            if (!ctx)
                return null;
            if (!isInterface) {
                var lastItem = ctx.stack[ctx.stack.length - 1];
                lastItem.line = lastItem.line.replace(/^(\s+)/, "$1" + memberModifier);
            }
            memberModifier = "";
        }
    }
    return ctx;
}
function default_1(source, pkg) {
    var ctx = { source: source, offset: 0, stack: [] };
    var modifier = "";
    while (ctx.offset < source.length) {
        var token = nextToken(ctx);
        if (token.value === "final" || token.value === "public") {
            ctx.offset += token.skip;
        }
        else if (token.value === "abstract") {
            ctx.offset += token.skip;
            modifier += token.value + " ";
        }
        else if (token.value === "class" || token.value === "interface") {
            var context = parseClass(ctx, modifier);
            if (!context)
                break;
            modifier = "";
        }
        else {
            ctx.offset += token.skip;
        }
    }
    var buffer = [];
    var memberMap = {};
    var ignore = false;
    for (var i = 0; i < ctx.stack.length; i++) {
        var item = ctx.stack[i];
        switch (item.type) {
            case "BEGIN":
                buffer = [];
                memberMap = {};
                ignore = false;
                if (item.name.indexOf("-") >= 0)
                    ignore = true;
                if (item.name.indexOf("$") >= 0)
                    ignore = true;
                if (!ignore)
                    buffer.push(item.line);
                break;
            case "CONSTR":
                if (ignore)
                    break;
                if (memberMap["&"]) {
                    memberMap["&"] = "    constructor(...args: any[])";
                }
                else {
                    memberMap["&"] = item.line;
                }
                break;
            case "MEMBER":
                if (ignore)
                    break;
                if (item.name === "prototype")
                    break;
                if (memberMap[item.name]) {
                    if (/\bstatic\b/.test(item.line) || /\bstatic\b/.test(memberMap[item.name])) {
                        memberMap[item.name] = "    static " + item.name + "<T>(...args: any[]): any";
                    }
                    else {
                        memberMap[item.name] = "    " + item.name + "<T>(...args: any[]): any";
                    }
                }
                else {
                    memberMap[item.name] = item.line;
                }
                break;
            case "END":
                if (ignore)
                    break;
                Object.keys(memberMap).forEach(function (key) { return buffer.push(memberMap[key]); });
                buffer.push(item.line);
                var className = item.name.replace(/^(\w+\.)+/, "");
                var ns = item.name.substring(0, item.name.length - className.length - 1);
                object_path_1.ensureExists(pkg, ns, {});
                object_path_1.get(pkg, ns)[className] = buffer.join("\n").replace(/>\.\w+/g, ">");
                break;
            default:
                console.error(JSON.stringify(item));
                process.exit(1);
        }
    }
    return buffer.join("\n");
}
exports["default"] = default_1;
