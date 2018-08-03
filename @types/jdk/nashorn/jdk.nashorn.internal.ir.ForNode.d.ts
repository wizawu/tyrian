declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class ForNode extends jdk.nashorn.internal.ir.LoopNode {
                    public static readonly IS_FOR_IN: int
                    public static readonly IS_FOR_EACH: int
                    public static readonly PER_ITERATION_SCOPE: int
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Block, arg4: int)
                    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public hasGoto(): boolean
                    public mustEnter(): boolean
                    public getInit(): jdk.nashorn.internal.ir.Expression
                    public setInit(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): jdk.nashorn.internal.ir.ForNode
                    public isForIn(): boolean
                    public setIsForIn(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.ForNode
                    public isForEach(): boolean
                    public setIsForEach(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.ForNode
                    public getIterator(): jdk.nashorn.internal.ir.Symbol
                    public setIterator(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.ForNode
                    public getModify(): jdk.nashorn.internal.ir.JoinPredecessorExpression
                    public setModify(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.ForNode
                    public setTest(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.ForNode
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.ForNode
                    public setControlFlowEscapes(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.ForNode
                    public hasPerIterationScope(): boolean
                    public setPerIterationScope(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.ForNode
                    public setControlFlowEscapes(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.LoopNode
                    public setTest(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.LoopNode
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.LoopNode
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}