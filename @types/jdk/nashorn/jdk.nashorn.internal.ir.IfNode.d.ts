declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class IfNode extends jdk.nashorn.internal.ir.Statement implements jdk.nashorn.internal.ir.JoinPredecessor {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda, arg4: jdk.nashorn.internal.ir.Block, arg5: jdk.nashorn.internal.ir.Block)
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getFail(): jdk.nashorn.internal.ir.Block
                    public getPass(): jdk.nashorn.internal.ir.Block
                    public getTest(): jdk.nashorn.internal.ir.Expression
                    public setTest(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): jdk.nashorn.internal.ir.IfNode
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.IfNode
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}