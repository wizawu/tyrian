declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class BlockLexicalContext extends jdk.nashorn.internal.ir.LexicalContext {
                    protected lastStatement: jdk.nashorn.internal.ir.Statement
                    public constructor()
                    public push<T extends jdk.nashorn.internal.ir.LexicalContextNode>(arg0: T): T
                    protected popStatements<T extends jdk.nashorn.internal.ir.LexicalContextNode>(): java.util.List<jdk.nashorn.internal.ir.Statement>
                    protected afterSetStatements<T extends jdk.nashorn.internal.ir.LexicalContextNode>(arg0: jdk.nashorn.internal.ir.Block): jdk.nashorn.internal.ir.Block
                    public pop<T extends jdk.nashorn.internal.ir.Node>(arg0: T): T
                    public appendStatement<T extends jdk.nashorn.internal.ir.Node>(arg0: jdk.nashorn.internal.ir.Statement | jdk.nashorn.internal.ir.Statement$$Lambda): void
                    public prependStatement<T extends jdk.nashorn.internal.ir.Node>(arg0: jdk.nashorn.internal.ir.Statement | jdk.nashorn.internal.ir.Statement$$Lambda): jdk.nashorn.internal.ir.Node
                    public prependStatements<T extends jdk.nashorn.internal.ir.Node>(arg0: java.util.List<jdk.nashorn.internal.ir.Statement>): void
                    public getLastStatement<T extends jdk.nashorn.internal.ir.Node>(): jdk.nashorn.internal.ir.Statement
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}