declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
abstract class JumpStatement extends jdk.nashorn.internal.ir.Statement implements jdk.nashorn.internal.ir.JoinPredecessor {
    protected constructor(arg0: int, arg1: long, arg2: int, arg3: java.lang.String | string)
    protected constructor(arg0: jdk.nashorn.internal.ir.JumpStatement, arg1: jdk.nashorn.internal.ir.LocalVariableConversion)
    public hasGoto(): boolean
    public getLabelName(): string
    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
    public getTarget(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.BreakableNode
    public getTargetLabel(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.codegen.Label
    public getPopScopeLimit(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.LexicalContextNode
    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JumpStatement
    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
    public static class: java.lang.Class<any>
}

            }
        }
    }
}