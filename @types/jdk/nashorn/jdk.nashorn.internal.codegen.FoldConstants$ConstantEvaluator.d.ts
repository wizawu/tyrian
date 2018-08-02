declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                abstract class FoldConstants$ConstantEvaluator<T extends jdk.nashorn.internal.ir.Node> {
                    protected parent: T
                    protected token: long
                    protected finish: int
                    protected constructor(arg0: T)
                    protected eval(): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}