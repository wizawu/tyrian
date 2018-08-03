declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class CaseNode extends jdk.nashorn.internal.ir.Node implements jdk.nashorn.internal.ir.JoinPredecessor , jdk.nashorn.internal.ir.Labels , jdk.nashorn.internal.ir.Terminal {
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda, arg3: jdk.nashorn.internal.ir.Block)
                    public isTerminal(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public getEntry(): jdk.nashorn.internal.codegen.Label
                    public getTest(): jdk.nashorn.internal.ir.Expression
                    public setTest(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): jdk.nashorn.internal.ir.CaseNode
                    public setLocalVariableConversion(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.LocalVariableConversion): jdk.nashorn.internal.ir.JoinPredecessor
                    public getLocalVariableConversion(): jdk.nashorn.internal.ir.LocalVariableConversion
                    public getLabels(): java.util.List<jdk.nashorn.internal.codegen.Label>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}