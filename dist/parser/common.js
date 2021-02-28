"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.qualifiedName = exports.safeNamespace = exports.memberModifier = exports.TypeAlias = void 0;
exports.TypeAlias = {
    "boolean": ["boolean", "java.lang.Boolean"],
    "byte": ["number", "java.lang.Byte"],
    "char": ["string", "java.lang.Character"],
    "double": ["number", "java.lang.Double"],
    "float": ["number", "java.lang.Float"],
    "int": ["number", "java.lang.Integer"],
    "long": ["number", "java.lang.Long"],
    "short": ["number", "java.lang.Short"],
    "java.lang.Boolean": ["boolean", "java.lang.Boolean"],
    "java.lang.Byte": ["number", "java.lang.Byte"],
    "java.lang.Character": ["string", "java.lang.Character"],
    "java.lang.Double": ["number", "java.lang.Double"],
    "java.lang.Float": ["number", "java.lang.Float"],
    "java.lang.Integer": ["number", "java.lang.Integer"],
    "java.lang.Long": ["number", "java.lang.Long"],
    "java.lang.Object": ["java.lang.Object", "any"],
    "java.lang.Short": ["number", "java.lang.Short"],
    "java.lang.String": ["java.lang.String", "string"],
};
function memberModifier(modifier) {
    if (modifier === "abstract")
        return modifier;
    if (modifier === "final")
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
        return __spreadArrays(packages, [type.Identifier().getText()]).join(".");
    }
    else {
        return (((_b = type.packageName()) === null || _b === void 0 ? void 0 : _b.getText().concat(".")) || "") + type.Identifier().getText();
    }
}
exports.qualifiedName = qualifiedName;
