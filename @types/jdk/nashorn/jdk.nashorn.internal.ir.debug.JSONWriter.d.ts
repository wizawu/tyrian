declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                namespace debug {
                    class JSONWriter extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                        public static parse(arg0: jdk.nashorn.internal.runtime.Context, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): string
                        public enterJoinPredecessorExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): boolean
                        protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                        protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                        public enterAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): boolean
                        public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                        public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
                        public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                        public enterCaseNode(arg0: jdk.nashorn.internal.ir.CaseNode | jdk.nashorn.internal.ir.CaseNode$$Lambda): boolean
                        public enterCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): boolean
                        public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
                        public enterEmptyNode(arg0: jdk.nashorn.internal.ir.EmptyNode): boolean
                        public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
                        public enterBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): boolean
                        public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
                        public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): boolean
                        public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                        public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
                        public enterIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): boolean
                        public enterLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): boolean
                        public enterLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode | jdk.nashorn.internal.ir.LiteralNode$$Lambda): boolean
                        public enterObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode | jdk.nashorn.internal.ir.ObjectNode$$Lambda): boolean
                        public enterPropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): boolean
                        public enterReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): boolean
                        public enterRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): boolean
                        public enterSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode | jdk.nashorn.internal.ir.SplitNode$$Lambda): boolean
                        public enterSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): boolean
                        public enterTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): boolean
                        public enterThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): boolean
                        public enterTryNode(arg0: jdk.nashorn.internal.ir.TryNode): boolean
                        public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                        public enterWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): boolean
                        public enterWithNode(arg0: jdk.nashorn.internal.ir.WithNode): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}