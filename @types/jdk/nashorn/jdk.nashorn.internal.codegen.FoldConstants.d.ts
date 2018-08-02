declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
class FoldConstants extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor implements jdk.nashorn.internal.runtime.logging.Loggable {
    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
    public leaveUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
    public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): jdk.nashorn.internal.ir.Node
    public leaveIfNode(arg0: jdk.nashorn.internal.ir.IfNode): jdk.nashorn.internal.ir.Node
    public leaveTernaryNode(arg0: jdk.nashorn.internal.ir.TernaryNode): jdk.nashorn.internal.ir.Node
    public leaveSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): jdk.nashorn.internal.ir.Node
    public static class: java.lang.Class<any>
}

            }
        }
    }
}