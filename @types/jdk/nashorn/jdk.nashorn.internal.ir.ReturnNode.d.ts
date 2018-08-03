declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class ReturnNode extends jdk.nashorn.internal.ir.Statement {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda)
                    public isTerminal(): boolean
                    public isReturn(): boolean
                    public hasExpression(): boolean
                    public isYield(): boolean
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getExpression(): jdk.nashorn.internal.ir.Expression
                    public setExpression(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): jdk.nashorn.internal.ir.ReturnNode
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}