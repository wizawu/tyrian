declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
class WhileNode extends jdk.nashorn.internal.ir.LoopNode {
    public constructor(arg0: int, arg1: long, arg2: int, arg3: boolean)
    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
    public hasGoto(): boolean
    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public setTest(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.WhileNode
    public getBody(): jdk.nashorn.internal.ir.Block
    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.WhileNode
    public setControlFlowEscapes(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.WhileNode
    public isDoWhile(): boolean
    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
    public mustEnter(): boolean
    public hasPerIterationScope(): boolean
    public setControlFlowEscapes(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.LoopNode
    public setTest(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.LoopNode
    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.LoopNode
    public static class: java.lang.Class<any>
}

            }
        }
    }
}