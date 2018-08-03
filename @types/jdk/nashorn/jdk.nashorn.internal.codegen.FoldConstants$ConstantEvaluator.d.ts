declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                abstract class FoldConstants$ConstantEvaluator<T extends jdk.nashorn.internal.ir.Node> {
                    protected parent: T
                    protected readonly token: long
                    protected readonly finish: int
                    protected constructor(arg0: T)
                    protected abstract eval(): jdk.nashorn.internal.ir.LiteralNode<any>
                    public static class: java.lang.Class<any>
                }
                interface FoldConstants$ConstantEvaluator$$Lambda<T extends jdk.nashorn.internal.ir.Node> {
                    (): jdk.nashorn.internal.ir.LiteralNode<any>
                }
            }
        }
    }
}