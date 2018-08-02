declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
class BlockStatement extends jdk.nashorn.internal.ir.Statement {
    public constructor(arg0: jdk.nashorn.internal.ir.Block)
    public constructor(arg0: int, arg1: jdk.nashorn.internal.ir.Block)
    public static createReplacement(arg0: jdk.nashorn.internal.ir.Statement | jdk.nashorn.internal.ir.Statement$$Lambda, arg1: java.util.List<jdk.nashorn.internal.ir.Statement>): jdk.nashorn.internal.ir.BlockStatement
    public static createReplacement(arg0: jdk.nashorn.internal.ir.Statement | jdk.nashorn.internal.ir.Statement$$Lambda, arg1: int, arg2: java.util.List<jdk.nashorn.internal.ir.Statement>): jdk.nashorn.internal.ir.BlockStatement
    public isTerminal(): boolean
    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
    public toString(arg0: java.lang.StringBuilder, arg1: boolean): void
    public getBlock(): jdk.nashorn.internal.ir.Block
    public setBlock(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.BlockStatement
    public static class: java.lang.Class<any>
}

            }
        }
    }
}