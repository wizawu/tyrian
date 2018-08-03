declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class RuntimeNode extends jdk.nashorn.internal.ir.Expression {
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.RuntimeNode$Request, arg3: java.util.List<jdk.nashorn.internal.ir.Expression>)
                    public constructor(arg0: long, arg1: int, arg2: jdk.nashorn.internal.ir.RuntimeNode$Request, ...arg3: jdk.nashorn.internal.ir.Expression[])
                    public constructor(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda, arg1: jdk.nashorn.internal.ir.RuntimeNode$Request, ...arg2: jdk.nashorn.internal.ir.Expression[])
                    public constructor(arg0: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda, arg1: jdk.nashorn.internal.ir.RuntimeNode$Request, arg2: java.util.List<jdk.nashorn.internal.ir.Expression>)
                    public constructor(arg0: jdk.nashorn.internal.ir.UnaryNode, arg1: jdk.nashorn.internal.ir.RuntimeNode$Request)
                    public constructor(arg0: jdk.nashorn.internal.ir.BinaryNode)
                    public setRequest(arg0: jdk.nashorn.internal.ir.RuntimeNode$Request): jdk.nashorn.internal.ir.RuntimeNode
                    public getType(): jdk.nashorn.internal.codegen.types.Type
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getArgs(): java.util.List<jdk.nashorn.internal.ir.Expression>
                    public setArgs(arg0: java.util.List<jdk.nashorn.internal.ir.Expression>): jdk.nashorn.internal.ir.RuntimeNode
                    public getRequest(): jdk.nashorn.internal.ir.RuntimeNode$Request
                    public isPrimitive(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}