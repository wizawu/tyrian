declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                abstract class CodeGenerator$Store<T extends jdk.nashorn.internal.ir.Expression> {
                    protected readonly assignNode: T
                    protected constructor(arg0: T, arg1: jdk.nashorn.internal.ir.Expression | jdk.nashorn.internal.ir.Expression$$Lambda)
                    protected constructor(arg0: T)
                    protected isSelfModifying(): boolean
                    protected storeNonDiscard(): void
                    protected abstract evaluate(): void
                    public static class: java.lang.Class<any>
                }
                interface CodeGenerator$Store$$Lambda<T extends jdk.nashorn.internal.ir.Expression> {
                    (): void
                }
            }
        }
    }
}