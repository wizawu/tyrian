declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class TryNode extends jdk.nashorn.internal.ir.LexicalContextStatement implements jdk.nashorn.internal.ir.JoinPredecessor {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Block, arg4: java.util.List<jdk.nashorn.internal.ir.Block>, arg5: jdk.nashorn.internal.ir.Block)
                    public ensureUniqueLabels(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.Node
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.TryNode
                    public getCatches(): java.util.List<jdk.nashorn.internal.ir.CatchNode>
                    public getCatchBlocks(): java.util.List<jdk.nashorn.internal.ir.Block>
                    public setCatchBlocks(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.Block>): jdk.nashorn.internal.ir.TryNode
                    public getException(): jdk.nashorn.internal.ir.Symbol
                    public setException(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Symbol): jdk.nashorn.internal.ir.TryNode
                    public getFinallyBody(): jdk.nashorn.internal.ir.Block
                    public getInlinedFinally(arg0: java.lang.String | string): jdk.nashorn.internal.ir.Block
                    public static getLabelledInlinedFinallyBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Block
                    public getInlinedFinallies(): java.util.List<jdk.nashorn.internal.ir.Block>
                    public setFinallyBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.TryNode
                    public setInlinedFinallies(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.Block>): jdk.nashorn.internal.ir.TryNode
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}