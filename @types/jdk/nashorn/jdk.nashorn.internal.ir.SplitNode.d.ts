declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
class SplitNode extends jdk.nashorn.internal.ir.LexicalContextStatement implements jdk.nashorn.internal.ir.CompileUnitHolder {
    public constructor(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.ir.Block, arg2: jdk.nashorn.internal.codegen.CompileUnit)
    public getBody(): jdk.nashorn.internal.ir.Block
    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
    public getName(): string
    public getCompileUnit(): jdk.nashorn.internal.codegen.CompileUnit
    public setCompileUnit(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.codegen.CompileUnit): jdk.nashorn.internal.ir.SplitNode
    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor): jdk.nashorn.internal.ir.Node
    public static class: java.lang.Class<any>
}

class SplitNode$$Lambda extends jdk.nashorn.internal.ir.LexicalContextStatement implements jdk.nashorn.internal.ir.CompileUnitHolder {
    public constructor(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.ir.Block, arg2: jdk.nashorn.internal.codegen.CompileUnit)
}

            }
        }
    }
}