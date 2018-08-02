declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                abstract class LoopNode extends jdk.nashorn.internal.ir.BreakableStatement {
                    protected continueLabel: jdk.nashorn.internal.codegen.Label
                    protected test: jdk.nashorn.internal.ir.JoinPredecessorExpression
                    protected body: jdk.nashorn.internal.ir.Block
                    protected controlFlowEscapes: boolean
                    protected constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Block, arg4: boolean)
                    protected constructor(arg0: jdk.nashorn.internal.ir.LoopNode, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression, arg2: jdk.nashorn.internal.ir.Block, arg3: boolean, arg4: jdk.nashorn.internal.ir.LocalVariableConversion)
                    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    public controlFlowEscapes(): boolean
                    public isTerminal(): boolean
                    public mustEnter(): boolean
                    public getContinueLabel(): jdk.nashorn.internal.codegen.Label
                    public getLabels(): java.util.List<jdk.nashorn.internal.codegen.Label>
                    public isLoop(): boolean
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.LoopNode
                    public getTest(): jdk.nashorn.internal.ir.JoinPredecessorExpression
                    public setTest(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.LoopNode
                    public setControlFlowEscapes(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: boolean): jdk.nashorn.internal.ir.LoopNode
                    public hasPerIterationScope(): boolean
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getBreakLabel(): jdk.nashorn.internal.codegen.Label
                    public isBreakableWithoutLabel(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}