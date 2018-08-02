declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class FindScopeDepths extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): boolean
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): jdk.nashorn.internal.ir.Node
                    public enterWithNode(arg0: jdk.nashorn.internal.ir.WithNode): boolean
                    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
                    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}