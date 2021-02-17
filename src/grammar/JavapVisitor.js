// Generated from Javap.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by JavapParser.

function JavapVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

JavapVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
JavapVisitor.prototype.constructor = JavapVisitor;

// Visit a parse tree produced by JavapParser#compilationUnit.
JavapVisitor.prototype.visitCompilationUnit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#sourceDeclaration.
JavapVisitor.prototype.visitSourceDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#classOrInterface.
JavapVisitor.prototype.visitClassOrInterface = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#classDeclaration.
JavapVisitor.prototype.visitClassDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#interfaceDeclaration.
JavapVisitor.prototype.visitInterfaceDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#classModifier.
JavapVisitor.prototype.visitClassModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#interfaceModifier.
JavapVisitor.prototype.visitInterfaceModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#typeList.
JavapVisitor.prototype.visitTypeList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#type.
JavapVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#packageName.
JavapVisitor.prototype.visitPackageName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#typeArguments.
JavapVisitor.prototype.visitTypeArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#typeArgument.
JavapVisitor.prototype.visitTypeArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#classBody.
JavapVisitor.prototype.visitClassBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#interfaceBody.
JavapVisitor.prototype.visitInterfaceBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#modifier.
JavapVisitor.prototype.visitModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#classMember.
JavapVisitor.prototype.visitClassMember = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#interfaceMember.
JavapVisitor.prototype.visitInterfaceMember = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#constructorDeclaration.
JavapVisitor.prototype.visitConstructorDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#fieldDeclaration.
JavapVisitor.prototype.visitFieldDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#methodDeclaration.
JavapVisitor.prototype.visitMethodDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#throwsException.
JavapVisitor.prototype.visitThrowsException = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#varargs.
JavapVisitor.prototype.visitVarargs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JavapParser#methodArguments.
JavapVisitor.prototype.visitMethodArguments = function(ctx) {
  return this.visitChildren(ctx);
};



exports.JavapVisitor = JavapVisitor;