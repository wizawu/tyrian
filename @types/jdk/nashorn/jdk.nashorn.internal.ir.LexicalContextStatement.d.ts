declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                abstract class LexicalContextStatement extends jdk.nashorn.internal.ir.Statement implements jdk.nashorn.internal.ir.LexicalContextNode {
                    protected constructor(arg0: int, arg1: long, arg2: int)
                    protected constructor(arg0: jdk.nashorn.internal.ir.LexicalContextStatement | jdk.nashorn.internal.ir.LexicalContextStatement$$Lambda)
                    public accept(arg0: jdk.nashorn.internal.ir.visitor.NodeVisitor<jdk.nashorn.internal.ir.LexicalContext>): jdk.nashorn.internal.ir.Node
                    public static class: java.lang.Class<any>
                }
                abstract class LexicalContextStatement$$Lambda extends jdk.nashorn.internal.ir.Statement implements jdk.nashorn.internal.ir.LexicalContextNode {
                    protected constructor(arg0: int, arg1: long, arg2: int)
                }
            }
        }
    }
}