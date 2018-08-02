declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                abstract class CodeGenerator$Store<T extends jdk.nashorn.internal.ir.Expression> {
                    protected assignNode: T
                    protected constructor(arg0: T, arg1: jdk.nashorn.internal.ir.Expression)
                    protected constructor(arg0: T)
                    protected isSelfModifying(): boolean
                    protected storeNonDiscard(): void
                    protected evaluate(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}