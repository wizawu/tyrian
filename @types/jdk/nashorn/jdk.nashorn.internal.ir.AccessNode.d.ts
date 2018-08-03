declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class AccessNode extends jdk.nashorn.internal.ir.BaseNode {
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda, arg3: java.lang.String | string)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getProperty(): string
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.ir.AccessNode
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.AccessNode
                    public setIsFunction(): jdk.nashorn.internal.ir.AccessNode
                    public setIsFunction(): jdk.nashorn.internal.ir.BaseNode
                    public setType(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.ir.Optimistic
                    public setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}