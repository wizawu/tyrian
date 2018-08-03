declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class Lower extends jdk.nashorn.internal.ir.visitor.NodeOperatorVisitor<jdk.nashorn.internal.ir.BlockLexicalContext> implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
                    public leaveCallNode(arg0: jdk.nashorn.internal.ir.CallNode): jdk.nashorn.internal.ir.Node
                    public leaveCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): jdk.nashorn.internal.ir.Node
                    public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
                    public enterJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): boolean
                    public enterEmptyNode(arg0: jdk.nashorn.internal.ir.EmptyNode): boolean
                    public leaveIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): jdk.nashorn.internal.ir.Node
                    public leaveExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): jdk.nashorn.internal.ir.Node
                    public leaveBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): jdk.nashorn.internal.ir.Node
                    public leaveForNode(arg0: jdk.nashorn.internal.ir.ForNode): jdk.nashorn.internal.ir.Node
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public leaveIfNode(arg0: jdk.nashorn.internal.ir.IfNode): jdk.nashorn.internal.ir.Node
                    public leaveIN(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveINSTANCEOF(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): jdk.nashorn.internal.ir.Node
                    public leaveReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): jdk.nashorn.internal.ir.Node
                    public leaveCaseNode(arg0: jdk.nashorn.internal.ir.CaseNode): jdk.nashorn.internal.ir.Node
                    public leaveSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): jdk.nashorn.internal.ir.Node
                    public leaveThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): jdk.nashorn.internal.ir.Node
                    public leaveTryNode(arg0: jdk.nashorn.internal.ir.TryNode): jdk.nashorn.internal.ir.Node
                    public leaveVarNode(arg0: jdk.nashorn.internal.ir.VarNode): jdk.nashorn.internal.ir.Node
                    public leaveWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): jdk.nashorn.internal.ir.Node
                    public leaveWithNode(arg0: jdk.nashorn.internal.ir.WithNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}