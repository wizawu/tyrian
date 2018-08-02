declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
interface Optimistic {
    getProgramPoint(): int
    setProgramPoint(arg0: int): jdk.nashorn.internal.ir.Optimistic
    canBeOptimistic(): boolean
    getMostOptimisticType(): jdk.nashorn.internal.codegen.types.Type
    getMostPessimisticType(): jdk.nashorn.internal.codegen.types.Type
    setType(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.ir.Optimistic
}

            }
        }
    }
}