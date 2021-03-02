"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
    var references = [];
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
                        " {\n(" + methodArgumentsToString(method.methodArguments(), ifs) + ")" +
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
            var content = __spreadArray(__spreadArray([], frontBuffer), endBuffer.reverse()).join("\n");
            fs_1.default.writeFileSync(path_1.default.join(typeRoot, filename), content + lambdaBuffer);
            console.debug(chalk_1.default.green("Generated " + filename));
            references.push(filename);
        }
    };
    for (var _i = 0, _b = context.classOrInterface(); _i < _b.length; _i++) {
        var c = _b[_i];
        _loop_1(c);
    }
    fs_1.default.writeFileSync(path_1.default.join(typeRoot, "index.d.ts"), references.map(function (it) { return "/// <reference path=\"" + it + "\" />"; }).sort().join("\n"));
    return true;
}
exports.generate = generate;
function declareConstructor(constructor, ifs) {
    var _a;
    var result = "";
    (_a = constructor.modifier()) === null || _a === void 0 ? void 0 : _a.forEach(function (it) { return result += common_1.memberModifier(it.getText()) + " "; });
    result += "constructor";
    result += "(" + methodArgumentsToString(constructor.methodArguments(), ifs) + ")";
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
function declareMethod(method, ifs, isClass) {
    var _a;
    if (isClass === void 0) { isClass = false; }
    var result = "";
    if (isClass) {
        (_a = method.modifier()) === null || _a === void 0 ? void 0 : _a.forEach(function (it) { return result += common_1.memberModifier(it.getText()) + " "; });
    }
    result += method.Identifier().getText();
    result += typeArgumentsToString(method.typeArguments());
    result += "(" + methodArgumentsToString(method.methodArguments(), ifs) + ")";
    result += ": " + typeToString(method.type(), true);
    return result;
}
function methodArgumentsToString(methodArgs, ifs) {
    var _a;
    var argTypes = function (type) { return common_1.isLambda(ifs, type) ?
        [typeToString(type), common_1.qualifiedName(type, true) + LambdaSuffix + typeArgumentsToString(type.typeArguments())] :
        common_1.typeAlias(typeToString(type)); };
    var result = [];
    for (var _i = 0, _b = (((_a = methodArgs.typeList()) === null || _a === void 0 ? void 0 : _a.type()) || []); _i < _b.length; _i++) {
        var type = _b[_i];
        result.push("arg" + result.length + ": " + argTypes(type).join(" | "));
    }
    if (methodArgs.varargs()) {
        result.push("...vargs: (" + argTypes(methodArgs.varargs().type()).join(" | ") + ")[]");
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
