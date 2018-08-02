declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
class TernaryNode extends jdk.nashorn.internal.ir.Expression {
    public constructor(arg0: long, arg1: jdk.nashorn.internal.ir.Expression, arg2: jdk.nashorn.internal.ir.JoinPredecessorExpression, arg3: jdk.nashorn.internal.ir.JoinPredecessorExpression)
    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
    public isLocal(): boolean
    public getType(): jdk.nashorn.internal.codegen.types.Type
    public getTest(): jdk.nashorn.internal.ir.Expression
    public getTrueExpression(): jdk.nashorn.internal.ir.JoinPredecessorExpression
    public getFalseExpression(): jdk.nashorn.internal.ir.JoinPredecessorExpression
    public setTest(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.TernaryNode
    public setTrueExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.TernaryNode
    public setFalseExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.TernaryNode
    public static class: java.lang.Class<any>
}

            }
        }
    }
}