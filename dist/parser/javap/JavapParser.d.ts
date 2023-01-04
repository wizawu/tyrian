declare class JavapParser extends antlr4.Parser {
    static grammarFileName: string;
    static literalNames: (string | null)[];
    static symbolicNames: (string | null)[];
    static ruleNames: string[];
    constructor(input: any);
    _interp: any;
    ruleNames: string[];
    literalNames: (string | null)[];
    symbolicNames: (string | null)[];
    get atn(): any;
    compilationUnit(): CompilationUnitContext;
    sourceDeclaration(): SourceDeclarationContext;
    classOrInterface(): ClassOrInterfaceContext;
    classDeclaration(): ClassDeclarationContext;
    interfaceDeclaration(): InterfaceDeclarationContext;
    classModifier(): ClassModifierContext;
    interfaceModifier(): InterfaceModifierContext;
    typeList(): TypeListContext;
    type(): TypeContext;
    subType(): SubTypeContext;
    packageName(): PackageNameContext;
    typeArguments(): TypeArgumentsContext;
    typeArgument(): TypeArgumentContext;
    classBody(): ClassBodyContext;
    interfaceBody(): InterfaceBodyContext;
    modifier(): ModifierContext;
    classMember(): ClassMemberContext;
    interfaceMember(): InterfaceMemberContext;
    constructorDeclaration(): ConstructorDeclarationContext;
    fieldDeclaration(): FieldDeclarationContext;
    methodDeclaration(): MethodDeclarationContext;
    throwsException(): ThrowsExceptionContext;
    varargs(): VarargsContext;
    methodArguments(): MethodArgumentsContext;
    arrayBrackets(): ArrayBracketsContext;
}
declare namespace JavapParser {
    export const EOF: number;
    export const T__0: number;
    export const T__1: number;
    export const T__2: number;
    export const T__3: number;
    export const T__4: number;
    export const T__5: number;
    export const T__6: number;
    export const T__7: number;
    export const T__8: number;
    export const T__9: number;
    export const T__10: number;
    export const T__11: number;
    export const T__12: number;
    export const T__13: number;
    export const T__14: number;
    export const T__15: number;
    export const T__16: number;
    export const T__17: number;
    export const T__18: number;
    export const T__19: number;
    export const T__20: number;
    export const T__21: number;
    export const T__22: number;
    export const T__23: number;
    export const T__24: number;
    export const T__25: number;
    export const T__26: number;
    export const T__27: number;
    export const T__28: number;
    export const T__29: number;
    export const T__30: number;
    export const T__31: number;
    export const T__32: number;
    export const T__33: number;
    export const T__34: number;
    export const Identifier: number;
    export const WS: number;
    export const RULE_compilationUnit: number;
    export const RULE_sourceDeclaration: number;
    export const RULE_classOrInterface: number;
    export const RULE_classDeclaration: number;
    export const RULE_interfaceDeclaration: number;
    export const RULE_classModifier: number;
    export const RULE_interfaceModifier: number;
    export const RULE_typeList: number;
    export const RULE_type: number;
    export const RULE_subType: number;
    export const RULE_packageName: number;
    export const RULE_typeArguments: number;
    export const RULE_typeArgument: number;
    export const RULE_classBody: number;
    export const RULE_interfaceBody: number;
    export const RULE_modifier: number;
    export const RULE_classMember: number;
    export const RULE_interfaceMember: number;
    export const RULE_constructorDeclaration: number;
    export const RULE_fieldDeclaration: number;
    export const RULE_methodDeclaration: number;
    export const RULE_throwsException: number;
    export const RULE_varargs: number;
    export const RULE_methodArguments: number;
    export const RULE_arrayBrackets: number;
    export { CompilationUnitContext };
    export { SourceDeclarationContext };
    export { ClassOrInterfaceContext };
    export { ClassDeclarationContext };
    export { InterfaceDeclarationContext };
    export { ClassModifierContext };
    export { InterfaceModifierContext };
    export { TypeListContext };
    export { TypeContext };
    export { SubTypeContext };
    export { PackageNameContext };
    export { TypeArgumentsContext };
    export { TypeArgumentContext };
    export { ClassBodyContext };
    export { InterfaceBodyContext };
    export { ModifierContext };
    export { ClassMemberContext };
    export { InterfaceMemberContext };
    export { ConstructorDeclarationContext };
    export { FieldDeclarationContext };
    export { MethodDeclarationContext };
    export { ThrowsExceptionContext };
    export { VarargsContext };
    export { MethodArgumentsContext };
    export { ArrayBracketsContext };
}
export default JavapParser;
import antlr4 from "antlr4";
declare class CompilationUnitContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    sourceDeclaration: (i: any) => any;
    classOrInterface: (i: any) => any;
    EOF(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class SourceDeclarationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ClassOrInterfaceContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    classDeclaration(): any;
    interfaceDeclaration(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ClassDeclarationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type: (i: any) => any;
    classBody(): any;
    classModifier: (i: any) => any;
    typeList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class InterfaceDeclarationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type(): any;
    interfaceBody(): any;
    interfaceModifier: (i: any) => any;
    typeList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ClassModifierContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class InterfaceModifierContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class TypeListContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class TypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Identifier(): antlr4.Token;
    packageName(): any;
    typeArguments(): any;
    subType(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class SubTypeContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Identifier(): antlr4.Token;
    typeArguments(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class PackageNameContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    Identifier: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class TypeArgumentsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    arrayBrackets: (i: any) => any;
    typeArgument: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class TypeArgumentContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type: (i: any) => any;
    Identifier(): antlr4.Token;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ClassBodyContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    classMember: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class InterfaceBodyContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    interfaceMember: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ModifierContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ClassMemberContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructorDeclaration(): any;
    fieldDeclaration(): any;
    methodDeclaration(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class InterfaceMemberContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    fieldDeclaration(): any;
    methodDeclaration(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ConstructorDeclarationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type(): any;
    methodArguments(): any;
    modifier: (i: any) => any;
    typeArguments(): any;
    throwsException(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class FieldDeclarationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type(): any;
    Identifier(): antlr4.Token;
    modifier: (i: any) => any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class MethodDeclarationContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type(): any;
    Identifier(): antlr4.Token;
    methodArguments(): any;
    modifier: (i: any) => any;
    typeArguments(): any;
    throwsException(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ThrowsExceptionContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class VarargsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class MethodArgumentsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    typeList(): any;
    varargs(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare class ArrayBracketsContext extends antlr4.ParserRuleContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
