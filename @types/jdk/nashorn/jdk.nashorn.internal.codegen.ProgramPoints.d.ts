declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class ProgramPoints extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                    public enterIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): boolean
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public leaveCallNode(arg0: jdk.nashorn.internal.ir.CallNode): jdk.nashorn.internal.ir.Node
                    public leaveAccessNode(arg0: jdk.nashorn.internal.ir.AccessNode): jdk.nashorn.internal.ir.Node
                    public leaveIndexNode(arg0: jdk.nashorn.internal.ir.IndexNode): jdk.nashorn.internal.ir.Node
                    public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}