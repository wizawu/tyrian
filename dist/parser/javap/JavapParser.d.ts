export function JavapParser(input: any): this;
export class JavapParser {
    constructor(input: any);
    _interp: any;
    ruleNames: string[];
    literalNames: (string | null)[];
    symbolicNames: (string | null)[];
    constructor: typeof JavapParser;
    get atn(): any;
    compilationUnit(): CompilationUnitContext;
    state: number | undefined;
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
export namespace JavapParser {
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
declare function CompilationUnitContext(parser: any, parent: any, invokingState: any): this;
declare class CompilationUnitContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof CompilationUnitContext;
    sourceDeclaration(i: any): any;
    classOrInterface(i: any): any;
    EOF(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function SourceDeclarationContext(parser: any, parent: any, invokingState: any): this;
declare class SourceDeclarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof SourceDeclarationContext;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function ClassOrInterfaceContext(parser: any, parent: any, invokingState: any): this;
declare class ClassOrInterfaceContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof ClassOrInterfaceContext;
    classDeclaration(): any;
    interfaceDeclaration(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function ClassDeclarationContext(parser: any, parent: any, invokingState: any): this;
declare class ClassDeclarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof ClassDeclarationContext;
    type(i: any): any;
    classBody(): any;
    classModifier(i: any): any;
    typeList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function InterfaceDeclarationContext(parser: any, parent: any, invokingState: any): this;
declare class InterfaceDeclarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof InterfaceDeclarationContext;
    type(): any;
    interfaceBody(): any;
    interfaceModifier(i: any): any;
    typeList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function ClassModifierContext(parser: any, parent: any, invokingState: any): this;
declare class ClassModifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof ClassModifierContext;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function InterfaceModifierContext(parser: any, parent: any, invokingState: any): this;
declare class InterfaceModifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof InterfaceModifierContext;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function TypeListContext(parser: any, parent: any, invokingState: any): this;
declare class TypeListContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof TypeListContext;
    type(i: any): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function TypeContext(parser: any, parent: any, invokingState: any): this;
declare class TypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof TypeContext;
    Identifier(): any;
    packageName(): any;
    typeArguments(): any;
    subType(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function SubTypeContext(parser: any, parent: any, invokingState: any): this;
declare class SubTypeContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof SubTypeContext;
    Identifier(): any;
    typeArguments(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function PackageNameContext(parser: any, parent: any, invokingState: any): this;
declare class PackageNameContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof PackageNameContext;
    Identifier(i: any): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function TypeArgumentsContext(parser: any, parent: any, invokingState: any): this;
declare class TypeArgumentsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof TypeArgumentsContext;
    arrayBrackets(i: any): any;
    typeArgument(i: any): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function TypeArgumentContext(parser: any, parent: any, invokingState: any): this;
declare class TypeArgumentContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof TypeArgumentContext;
    type(i: any): any;
    Identifier(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function ClassBodyContext(parser: any, parent: any, invokingState: any): this;
declare class ClassBodyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof ClassBodyContext;
    classMember(i: any): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function InterfaceBodyContext(parser: any, parent: any, invokingState: any): this;
declare class InterfaceBodyContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof InterfaceBodyContext;
    interfaceMember(i: any): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function ModifierContext(parser: any, parent: any, invokingState: any): this;
declare class ModifierContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof ModifierContext;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function ClassMemberContext(parser: any, parent: any, invokingState: any): this;
declare class ClassMemberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof ClassMemberContext;
    constructorDeclaration(): any;
    fieldDeclaration(): any;
    methodDeclaration(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function InterfaceMemberContext(parser: any, parent: any, invokingState: any): this;
declare class InterfaceMemberContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof InterfaceMemberContext;
    fieldDeclaration(): any;
    methodDeclaration(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function ConstructorDeclarationContext(parser: any, parent: any, invokingState: any): this;
declare class ConstructorDeclarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof ConstructorDeclarationContext;
    type(): any;
    methodArguments(): any;
    modifier(i: any): any;
    typeArguments(): any;
    throwsException(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function FieldDeclarationContext(parser: any, parent: any, invokingState: any): this;
declare class FieldDeclarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof FieldDeclarationContext;
    type(): any;
    Identifier(): any;
    modifier(i: any): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function MethodDeclarationContext(parser: any, parent: any, invokingState: any): this;
declare class MethodDeclarationContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof MethodDeclarationContext;
    type(): any;
    Identifier(): any;
    methodArguments(): any;
    modifier(i: any): any;
    typeArguments(): any;
    throwsException(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function ThrowsExceptionContext(parser: any, parent: any, invokingState: any): this;
declare class ThrowsExceptionContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof ThrowsExceptionContext;
    typeList(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function VarargsContext(parser: any, parent: any, invokingState: any): this;
declare class VarargsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof VarargsContext;
    type(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function MethodArgumentsContext(parser: any, parent: any, invokingState: any): this;
declare class MethodArgumentsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof MethodArgumentsContext;
    typeList(): any;
    varargs(): any;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
declare function ArrayBracketsContext(parser: any, parent: any, invokingState: any): this;
declare class ArrayBracketsContext {
    constructor(parser: any, parent: any, invokingState: any);
    parser: any;
    ruleIndex: number;
    constructor: typeof ArrayBracketsContext;
    enterRule(listener: any): void;
    exitRule(listener: any): void;
    accept(visitor: any): any;
}
export {};
