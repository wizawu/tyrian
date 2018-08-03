declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class WithNode extends jdk.nashorn.internal.ir.LexicalContextStatement {
                    public constructor(arg0: int, arg1: long, arg2: int)
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public isTerminal(): boolean
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setBody(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.WithNode
                    public getExpression(): jdk.nashorn.internal.ir.Expression
                    public setExpression(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): jdk.nashorn.internal.ir.WithNode
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}