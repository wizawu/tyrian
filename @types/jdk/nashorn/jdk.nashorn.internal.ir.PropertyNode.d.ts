declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class PropertyNode extends jdk.nashorn.internal.ir.Node {
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.PropertyKey | jdk.nashorn.internal.ir.PropertyKey$$Lambda, arg3: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda, arg4: jdk.nashorn.internal.ir.FunctionNode, arg5: jdk.nashorn.internal.ir.FunctionNode)
                    public getKeyName(): string
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getGetter(): jdk.nashorn.internal.ir.FunctionNode
                    public setGetter(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.PropertyNode
                    public getKey(): jdk.nashorn.internal.ir.Expression
                    public getSetter(): jdk.nashorn.internal.ir.FunctionNode
                    public setSetter(arg0: jdk.nashorn.internal.ir.FunctionNode): jdk.nashorn.internal.ir.PropertyNode
                    public getValue(): jdk.nashorn.internal.ir.Expression
                    public setValue(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda): jdk.nashorn.internal.ir.PropertyNode
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}