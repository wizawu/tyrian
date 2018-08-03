declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class CodeGenerator extends jdk.nashorn.internal.ir.visitor.NodeOperatorVisitor<jdk.nashorn.internal.codegen.CodeGeneratorLexicalContext> implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                    public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
                    public enterJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): boolean
                    public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
                    public enterEmptyNode(arg0: jdk.nashorn.internal.ir.EmptyNode): boolean
                    public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
                    public enterBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): boolean
                    public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
                    public enterReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): boolean
                    public enterSplitReturn(arg0: jdk.nashorn.internal.ir.SplitReturn): boolean
                    public enterSetSplitState(arg0: jdk.nashorn.internal.ir.SetSplitState): boolean
                    public enterSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): boolean
                    public enterThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): boolean
                    public enterTryNode(arg0: jdk.nashorn.internal.ir.TryNode): boolean
                    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                    public enterWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): boolean
                    public enterWithNode(arg0: jdk.nashorn.internal.ir.WithNode): boolean
                    public loadVOID(arg0: jdk.nashorn.internal.ir.UnaryNode, arg1: jdk.nashorn.internal.codegen.CodeGenerator$TypeBounds): void
                    public loadADD(arg0: jdk.nashorn.internal.ir.BinaryNode, arg1: jdk.nashorn.internal.codegen.CodeGenerator$TypeBounds): void
                    public enterLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): boolean
                    protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}