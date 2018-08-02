declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
class IndexNode extends jdk.nashorn.internal.ir.BaseNode {
    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression, arg3: jdk.nashorn.internal.ir.Expression)
    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
    public getIndex(): jdk.nashorn.internal.ir.Expression
    public setIndex(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.IndexNode
    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.IndexNode
    public setIsFunction(): jdk.nashorn.internal.ir.IndexNode
    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.IndexNode
    public setIsFunction(): jdk.nashorn.internal.ir.BaseNode
    public setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.Optimistic
    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
    public static class: java.lang.Class<any>
}

            }
        }
    }
}