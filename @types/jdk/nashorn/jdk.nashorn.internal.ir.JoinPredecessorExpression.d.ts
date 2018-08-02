declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class JoinPredecessorExpression extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.JoinPredecessor {
                    public constructor()
                    public constructor(arg0: jdk.nashorn.internal.ir.Expression)
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public isAlwaysFalse(): boolean
                    public isAlwaysTrue(): boolean
                    public getExpression(): jdk.nashorn.internal.ir.Expression
                    public setExpression(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.JoinPredecessorExpression
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}