declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class LabelNode extends jdk.nashorn.internal.ir.LexicalContextStatement implements jdk.nashorn.internal.ir.JoinPredecessor {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: java.lang.String | string, arg4: jdk.nashorn.internal.ir.Block)
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.LabelNode
                    public getLabelName(): string
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.LabelNode
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}