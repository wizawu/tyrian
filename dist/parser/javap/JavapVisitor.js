"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Generated from Javap.g4 by ANTLR 4.9.3
// jshint ignore: start
const antlr4_1 = __importDefault(require("antlr4"));
// This class defines a complete generic visitor for a parse tree produced by JavapParser.
class JavapVisitor extends antlr4_1.default.tree.ParseTreeVisitor {
    // Visit a parse tree produced by JavapParser#compilationUnit.
    visitCompilationUnit(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#sourceDeclaration.
    visitSourceDeclaration(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#classOrInterface.
    visitClassOrInterface(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#classDeclaration.
    visitClassDeclaration(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#interfaceDeclaration.
    visitInterfaceDeclaration(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#classModifier.
    visitClassModifier(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#interfaceModifier.
    visitInterfaceModifier(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#typeList.
    visitTypeList(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#type.
    visitType(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#subType.
    visitSubType(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#packageName.
    visitPackageName(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#typeArguments.
    visitTypeArguments(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#typeArgument.
    visitTypeArgument(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#classBody.
    visitClassBody(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#interfaceBody.
    visitInterfaceBody(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#modifier.
    visitModifier(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#classMember.
    visitClassMember(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#interfaceMember.
    visitInterfaceMember(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#constructorDeclaration.
    visitConstructorDeclaration(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#fieldDeclaration.
    visitFieldDeclaration(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#methodDeclaration.
    visitMethodDeclaration(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#throwsException.
    visitThrowsException(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#varargs.
    visitVarargs(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#methodArguments.
    visitMethodArguments(ctx) {
        return this.visitChildren(ctx);
    }
    // Visit a parse tree produced by JavapParser#arrayBrackets.
    visitArrayBrackets(ctx) {
        return this.visitChildren(ctx);
    }
}
exports.default = JavapVisitor;
