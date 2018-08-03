declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                abstract class CodeGenerator$BinaryOptimisticSelfAssignment extends jdk.nashorn.internal.codegen.CodeGenerator$SelfModifyingStore<jdk.nashorn.internal.ir.BinaryNode> {
                    protected abstract op(arg0: jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation): void
                    protected evaluate(): void
                    public static class: java.lang.Class<any>
                }
                interface CodeGenerator$BinaryOptimisticSelfAssignment$$Lambda extends jdk.nashorn.internal.codegen.CodeGenerator$SelfModifyingStore<jdk.nashorn.internal.ir.BinaryNode> {
                    (arg0: jdk.nashorn.internal.codegen.CodeGenerator$OptimisticOperation): void
                }
            }
        }
    }
}