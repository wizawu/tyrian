"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.parseClasses = exports.parse = void 0;
const antlr4_1 = __importDefault(require("antlr4"));
const utils_1 = require("../utils");
const visitor = __importStar(require("./visitor"));
const JavapLexer_1 = __importDefault(require("./javap/JavapLexer"));
const JavapParser_1 = __importDefault(require("./javap/JavapParser"));
const PARSE_CHUNK = 500;
function parse(classPaths, counter, classList, typeRoot) {
    const context = parseClasses(classPaths, classList.filter(it => !it.startsWith("kotlin.")));
    if (context === null)
        return false;
    const interfaces = context.classOrInterface()
        .map(it => it.interfaceDeclaration()).filter(it => it);
    for (const it of interfaces) {
        const className = visitor.qualifiedName(it.type());
        const count = it.interfaceBody().interfaceMember()
            .filter(it => it.methodDeclaration()).length;
        if (it.typeList()) {
            counter[className] = [count, ...it.typeList().type().map(it => visitor.qualifiedName(it))];
        }
        else {
            counter[className] = [count];
        }
    }
    if (typeRoot) {
        return visitor.generateTsDef(context, counter, typeRoot);
    }
    else {
        return true;
    }
}
exports.parse = parse;
function parseClasses(classPaths, classList) {
    const buffer = [];
    for (let i = 0; i < classList.length; i += PARSE_CHUNK) {
        const output = (0, utils_1.javap)(classPaths, classList.slice(i, i + PARSE_CHUNK));
        if (output === null) {
            return null;
        }
        else {
            buffer.push(output);
        }
    }
    const input = buffer.join("\n");
    const lexer = new JavapLexer_1.default(new antlr4_1.default.InputStream(input));
    const tokens = new antlr4_1.default.CommonTokenStream(lexer);
    const parser = new JavapParser_1.default(tokens);
    return parser.compilationUnit();
}
exports.parseClasses = parseClasses;
