"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
var antlr4_1 = __importDefault(require("antlr4"));
var javap = __importStar(require("./javap"));
var JavapLexer_1 = require("../grammar/JavapLexer");
var JavapParser_1 = require("../grammar/JavapParser");
var PARSE_CHUNK = 500;
function parse(classPaths, interfaceCount, classList, typeRoot) {
    var buffer = [];
    for (var i = 0; i < classList.length; i += PARSE_CHUNK) {
        var output = javap.disassemble(classPaths, classList.slice(i, i + PARSE_CHUNK));
        if (output === null) {
            return false;
        }
        else {
            buffer.push(output);
        }
    }
    var input = buffer.join("\n");
    var lexer = new JavapLexer_1.JavapLexer(new antlr4_1.default.InputStream(input));
    var tokens = new antlr4_1.default.CommonTokenStream(lexer);
    var parser = new JavapParser_1.JavapParser(tokens);
    var context = parser.compilationUnit();
    var interfaces = context.classOrInterface()
        .map(function (it) { return it.interfaceDeclaration(); }).filter(function (it) { return it; });
    interfaces.forEach(function (it) {
        var className = it.type()[0].packageName().getText() + "." + it.type()[0].Identifier().getText();
        var count = it.interfaceBody().interfaceMember()
            .map(function (it) { return it.methodDeclaration(); }).filter(function (it) { return it; }).length;
        interfaceCount[className] = count;
    });
    if (typeRoot) {
    }
    return true;
}
exports.parse = parse;
