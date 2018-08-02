declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class LiteralNode$ArrayLiteralNode extends jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.ir.Expression[]> implements jdk.nashorn.internal.ir.LexicalContextNode , jdk.nashorn.internal.ir.Splittable {
                    protected constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression[])
                    public getElementExpressions(): java.util.List<jdk.nashorn.internal.ir.Expression>
                    public initialize(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.LiteralNode$ArrayLiteralNode
                    public getArrayType(): jdk.nashorn.internal.codegen.types.ArrayType
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public getElementType(): jdk.nashorn.internal.codegen.types.Type
                    public getPostsets(): int[]
                    public getPresets(): java.lang.Object
                    public getSplitRanges(): java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>
                    public setSplitRanges(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>): jdk.nashorn.internal.ir.LiteralNode$ArrayLiteralNode
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public accept(arg0: jdk.nashorn.internal.ir.LexicalContext, arg1: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public initialize(arg0: jdk.nashorn.internal.ir.LexicalContext): jdk.nashorn.internal.ir.LiteralNode
                    public static class: java.lang.Class<any>
                }
                class LiteralNode$ArrayLiteralNode$$Lambda extends jdk.nashorn.internal.ir.LiteralNode<jdk.nashorn.internal.ir.Expression[]> implements jdk.nashorn.internal.ir.LexicalContextNode , jdk.nashorn.internal.ir.Splittable {
                    protected constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression[])
                }
            }
        }
    }
}