"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var common_1 = require("./common");
var LambdaSuffix = "$$lambda";
function generate(context, ifs, typeRoot) {
    var _a;
    fs_1.default.mkdirSync(typeRoot, { recursive: true });
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
            filename = common_1.qualifiedName(type) + ".d.ts";
            // declare namespaces
            var nsDeclaration = declareNamespaces(type);
            frontBuffer.push(nsDeclaration[0]);
            endBuffer.push(nsDeclaration[1]);
            // class header
            var modifier = classModifier.some(function (it) { return it.getText() === "abstract"; }) ? "abstract " : "";
            frontBuffer.push(modifier + "class " + header(type, extend && [extend], implement === null || implement === void 0 ? void 0 : implement.type()) + " {");
            endBuffer.push("}\n");
            // generate members
            for (var _i = 0, _a = classBody.classMember(); _i < _a.length; _i++) {
                var member = _a[_i];
                if (member.constructorDeclaration()) {
                    frontBuffer.push("  " + declareConstructor(member.constructorDeclaration()));
                }
                else if (member.fieldDeclaration()) {
                    frontBuffer.push("  " + declareField(member.fieldDeclaration()));
                }
                else if (member.methodDeclaration()) {
                    frontBuffer.push("  " + declareMethod(member.methodDeclaration(), true));
                }
            }
        }
        else if (c.interfaceDeclaration()) {
            var type_1 = c.interfaceDeclaration().type();
            var extend = c.interfaceDeclaration().typeList();
            var interfaceBody = c.interfaceDeclaration().interfaceBody();
            filename = common_1.qualifiedName(type_1) + ".d.ts";
            // declare namespaces
            var nsDeclaration = declareNamespaces(type_1);
            frontBuffer.push(nsDeclaration[0]);
            endBuffer.push(nsDeclaration[1]);
            // generate lambda type
            if (common_1.isLambda(ifs, type_1)) {
                if ((_a = interfaceBody.interfaceMember()) === null || _a === void 0 ? void 0 : _a.some(function (it) { return it.methodDeclaration(); })) {
                    var method = interfaceBody.interfaceMember().filter(function (it) { return it.methodDeclaration(); })[0].methodDeclaration();
                    frontBuffer.push("interface " + type_1.Identifier().getText() + LambdaSuffix + typeArgumentsToString(type_1.typeArguments()) +
                        " {\n(" + methodArgumentsToString(method.methodArguments()) + ")" +
                        ": " + typeToString(method.type()) + "\n}\n");
                }
                else {
                    extend.type().filter(function (it) { return common_1.isLambda(ifs, it); }).forEach(function (it) {
                        frontBuffer.push("type " + type_1.Identifier().getText() + LambdaSuffix + typeArgumentsToString(type_1.typeArguments()) +
                            " = " + common_1.qualifiedName(it, true) + LambdaSuffix + typeArgumentsToString(it.typeArguments()) + "\n");
                    });
                }
            }
            // interface header
            frontBuffer.push("interface " + header(type_1, extend === null || extend === void 0 ? void 0 : extend.type()) + " {");
            endBuffer.push("}\n");
            // generate members
            for (var _b = 0, _c = interfaceBody.interfaceMember(); _b < _c.length; _b++) {
                var member = _c[_b];
                if (member.fieldDeclaration()) {
                    frontBuffer.push("  " + declareField(member.fieldDeclaration()));
                }
                else if (member.methodDeclaration()) {
                    frontBuffer.push("  " + declareMethod(member.methodDeclaration()));
                }
            }
        }
        else {
            console.error("Cannot find class or interface declaration");
            return "continue";
        }
        if (filename) {
            var content = __spreadArrays(frontBuffer, endBuffer.reverse()).join("\n");
            fs_1.default.writeFileSync(path_1.default.join(typeRoot, filename), content + lambdaBuffer);
            console.debug(chalk_1.default.green("Generated " + filename));
        }
    };
    for (var _i = 0, _b = context.classOrInterface(); _i < _b.length; _i++) {
        var c = _b[_i];
        _loop_1(c);
    }
    return true;
}
exports.generate = generate;
function declareConstructor(constructor) {
    var _a;
    var result = "";
    (_a = constructor.modifier()) === null || _a === void 0 ? void 0 : _a.forEach(function (it) { return result += common_1.memberModifier(it.getText()) + " "; });
    result += "constructor";
    result += "(" + methodArgumentsToString(constructor.methodArguments()) + ")";
    return result;
}
function declareField(field) {
    var _a;
    var result = "";
    (_a = field.modifier()) === null || _a === void 0 ? void 0 : _a.forEach(function (it) { return result += common_1.memberModifier(it.getText(), true) + " "; });
    result += field.Identifier().getText();
    result += ": " + typeToString(field.type());
    return result;
}
function declareMethod(method, isClass) {
    var _a;
    if (isClass === void 0) { isClass = false; }
    var result = "";
    if (isClass) {
        (_a = method.modifier()) === null || _a === void 0 ? void 0 : _a.forEach(function (it) { return result += common_1.memberModifier(it.getText()) + " "; });
    }
    result += method.Identifier().getText();
    result += typeArgumentsToString(method.typeArguments());
    result += "(" + methodArgumentsToString(method.methodArguments()) + ")";
    result += ": " + typeToString(method.type(), true);
    return result;
}
function methodArgumentsToString(methodArgs) {
    var _a;
    var result = [];
    for (var _i = 0, _b = (((_a = methodArgs.typeList()) === null || _a === void 0 ? void 0 : _a.type()) || []); _i < _b.length; _i++) {
        var type = _b[_i];
        result.push("arg" + result.length + ": " + typeToString(type));
    }
    if (methodArgs.varargs()) {
        result.push("...arg" + result.length + ": " + typeToString(methodArgs.varargs().type()) + "[]");
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
function typeArgumentToString(typeArg) {
    var _a, _b;
    if (((_a = typeArg.getChild(1)) === null || _a === void 0 ? void 0 : _a.getText()) === "extends") {
        if (typeArg.Identifier()) {
            return typeArg.Identifier().getText() + " extends " + typeToString(typeArg.type());
        }
        else {
            return typeToString(typeArg.type());
        }
    }
    else if (((_b = typeArg.getChild(1)) === null || _b === void 0 ? void 0 : _b.getText()) === "super") {
        return "unknown";
    }
    else if (typeArg.type()) {
        return typeToString(typeArg.type());
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
        return common_1.typeAlias(common_1.qualifiedName(type, true))[0] + typeArgumentsToString(type.typeArguments());
    }
    else {
        return common_1.qualifiedName(type, true) + typeArgumentsToString(type.typeArguments());
    }
}
function declareNamespaces(type) {
    var result = ["", ""];
    for (var _i = 0, _a = type.packageName().Identifier(); _i < _a.length; _i++) {
        var id = _a[_i];
        var ns = common_1.safeNamespace(id.getText());
        result[0] += "namespace " + ns + " {\n";
        result[1] += "}\n";
    }
    return result[0] ? ["declare " + result[0], result[1]] : result;
}
