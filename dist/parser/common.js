"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLambda = exports.qualifiedName = exports.safeNamespace = exports.memberModifier = exports.typeAlias = void 0;
function typeAlias(type) {
    switch (type) {
        case "boolean": return ["boolean", "java.lang.Boolean"];
        case "byte": return ["number", "java.lang.Byte"];
        case "char": return ["string", "java.lang.Character"];
        case "double": return ["number", "java.lang.Double"];
        case "float": return ["number", "java.lang.Float"];
        case "int": return ["number", "java.lang.Integer"];
        case "long": return ["number", "java.lang.Long"];
        case "short": return ["number", "java.lang.Short"];
        case "java.lang.Boolean": return ["boolean", "java.lang.Boolean"];
        case "java.lang.Byte": return ["number", "java.lang.Byte"];
        case "java.lang.Character": return ["string", "java.lang.Character"];
        case "java.lang.Double": return ["number", "java.lang.Double"];
        case "java.lang.Float": return ["number", "java.lang.Float"];
        case "java.lang.Integer": return ["number", "java.lang.Integer"];
        case "java.lang.Long": return ["number", "java.lang.Long"];
        case "java.lang.Object": return ["java.lang.Object", "any"];
        case "java.lang.Short": return ["number", "java.lang.Short"];
        case "java.lang.String": return ["java.lang.String", "string"];
        default: return [type];
    }
}
exports.typeAlias = typeAlias;
function memberModifier(modifier, isField) {
    if (isField === void 0) { isField = false; }
    if (modifier === "abstract")
        return modifier;
    if (modifier === "final" && isField)
        return "readonly";
    if (modifier === "private")
        return modifier;
    if (modifier === "protected")
        return modifier;
    if (modifier === "public")
        return modifier;
    if (modifier === "static")
        return modifier;
    return "";
}
exports.memberModifier = memberModifier;
// Append $ to namespace if it is a typescript keyword
function safeNamespace(namespace) {
    var invalid = ["debugger", "enum", "export", "function", "in", "is"];
    return invalid.indexOf(namespace) < 0 ? namespace : (namespace + "$");
}
exports.safeNamespace = safeNamespace;
function qualifiedName(type, safe) {
    var _a, _b;
    if (safe === void 0) { safe = false; }
    if (safe) {
        var packages = ((_a = type.packageName()) === null || _a === void 0 ? void 0 : _a.Identifier().map(function (it) { return safeNamespace(it.getText()); })) || [];
        return __spreadArray(__spreadArray([], packages), [type.Identifier().getText()]).join(".");
    }
    else {
        return (((_b = type.packageName()) === null || _b === void 0 ? void 0 : _b.getText().concat(".")) || "") + type.Identifier().getText();
    }
}
exports.qualifiedName = qualifiedName;
function isLambda(stat, type) {
    var count = 0;
    var bfs = [qualifiedName(type)];
    for (var i = 0; i < bfs.length; i++) {
        var current = bfs[i];
        if (stat[current]) {
            count += stat[current][0];
            stat[current].slice(1).forEach(function (it) {
                if (bfs.indexOf(it) < 0)
                    bfs.push(it);
            });
        }
    }
    return count === 1;
}
exports.isLambda = isLambda;
