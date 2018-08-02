declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
class ObjectNode extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.LexicalContextNode , jdk.nashorn.internal.ir.Splittable {
    public constructor(arg0: long, arg1: int, arg2: java.util.List<jdk.nashorn.internal.ir.PropertyNode>)
    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public getType(): jdk.nashorn.internal.codegen.types.Type
    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
    public getElements(): java.util.List<jdk.nashorn.internal.ir.PropertyNode>
    public setSplitRanges(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>): jdk.nashorn.internal.ir.ObjectNode
    public getSplitRanges(): java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>
    public static class: java.lang.Class<any>
}

class ObjectNode$$Lambda extends jdk.nashorn.internal.ir.Expression implements jdk.nashorn.internal.ir.LexicalContextNode , jdk.nashorn.internal.ir.Splittable {
    public constructor(arg0: long, arg1: int, arg2: java.util.List<jdk.nashorn.internal.ir.PropertyNode>)
}

            }
        }
    }
}