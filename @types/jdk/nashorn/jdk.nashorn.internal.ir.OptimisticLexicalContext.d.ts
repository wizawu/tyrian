declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                class OptimisticLexicalContext extends jdk.nashorn.internal.ir.LexicalContext {
                    public constructor(arg0: boolean)
                    public isEnabled(): boolean
                    public logOptimisticAssumption(arg0: jdk.nashorn.internal.ir.Symbol, arg1: jdk.nashorn.internal.codegen.types.Type): void
                    public getOptimisticAssumptions(): java.util.List<jdk.nashorn.internal.ir.OptimisticLexicalContext$Assumption>
                    public hasOptimisticAssumptions(): boolean
                    public push<T extends jdk.nashorn.internal.ir.LexicalContextNode>(arg0: T): T
                    public pop<T extends jdk.nashorn.internal.ir.Node>(arg0: T): T
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}