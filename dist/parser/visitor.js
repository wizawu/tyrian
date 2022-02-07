"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLambda = exports.qualifiedName = exports.convertNamespace = exports.convertMemberModifier = exports.declareNamespaces = exports.typeToString = exports.typeArgumentsToString = exports.header = exports.declareMethod = exports.declareField = exports.declareConstructor = exports.generateTsDef = void 0;
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var LambdaSuffix = "$$lambda";
function generateTsDef(context, ifs, typeRoot) {
    var _a;
    fs_1.default.mkdirSync(typeRoot, { recursive: true });
    var references = [];
    var topNamespaces = {};
    var _loop_1 = function (c) {
        var filename = "";
        var frontBuffer = [];
        var endBuffer = [];
        var lambdaBuffer = "";
        if (c.classDeclaration()) {
            var classModifier = c.classDeclaration().classModifier();
            var type = c.classDeclaration().type(0);
            var extend = c.classDeclaration().type(1);
            var implement = c.classDeclaration().typeList();
            var classBody = c.classDeclaration().classBody();
            filename = qualifiedName(type) + ".d.ts";
            topNamespaces[type.packageName().Identifier(0).getText()] = true;
            // declare namespaces
            var nsDeclaration = declareNamespaces(type);
            frontBuffer.push(nsDeclaration[0]);
            endBuffer.push(nsDeclaration[1]);
            // class header
            var modifier = classModifier.some(function (it) { return it.getText() === "abstract"; }) ? "abstract " : "";
            frontBuffer.push(modifier + "class " + header(type, extend && [extend], implement === null || implement === void 0 ? void 0 : implement.type()) + " {");
            endBuffer.push("}\n");
            // generate members
            for (var _c = 0, _d = classBody.classMember(); _c < _d.length; _c++) {
                var member = _d[_c];
                if (member.constructorDeclaration()) {
                    frontBuffer.push("  " + declareConstructor(member.constructorDeclaration(), ifs));
                }
                else if (member.fieldDeclaration()) {
                    frontBuffer.push("  " + declareField(member.fieldDeclaration()));
                }
                else if (member.methodDeclaration()) {
                    frontBuffer.push("  " + declareMethod(member.methodDeclaration(), ifs, true));
                }
            }
        }
        else if (c.interfaceDeclaration()) {
            var type_1 = c.interfaceDeclaration().type();
            var extend = c.interfaceDeclaration().typeList();
            var interfaceBody = c.interfaceDeclaration().interfaceBody();
            filename = qualifiedName(type_1) + ".d.ts";
            topNamespaces[type_1.packageName().Identifier(0).getText()] = true;
            // declare namespaces
            var nsDeclaration = declareNamespaces(type_1);
            frontBuffer.push(nsDeclaration[0]);
            endBuffer.push(nsDeclaration[1]);
            // generate lambda type
            if (isLambda(ifs, type_1)) {
                if ((_a = interfaceBody.interfaceMember()) === null || _a === void 0 ? void 0 : _a.some(function (it) { return it.methodDeclaration(); })) {
                    var method = interfaceBody.interfaceMember().filter(function (it) { return it.methodDeclaration(); })[0].methodDeclaration();
                    frontBuffer.push("interface " + type_1.Identifier().getText() + LambdaSuffix + typeArgumentsToString(type_1.typeArguments()) +
                        " {\n(" + methodArgumentsToString(method.methodArguments(), ifs) + ")" +
                        ": " + methodArgumentToString(method.type(), ifs) + "\n}\n");
                }
                else {
                    extend.type().filter(function (it) { return isLambda(ifs, it); }).forEach(function (it) {
                        frontBuffer.push("type " + type_1.Identifier().getText() + LambdaSuffix + typeArgumentsToString(type_1.typeArguments()) +
                            " = " + qualifiedName(it, true) + LambdaSuffix + typeArgumentsToString(it.typeArguments()) + "\n");
                    });
                }
            }
            // interface header
            frontBuffer.push("interface " + header(type_1, extend === null || extend === void 0 ? void 0 : extend.type()) + " {");
            endBuffer.push("}\n");
            // generate members
            for (var _e = 0, _f = interfaceBody.interfaceMember(); _e < _f.length; _e++) {
                var member = _f[_e];
                if (member.fieldDeclaration()) {
                    frontBuffer.push("  " + declareField(member.fieldDeclaration()));
                }
                else if (member.methodDeclaration()) {
                    frontBuffer.push("  " + declareMethod(member.methodDeclaration(), ifs));
                }
            }
        }
        else {
            console.error("Cannot find class or interface declaration");
            return "continue";
        }
        if (filename) {
            var content = __spreadArray(__spreadArray([], frontBuffer, true), endBuffer.reverse(), true).join("\n");
            fs_1.default.writeFileSync(path_1.default.join(typeRoot, filename), content + lambdaBuffer);
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write("Generated lib/@types/".concat(filename));
            references.push(filename);
        }
    };
    for (var _i = 0, _b = context.classOrInterface(); _i < _b.length; _i++) {
        var c = _b[_i];
        _loop_1(c);
    }
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    fs_1.default.writeFileSync(path_1.default.join(typeRoot, "index.d.ts"), references.map(function (it) { return "/// <reference path=\"".concat(it, "\" />"); }).sort().join("\n"));
    console.log(chalk_1.default.green("Generated " + path_1.default.join(typeRoot, "index.d.ts")));
    fs_1.default.writeFileSync(path_1.default.join(typeRoot, "namespace.json"), JSON.stringify(topNamespaces, null, 2));
    console.log(chalk_1.default.green("Generated " + path_1.default.join(typeRoot, "namespace.json")));
    return true;
}
exports.generateTsDef = generateTsDef;
function declareConstructor(constructor, ifs) {
    var _a;
    var result = "";
    (_a = constructor.modifier()) === null || _a === void 0 ? void 0 : _a.forEach(function (it) { return result += convertMemberModifier(it.getText()) + " "; });
    result += "constructor";
    result += "(" + methodArgumentsToString(constructor.methodArguments(), ifs) + ")";
    return result;
}
exports.declareConstructor = declareConstructor;
function declareField(field) {
    var _a;
    if (field.Identifier().getText() === "constructor")
        return "";
    var result = "";
    (_a = field.modifier()) === null || _a === void 0 ? void 0 : _a.forEach(function (it) { return result += convertMemberModifier(it.getText(), true) + " "; });
    result += field.Identifier().getText();
    result += ": " + typeToString(field.type());
    return result;
}
exports.declareField = declareField;
function declareMethod(method, ifs, isClass) {
    var _a;
    if (isClass === void 0) { isClass = false; }
    var result = "";
    if (isClass) {
        (_a = method.modifier()) === null || _a === void 0 ? void 0 : _a.forEach(function (it) { return result += convertMemberModifier(it.getText()) + " "; });
    }
    result += method.Identifier().getText();
    result += typeArgumentsToString(method.typeArguments());
    result += "(" + methodArgumentsToString(method.methodArguments(), ifs) + ")";
    result += ": " + typeToString(method.type(), true);
    return result;
}
exports.declareMethod = declareMethod;
function methodArgumentToString(type, ifs) {
    if (isLambda(ifs, type)) {
        return [
            typeToString(type),
            qualifiedName(type, true) + LambdaSuffix + typeArgumentsToString(type.typeArguments())
        ].join(" | ");
    }
    else {
        return typeAlias(qualifiedName(type, true)).map(function (it) {
            return it + typeArgumentsToString(type.typeArguments());
        }).join(" | ");
    }
}
function methodArgumentsToString(methodArgs, ifs) {
    var _a;
    var result = [];
    for (var _i = 0, _b = (((_a = methodArgs.typeList()) === null || _a === void 0 ? void 0 : _a.type()) || []); _i < _b.length; _i++) {
        var type = _b[_i];
        result.push("arg" + result.length + ": " + methodArgumentToString(type, ifs));
    }
    if (methodArgs.varargs()) {
        result.push("...vargs: (" + methodArgumentToString(methodArgs.varargs().type(), ifs) + ")[]");
    }
    return result.join(", ");
}
function header(type, extend, implement) {
    var result = type.Identifier().getText() + typeArgumentsToString(type.typeArguments());
    if (extend && extend.length) {
        result += " extends " + extend.map(function (it) { return typeToString(it); }).join(", ");
    }
    if (implement && implement.length) {
        result += " implements " + implement.map(function (it) { return typeToString(it); }).join(", ");
    }
    return result;
}
exports.header = header;
function typeArgumentsToString(typeArgs) {
    var _a;
    if (!typeArgs) {
        return "";
    }
    else if (typeArgs.typeArgument().length) {
        var args = typeArgs.typeArgument().map(function (it) { return typeArgumentToString(it); });
        return "<" + args.join(",") + ">" + (((_a = typeArgs.arrayBrackets()) === null || _a === void 0 ? void 0 : _a.map(function (it) { return it.getText(); }).join("")) || "");
    }
    else {
        return typeArgs.getText();
    }
}
exports.typeArgumentsToString = typeArgumentsToString;
function typeArgumentToString(typeArg) {
    var _a, _b;
    if (((_a = typeArg.getChild(1)) === null || _a === void 0 ? void 0 : _a.getText()) === "extends") {
        if (typeArg.Identifier()) {
            return typeArg.Identifier().getText() + " extends " +
                typeArg.type().map(function (it) { return typeToString(it); }).join(" & ");
        }
        else {
            return typeArg.type().map(function (it) { return typeToString(it); }).join(" & ");
        }
    }
    else if (((_b = typeArg.getChild(1)) === null || _b === void 0 ? void 0 : _b.getText()) === "super") {
        return "unknown";
    }
    else if (typeArg.type(0)) {
        return typeToString(typeArg.type(0));
    }
    else {
        return "unknown";
    }
}
function typeToString(type, alias) {
    if (alias === void 0) { alias = false; }
    if (type.subType()) {
        return "unknown";
    }
    else if (alias) {
        return typeAlias(qualifiedName(type, true))[0] + typeArgumentsToString(type.typeArguments());
    }
    else {
        return qualifiedName(type, true) + typeArgumentsToString(type.typeArguments());
    }
}
exports.typeToString = typeToString;
function declareNamespaces(type) {
    var result = ["", ""];
    for (var _i = 0, _a = type.packageName().Identifier(); _i < _a.length; _i++) {
        var id = _a[_i];
        var ns = convertNamespace(id.getText());
        result[0] += "namespace ".concat(ns, " {\n");
        result[1] += "}\n";
    }
    return result[0] ? ["declare " + result[0], result[1]] : result;
}
exports.declareNamespaces = declareNamespaces;
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
        case "java.lang.CharSequence": return ["string", "java.lang.CharSequence"];
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
// Convert member modifier
function convertMemberModifier(modifier, isField) {
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
exports.convertMemberModifier = convertMemberModifier;
// Append $ to namespace if it is a typescript keyword
function convertNamespace(namespace) {
    var invalid = ["debugger", "enum", "export", "function", "in", "is", "var"];
    return invalid.indexOf(namespace) < 0 ? namespace : (namespace + "$");
}
exports.convertNamespace = convertNamespace;
function qualifiedName(type, safe) {
    var _a, _b;
    if (safe === void 0) { safe = false; }
    if (safe) {
        var packages = ((_a = type.packageName()) === null || _a === void 0 ? void 0 : _a.Identifier().map(function (it) { return convertNamespace(it.getText()); })) || [];
        return __spreadArray(__spreadArray([], packages, true), [type.Identifier().getText()], false).join(".");
    }
    else {
        return (((_b = type.packageName()) === null || _b === void 0 ? void 0 : _b.getText().concat(".")) || "") + type.Identifier().getText();
    }
}
exports.qualifiedName = qualifiedName;
// Return if an interface can be represented with a lambda expression
function isLambda(stat, type) {
    var count = 0;
    var bfs = [qualifiedName(type)];
    if (bfs[0] === "java.util.function.Consumer")
        return true;
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
