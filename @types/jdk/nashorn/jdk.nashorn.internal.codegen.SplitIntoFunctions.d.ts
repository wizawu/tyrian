declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
class SplitIntoFunctions extends jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.BlockLexicalContext> {
    public constructor(arg0: jdk.nashorn.internal.codegen.Compiler)
    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): boolean
    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): jdk.nashorn.internal.ir.Node
    protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
    public enterSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode | jdk.nashorn.internal.ir.SplitNode$$Lambda): boolean
    public leaveSplitNode(arg0: jdk.nashorn.internal.ir.SplitNode | jdk.nashorn.internal.ir.SplitNode$$Lambda): jdk.nashorn.internal.ir.Node
    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
    public leaveBreakNode(arg0: jdk.nashorn.internal.ir.BreakNode): jdk.nashorn.internal.ir.Node
    public leaveContinueNode(arg0: jdk.nashorn.internal.ir.ContinueNode): jdk.nashorn.internal.ir.Node
    public leaveJumpToInlinedFinally(arg0: jdk.nashorn.internal.ir.JumpToInlinedFinally): jdk.nashorn.internal.ir.Node
    public leaveReturnNode(arg0: jdk.nashorn.internal.ir.ReturnNode): jdk.nashorn.internal.ir.Node
    public static class: java.lang.Class<any>
}

            }
        }
    }
}