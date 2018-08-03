declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                namespace visitor {
                    abstract class NodeVisitor<T extends jdk.nashorn.internal.ir.LexicalContext> {
                        protected lc: T
                        public constructor(arg0: T)
                        public getLexicalContext(): T
                        protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                        protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                        public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
                        public leaveAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): jdk.nashorn.internal.ir.Node
                        public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                        public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                        public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                        public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
                        public leaveBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): jdk.nashorn.internal.ir.Node
                        public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                        public leaveCallNode(arg0: jdk.nashorn.internal.ir.CallNode): jdk.nashorn.internal.ir.Node
                        public enterCaseNode(arg0: jdk.nashorn.internal.ir.CaseNode): boolean
                        public leaveCaseNode(arg0: jdk.nashorn.internal.ir.CaseNode): jdk.nashorn.internal.ir.Node
                        public enterCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): boolean
                        public leaveCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): jdk.nashorn.internal.ir.Node
                        public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
                        public leaveContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): jdk.nashorn.internal.ir.Node
                        public enterEmptyNode(arg0: jdk.nashorn.internal.ir.EmptyNode): boolean
                        public leaveEmptyNode(arg0: jdk.nashorn.internal.ir.EmptyNode): jdk.nashorn.internal.ir.Node
                        public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
                        public leaveExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): jdk.nashorn.internal.ir.Node
                        public enterBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): boolean
                        public leaveBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): jdk.nashorn.internal.ir.Node
                        public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
                        public leaveForNode(arg0: jdk.nashorn.internal.ir.ForNode): jdk.nashorn.internal.ir.Node
                        public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                        public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                        public enterGetSplitState(arg0: jdk.nashorn.internal.ir.GetSplitState): boolean
                        public leaveGetSplitState(arg0: jdk.nashorn.internal.ir.GetSplitState): jdk.nashorn.internal.ir.Node
                        public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                        public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                        public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
                        public leaveIfNode(arg0: jdk.nashorn.internal.ir.IfNode): jdk.nashorn.internal.ir.Node
                        public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
                        public leaveIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): jdk.nashorn.internal.ir.Node
                        public enterJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): boolean
                        public leaveJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): jdk.nashorn.internal.ir.Node
                        public enterLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): boolean
                        public leaveLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): jdk.nashorn.internal.ir.Node
                        public enterLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode<any>): boolean
                        public leaveLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode<any>): jdk.nashorn.internal.ir.Node
                        public enterObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode): boolean
                        public leaveObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode): jdk.nashorn.internal.ir.Node
                        public enterPropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): boolean
                        public leavePropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): jdk.nashorn.internal.ir.Node
                        public enterReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): boolean
                        public leaveReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): jdk.nashorn.internal.ir.Node
                        public enterRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): boolean
                        public leaveRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): jdk.nashorn.internal.ir.Node
                        public enterSetSplitState(arg0: jdk.nashorn.internal.ir.SetSplitState): boolean
                        public leaveSetSplitState(arg0: jdk.nashorn.internal.ir.SetSplitState): jdk.nashorn.internal.ir.Node
                        public enterSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode): boolean
                        public leaveSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode): jdk.nashorn.internal.ir.Node
                        public enterSplitReturn(arg0: jdk.nashorn.internal.ir.SplitReturn): boolean
                        public leaveSplitReturn(arg0: jdk.nashorn.internal.ir.SplitReturn): jdk.nashorn.internal.ir.Node
                        public enterSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): boolean
                        public leaveSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): jdk.nashorn.internal.ir.Node
                        public enterTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): boolean
                        public leaveTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): jdk.nashorn.internal.ir.Node
                        public enterThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): boolean
                        public leaveThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): jdk.nashorn.internal.ir.Node
                        public enterTryNode(arg0: jdk.nashorn.internal.ir.TryNode): boolean
                        public leaveTryNode(arg0: jdk.nashorn.internal.ir.TryNode): jdk.nashorn.internal.ir.Node
                        public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public leaveUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                        public enterJoinPredecessorExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): boolean
                        public leaveJoinPredecessorExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): jdk.nashorn.internal.ir.Node
                        public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                        public leaveVarNode(arg0: jdk.nashorn.internal.ir.VarNode): jdk.nashorn.internal.ir.Node
                        public enterWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): boolean
                        public leaveWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): jdk.nashorn.internal.ir.Node
                        public enterWithNode(arg0: jdk.nashorn.internal.ir.WithNode): boolean
                        public leaveWithNode(arg0: jdk.nashorn.internal.ir.WithNode): jdk.nashorn.internal.ir.Node
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}