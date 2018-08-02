declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
class LocalVariableTypesCalculator extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
    public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
    public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
    public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
    public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
    public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
    protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
    public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
    protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
    public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): boolean
    public enterGetSplitState(arg0: jdk.nashorn.internal.ir.GetSplitState): boolean
    public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
    public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
    public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
    public enterJoinPredecessorExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): boolean
    public enterJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): boolean
    public enterLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode<any> | jdk.nashorn.internal.ir.LiteralNode$$Lambda<any>): boolean
    public enterObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode | jdk.nashorn.internal.ir.ObjectNode$$Lambda): boolean
    public enterPropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): boolean
    public enterReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): boolean
    public enterRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): boolean
    public enterSplitReturn(arg0: jdk.nashorn.internal.ir.SplitReturn): boolean
    public enterSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): boolean
    public enterTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): boolean
    public enterThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): boolean
    public enterTryNode(arg0: jdk.nashorn.internal.ir.TryNode): boolean
    public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
    public enterWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): boolean
    public enterWithNode(arg0: jdk.nashorn.internal.ir.WithNode): boolean
    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): jdk.nashorn.internal.ir.Node
    public static class: java.lang.Class<any>
}

            }
        }
    }
}