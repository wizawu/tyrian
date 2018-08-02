declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class CatchNode extends jdk.nashorn.internal.ir.Statement {
                    public constructor(arg0: int, arg1: long, arg2: int, arg3: jdk.nashorn.internal.ir.IdentNode, arg4: jdk.nashorn.internal.ir.Expression, arg5: jdk.nashorn.internal.ir.Block, arg6: boolean)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public isTerminal(): boolean
                    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
                    public getException(): jdk.nashorn.internal.ir.IdentNode
                    public getExceptionCondition(): jdk.nashorn.internal.ir.Expression
                    public setExceptionCondition(arg0: jdk.nashorn.internal.ir.Expression): jdk.nashorn.internal.ir.CatchNode
                    public getBody(): jdk.nashorn.internal.ir.Block
                    public setException(arg0: jdk.nashorn.internal.ir.IdentNode): jdk.nashorn.internal.ir.CatchNode
                    public isSyntheticRethrow(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}