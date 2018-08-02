declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class WeighNodes extends jdk.nashorn.internal.ir.visitor.NodeOperatorVisitor<jdk.nashorn.internal.ir.LexicalContext> {
                    public leaveAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): jdk.nashorn.internal.ir.Node
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public leaveBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): jdk.nashorn.internal.ir.Node
                    public leaveCallNode(arg0: jdk.nashorn.internal.ir.CallNode): jdk.nashorn.internal.ir.Node
                    public leaveCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): jdk.nashorn.internal.ir.Node
                    public leaveContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): jdk.nashorn.internal.ir.Node
                    public leaveExpressionStatement(arg0: jdk.nashorn.internal.ir.ExpressionStatement): jdk.nashorn.internal.ir.Node
                    public leaveForNode(arg0: jdk.nashorn.internal.ir.ForNode): jdk.nashorn.internal.ir.Node
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): boolean
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public leaveIfNode(arg0: jdk.nashorn.internal.ir.IfNode): jdk.nashorn.internal.ir.Node
                    public leaveIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): jdk.nashorn.internal.ir.Node
                    public leaveJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): jdk.nashorn.internal.ir.Node
                    public enterLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode | jdk.nashorn.internal.ir.LiteralNode$$Lambda): boolean
                    public enterObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode | jdk.nashorn.internal.ir.ObjectNode$$Lambda): boolean
                    public leavePropertyNode(arg0: jdk.nashorn.internal.ir.PropertyNode): jdk.nashorn.internal.ir.Node
                    public leaveReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): jdk.nashorn.internal.ir.Node
                    public leaveRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): jdk.nashorn.internal.ir.Node
                    public enterSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode | jdk.nashorn.internal.ir.SplitNode$$Lambda): boolean
                    public leaveSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): jdk.nashorn.internal.ir.Node
                    public leaveThrowNode(arg0: jdk.nashorn.internal.ir.ThrowNode): jdk.nashorn.internal.ir.Node
                    public leaveTryNode(arg0: jdk.nashorn.internal.ir.TryNode): jdk.nashorn.internal.ir.Node
                    public leaveVarNode(arg0: jdk.nashorn.internal.ir.VarNode): jdk.nashorn.internal.ir.Node
                    public leaveWhileNode(arg0: jdk.nashorn.internal.ir.WhileNode): jdk.nashorn.internal.ir.Node
                    public leaveWithNode(arg0: jdk.nashorn.internal.ir.WithNode): jdk.nashorn.internal.ir.Node
                    public leaveADD(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveBIT_NOT(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveDECINC(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveDELETE(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveNEW(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveNOT(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveSUB(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveTYPEOF(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveVOID(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveADD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveAND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_ADD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_BIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_BIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_BIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_DIV(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_MOD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_MUL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_SAR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_SHL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_SHR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveASSIGN_SUB(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveBIND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveBIT_AND(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveBIT_OR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveBIT_XOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveCOMMALEFT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveCOMMARIGHT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveDIV(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveEQ(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveEQ_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveGE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveGT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveIN(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveINSTANCEOF(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveLE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveLT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveMOD(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveMUL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveNE(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveNE_STRICT(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveOR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveSAR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveSHL(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveSHR(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveSUB(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}