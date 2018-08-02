declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
class Splitter extends jdk.nashorn.internal.ir.visitor.SimpleNodeVisitor implements jdk.nashorn.internal.runtime.logging.Loggable {
    public static SPLIT_THRESHOLD: long
    public constructor(arg0: jdk.nashorn.internal.codegen.Compiler, arg1: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda, arg2: jdk.nashorn.internal.codegen.CompileUnit)
    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
    protected findUnit(arg0: long): jdk.nashorn.internal.codegen.CompileUnit
    public enterBlock(arg0: jdk.nashorn.internal.ir.Block): boolean
    public leaveBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Node
    public leaveLiteralNode(arg0: jdk.nashorn.internal.ir.LiteralNode | jdk.nashorn.internal.ir.LiteralNode$$Lambda): jdk.nashorn.internal.ir.Node
    public leaveObjectNode(arg0: jdk.nashorn.internal.ir.ObjectNode | jdk.nashorn.internal.ir.ObjectNode$$Lambda): jdk.nashorn.internal.ir.Node
    public enterFunctionNode(arg0: jdk.nashorn.internal.ir.FunctionNode | jdk.nashorn.internal.ir.FunctionNode$$Lambda): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}