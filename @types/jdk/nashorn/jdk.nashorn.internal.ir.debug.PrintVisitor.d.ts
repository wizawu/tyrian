declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                namespace debug {
                    class PrintVisitor extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                        public constructor()
                        public constructor(arg0: boolean, arg1: boolean)
                        public constructor(arg0: jdk.nashorn.internal.ir.Node)
                        public constructor(arg0: jdk.nashorn.internal.ir.Node, arg1: boolean, arg2: boolean)
                        public toString(): string
                        public enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                        public enterContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): boolean
                        public enterBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): boolean
                        public enterThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): boolean
                        public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                        public enterBlockStatement(arg0: jdk.nashorn.internal.ir.BlockStatement): boolean
                        public enterBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): boolean
                        public enterJoinPredecessorExpression(arg0: jdk.nashorn.internal.ir.JoinPredecessorExpression): boolean
                        public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                        public enterUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): boolean
                        public enterExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): boolean
                        public enterForNode(arg0: jdk.nashorn.internal.ir.ForNode): boolean
                        public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): boolean
                        public enterIfNode(arg0: jdk.nashorn.internal.ir.IfNode): boolean
                        public enterLabelNode(arg0: jdk.nashorn.internal.ir.LabelNode): boolean
                        public enterSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode | jdk.nashorn.internal.ir.SplitNode$$Lambda): boolean
                        public leaveSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode | jdk.nashorn.internal.ir.SplitNode$$Lambda): jdk.nashorn.internal.ir.Node
                        public enterSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): boolean
                        public enterTryNode(arg0: jdk.nashorn.internal.ir.TryNode): boolean
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