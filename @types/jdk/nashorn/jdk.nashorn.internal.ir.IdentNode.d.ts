declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class IdentNode extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.PropertyKey , jdk.nashorn.internal.ir.FunctionCall , jdk.nashorn.internal.ir.Optimistic , jdk.nashorn.internal.ir.JoinPredecessor {
                    public constructor(arg0: long, arg1: int, arg2: java.lang.String | string)
                    public constructor(arg0: jdk.nashorn.internal.ir.IdentNode)
                    public static createInternalIdentifier(arg0: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.IdentNode
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getName(): string
                    public getPropertyName(): string
                    public isLocal(): boolean
                    public getSymbol(): jdk.nashorn.internal.ir.Symbol
                    public setSymbol(arg0: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.IdentNode
                    public isPropertyName(): boolean
                    public setIsPropertyName(): jdk.nashorn.internal.ir.IdentNode
                    public isFutureStrictName(): boolean
                    public setIsFutureStrictName(): jdk.nashorn.internal.ir.IdentNode
                    public isInitializedHere(): boolean
                    public setIsInitializedHere(): jdk.nashorn.internal.ir.IdentNode
                    public isDead(): boolean
                    public markDead(): jdk.nashorn.internal.ir.IdentNode
                    public isDeclaredHere(): boolean
                    public setIsDeclaredHere(): jdk.nashorn.internal.ir.IdentNode
                    public isCompileTimePropertyName(): boolean
                    public isFunction(): boolean
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.ir.IdentNode
                    public setIsFunction(): jdk.nashorn.internal.ir.IdentNode
                    public setIsNotFunction(): jdk.nashorn.internal.ir.IdentNode
                    public getProgramPoint(): int
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
                    public getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
                    public canBeOptimistic(): boolean
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public isInternal(): boolean
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.ir.Optimistic
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}