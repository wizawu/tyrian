declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class Symbol implements java.lang.Comparable<jdk.nashorn.internal.ir.Symbol> , java.lang.Cloneable , java.io.Serializable {
                    public static readonly IS_GLOBAL: int
                    public static readonly IS_VAR: int
                    public static readonly IS_PARAM: int
                    public static readonly KINDMASK: int
                    public static readonly IS_SCOPE: int
                    public static readonly IS_THIS: int
                    public static readonly IS_LET: int
                    public static readonly IS_CONST: int
                    public static readonly IS_INTERNAL: int
                    public static readonly IS_FUNCTION_SELF: int
                    public static readonly IS_FUNCTION_DECLARATION: int
                    public static readonly IS_PROGRAM_LEVEL: int
                    public static readonly HAS_SLOT: int
                    public static readonly HAS_INT_VALUE: int
                    public static readonly HAS_DOUBLE_VALUE: int
                    public static readonly HAS_OBJECT_VALUE: int
                    public static readonly HAS_BEEN_DECLARED: int
                    public constructor(arg0: java.lang.String | string, arg1: int)
                    public clone(): jdk.nashorn.internal.ir.Symbol
                    public less(arg0: int): boolean
                    public setNeedsSlot(arg0: boolean): jdk.nashorn.internal.ir.Symbol
                    public slotCount(): int
                    public toString(): string
                    public compareTo(arg0: jdk.nashorn.internal.ir.Symbol): int
                    public hasSlot(): boolean
                    public isBytecodeLocal(): boolean
                    public isDead(): boolean
                    public isScope(): boolean
                    public isFunctionDeclaration(): boolean
                    public setIsScope(): jdk.nashorn.internal.ir.Symbol
                    public setIsFunctionDeclaration(): void
                    public isVar(): boolean
                    public isGlobal(): boolean
                    public isParam(): boolean
                    public isProgramLevel(): boolean
                    public isConst(): boolean
                    public isInternal(): boolean
                    public isThis(): boolean
                    public isLet(): boolean
                    public isFunctionSelf(): boolean
                    public isBlockScoped(): boolean
                    public hasBeenDeclared(): boolean
                    public setHasBeenDeclared(): void
                    public getFieldIndex(): int
                    public setFieldIndex(arg0: int): jdk.nashorn.internal.ir.Symbol
                    public getFlags(): int
                    public setFlags(arg0: int): jdk.nashorn.internal.ir.Symbol
                    public setFlag(arg0: int): jdk.nashorn.internal.ir.Symbol
                    public clearFlag(arg0: int): jdk.nashorn.internal.ir.Symbol
                    public getName(): string
                    public getFirstSlot(): int
                    public getSlot(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): int
                    public hasSlotFor(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): boolean
                    public setHasSlotFor(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): void
                    public increaseUseCount(): void
                    public getUseCount(): int
                    public setFirstSlot(arg0: int): jdk.nashorn.internal.ir.Symbol
                    public static setSymbolIsScope(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.Symbol
                    public clone(): java.lang.Object
                    public compareTo(arg0: java.lang.Object): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}