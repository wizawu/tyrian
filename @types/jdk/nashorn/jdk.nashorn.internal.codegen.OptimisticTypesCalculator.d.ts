declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class OptimisticTypesCalculator extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
                    public enterPropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): boolean
                    public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                    public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                    public enterCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): boolean
                    public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
                    public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
                    public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
                    public enterTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): boolean
                    public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                    public enterWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): boolean
                    protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}