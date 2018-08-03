declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class AssignSymbols extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public constructor(arg0: jdk.nashorn.internal.codegen.Compiler)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public enterCatchNode(arg0: jdk.nashorn.internal.ir.CatchNode): boolean
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public enterVarNode(arg0: jdk.nashorn.internal.ir.VarNode): boolean
                    public leaveVarNode(arg0: jdk.nashorn.internal.ir.VarNode): jdk.nashorn.internal.ir.Node
                    public leaveBinaryNode(arg0: jdk.nashorn.internal.ir.BinaryNode): jdk.nashorn.internal.ir.Node
                    public leaveUnaryNode(arg0: jdk.nashorn.internal.ir.UnaryNode): jdk.nashorn.internal.ir.Node
                    public leaveForNode(arg0: jdk.nashorn.internal.ir.ForNode): jdk.nashorn.internal.ir.Node
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public leaveIdentNode(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.Node
                    public leaveSwitchNode(arg0: jdk.nashorn.internal.ir.SwitchNode): jdk.nashorn.internal.ir.Node
                    public leaveTryNode(arg0: jdk.nashorn.internal.ir.TryNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}