"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_path_1 = require("object-path");
var const_1 = require("../const");
var lambda = require("./lambda");
var UNSUPPORTED_MODIFIERS = [
    "final",
    "native",
    "strictfp",
    "synchronized",
    "transient",
    "volatile",
];
function safeType(type, isParameter) {
    if (/>\./.test(type))
        return "any";
    if (type === "java.lang.String")
        return isParameter ? type + " | string" : "string";
    if (type === "java.lang.Boolean")
        return isParameter ? type + " | boolean" : "boolean";
    if (/^java\.util\.function\.Consumer<\w+>$/.test(type) && isParameter) {
        return type.replace("Consumer", "Consumer$$$Lambda");
    }
    var classID = type.indexOf("<") < 0 ? type : type.substring(0, type.indexOf("<"));
    if (isParameter && lambda.isLambda[classID]) {
        return type + " | " + type.replace(new RegExp(("(" + classID + ")").replace(/\$/g, "\\$")), "$1$$$Lambda");
    }
    else {
        return type;
    }
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
                skip += token.skip;
                token = nextToken(__assign({}, ctx, { offset: ctx.offset + skip }));
                value += token.value;
                skip += token.skip;
            }
            else {
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
                line += "arg" + i + ": " + safeType(token.value, true);
            }
            i += 1;
        }
    }
    return line;
}
function parseMember(ctx, isInterface, typeVariable) {
    var line = "    ";
    var type = "";
    var token = { value: "", skip: 0 };
    while (token = nextToken(ctx)) {
        ctx.offset += token.skip;
        if (token.value.charAt(0) === "<") {
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
    if (token.value !== "class" && !isInterface)
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
        else if (["public", "protected", "static", "abstract", "final"].indexOf(token.value) >= 0) {
            ctx.offset += token.skip;
            memberModifier += (token.value === "final" ? "readonly" : token.value) + " ";
        }
        else if (token.value.charAt(0) === "<") {
            ctx.offset += token.skip;
            typeVariable = token.value;
        }
        else if ((token.value === className ||
            className.indexOf(token.value) === 0 && className.charAt(token.value.length) === "<") &&
            ctx.source.charAt(ctx.offset + token.skip) === "(") {
            ctx.offset += token.skip;
            line = "    constructor";
            line = parseParameters(ctx, line);
            ctx.stack.push({ line: line.replace(/^(\s+)/, "$1" + memberModifier), type: "CONSTR", name: "" });
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
                if (lastItem.line.indexOf("(") >= 0) {
                    memberModifier = memberModifier.replace(/\breadonly /, "");
                }
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
            var ctx1 = parseClass(ctx, modifier);
            if (!ctx1)
                break;
            ctx = ctx1;
            modifier = "";
        }
        else {
            ctx.offset += token.skip;
        }
    }
    var buffer = [];
    var ignore = false;
    var isInterface = false;
    var isAbstractClass = false;
    var _loop_1 = function (i) {
        var item = ctx.stack[i];
        switch (item.type) {
            case "BEGIN":
                buffer = [];
                ignore = false;
                isInterface = /\binterface\b/.test(item.line);
                isAbstractClass = /\babstract\b/.test(item.line) && !isInterface;
                if (item.name.indexOf("-") >= 0)
                    ignore = true;
                if (/>\.\w+/.test(item.line))
                    ignore = true;
                if (!ignore)
                    buffer.push(item);
                break;
            case "CONSTR":
                if (!ignore)
                    buffer.push(item);
                break;
            case "MEMBER":
                if (!ignore && item.name !== "prototype" && item.line.indexOf("constructor:") < 0) {
                    buffer.push(item);
                }
                break;
            case "END":
                if (!ignore) {
                    if (!isInterface)
                        buffer.push({ line: "    public static class: java.lang.Class<any>" });
                    buffer.push(item);
                    var className = item.name.replace(/^(\w+\.)+/, "");
                    var classID = className.replace(/<.+$/, "");
                    var ns_1 = item.name.substring(0, item.name.length - className.length - 1);
                    object_path_1.ensureExists(pkg, ns_1, {});
                    if (ns_1 === "java.lang" && className === "Object") {
                        object_path_1.get(pkg, ns_1, {})[className] = "type Object = any";
                    }
                    else {
                        var buffer0line = buffer[0].line, templateRegex = /<[^<>]+ extends/;
                        while (buffer0line.search(templateRegex) >= 0) {
                            var openAngles = 1, start = buffer0line.search(templateRegex), end = 0;
                            for (var i_1 = start + 1; i_1 < buffer0line.length; i_1++) {
                                if (buffer0line.charAt(i_1) === "<") {
                                    openAngles += 1;
                                }
                                else if (buffer0line.charAt(i_1) === ">") {
                                    openAngles -= 1;
                                    if (openAngles === 0) {
                                        end = i_1 + 1;
                                        break;
                                    }
                                }
                            }
                            buffer0line = buffer0line.substring(0, start) + buffer0line.substring(end);
                        }
                        var countUnimplMethods_1 = 0, methodIndex_1 = 1;
                        if (isInterface && /\bextends\b/.test(buffer0line)) {
                            buffer0line.substring(buffer0line.indexOf("extends") + "extends".length, buffer0line.indexOf("{")).split(",").map(function (i) { return i.trim(); }).forEach(function (name) {
                                name = name.replace(/<.+$/, "");
                                if (lambda.isLambda.hasOwnProperty(name)) {
                                    countUnimplMethods_1 += lambda.isLambda[name];
                                }
                                else if (lambda.isLambda.hasOwnProperty(ns_1 + "." + name)) {
                                    countUnimplMethods_1 += lambda.isLambda[ns_1 + "." + name];
                                }
                                else {
                                    countUnimplMethods_1 += 2;
                                }
                            });
                        }
                        buffer.slice(1).forEach(function (b, i) {
                            if (b.line.indexOf("(") >= 0) {
                                if (isInterface && !/\bstatic\b/.test(b.line)) {
                                    countUnimplMethods_1 += 1;
                                    methodIndex_1 = i + 1;
                                }
                                if (isAbstractClass && /\babstract\b/.test(b.line)) {
                                    countUnimplMethods_1 += 1;
                                    methodIndex_1 = i + 1;
                                }
                            }
                        });
                        if ((isInterface || isAbstractClass) && countUnimplMethods_1 === 1) {
                            buffer.push({
                                line: buffer[0].line.replace(classID, classID + "$$$Lambda")
                                    .replace(/\babstract /, "").replace(/\bclass /, "interface ")
                                    .replace(/\bextends [^{]+$/, "")
                                    .replace(/\bimplements [^{]+$/, "")
                            });
                            buffer.push({ line: buffer[methodIndex_1].line.replace(/\S[^(]+/, "") });
                            buffer.push({ line: "}\n" });
                            lambda.addLambda(ns_1 + "." + classID);
                        }
                        else if (isInterface && countUnimplMethods_1 === 0) {
                            lambda.addLambda(ns_1 + "." + classID, 0);
                        }
                        object_path_1.get(pkg, ns_1, {})[className] = buffer.map(function (b) { return b.line; }).join("\n");
                    }
                }
                break;
            default:
                console.error(JSON.stringify(item));
                process.exit(const_1.EXIT_STATUS.PARSE_CLASS_ERROR);
        }
    };
    for (var i = 0; i < ctx.stack.length; i++) {
        _loop_1(i);
    }
    return buffer.join("\n");
}
exports.default = default_1;
