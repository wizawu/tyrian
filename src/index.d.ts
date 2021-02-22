declare interface CompilationUnitContext {
    sourceDeclaration(i: number): SourceDeclarationContext
    sourceDeclaration(): SourceDeclarationContext[]
    classOrInterface(i: number): ClassOrInterfaceContext
    classOrInterface(): ClassOrInterfaceContext[]
}

declare interface SourceDeclarationContext {
    getText(): string
}

declare interface ClassOrInterfaceContext {
    classDeclaration(): ClassDeclarationContext
    interfaceDeclaration(): InterfaceDeclarationContext
}

declare interface ClassDeclarationContext {
    classModifier(i: number): ClassModifierContext
    classModifier(): ClassModifierContext[]
    type(i: number): TypeContext
    type(): TypeContext[]
    typeList(): TypeListContext
    classBody(): ClassBodyContext
}

declare interface InterfaceDeclarationContext {
    interfaceModifier(i: number): InterfaceModifierContext
    interfaceModifier(): InterfaceModifierContext[]
    type(i: number): TypeContext
    type(): TypeContext[]
    interfaceBody(): InterfaceBodyContext
}

declare interface ClassModifierContext {
    getText(): string
}

declare interface InterfaceModifierContext {
    getText(): string
}

declare interface TypeListContext {
    type(i: number): TypeContext
    type(): TypeContext[]
}

declare interface TypeContext {
    packageName(): PackageNameContext
    Identifier(): Identifier
    typeArguments(): TypeArgumentsContext
}

declare interface PackageNameContext {
    Identifier(i: number): Identifier
    Identifier(): Identifier[]
    getText(): string
}

declare interface TypeArgumentsContext {
    typeArgument(i: number): TypeArgumentContext
    typeArgument(): TypeArgumentContext[]
}

declare interface TypeArgumentContext {
    Identifier(): Identifier
    type(): TypeContext
}

declare interface ClassBodyContext {
    classMember(i: number): ClassMemberContext
    classMember(): ClassMemberContext[]
}

declare interface InterfaceBodyContext {
    interfaceMember(i: number): InterfaceMemberContext
    interfaceMember(): InterfaceMemberContext[]
}

declare interface ModifierContext {
    getText(): string
}

declare interface ClassMemberContext {
    constructorDeclaration(): ConstructorDeclarationContext
    fieldDeclaration(): FieldDeclarationContext
    methodDeclaration(): MethodDeclarationContext
}

declare interface InterfaceMemberContext {
    methodDeclaration(): MethodDeclarationContext
}

declare interface ConstructorDeclarationContext {
    modifier(i: number): ModifierContext
    modifier(): ModifierContext[]
    type(): TypeContext
    methodArguments(): MethodArgumentsContext
}

declare interface FieldDeclarationContext {
    modifier(i: number): ModifierContext
    modifier(): ModifierContext[]
    type(): TypeContext
    Identifier(): Identifier
}

declare interface MethodDeclarationContext {
    modifier(i: number): ModifierContext
    modifier(): ModifierContext[]
    typeArguments(): TypeArgumentsContext
    type(): TypeContext
    Identifier(): Identifier
    methodArguments(): MethodArgumentsContext
    throwsException(): ThrowsExceptionContext
}

declare interface ThrowsExceptionContext {
    typeList(): TypeListContext
}

declare interface VarargsContext {
    type(): TypeContext
}

declare interface MethodArgumentsContext {
    typeList(): TypeListContext
    varargs(): VarargsContext
}

declare interface Identifier {
    getText(): string
}

declare interface InterfaceStat {
  [_: string]: [number, string?]
}
