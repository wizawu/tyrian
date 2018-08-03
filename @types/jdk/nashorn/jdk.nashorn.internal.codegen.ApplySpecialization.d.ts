declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                class ApplySpecialization extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public constructor(arg0: jdk.nashorn.internal.codegen.Compiler)
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public enterCallNode(arg0: jdk.nashorn.internal.ir.CallNode): boolean
                    public leaveCallNode(arg0: jdk.nashorn.internal.ir.CallNode): jdk.nashorn.internal.ir.Node
                    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): boolean
                    public leaveFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}