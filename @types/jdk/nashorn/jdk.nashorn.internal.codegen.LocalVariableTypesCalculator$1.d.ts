declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class LocalVariableTypesCalculator$1 extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor {
                    protected enterDefault(arg0: jdk.nashorn.internal.ir.Node): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): boolean
                    public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    protected leaveDefault(arg0: jdk.nashorn.internal.ir.Node): jdk.nashorn.internal.ir.Node
                    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): jdk.nashorn.internal.ir.Node
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public leaveLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode<any> | jdk.nashorn.internal.ir.LiteralNode$$Lambda<any>): jdk.nashorn.internal.ir.Node
                    public leaveRuntimeNode(arg0: jdk.nashorn.internal.ir.RuntimeNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}