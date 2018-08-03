declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                abstract class CodeGenerator$BinarySelfAssignment extends jdk.nashorn.internal.codegen.CodeGenerator$SelfModifyingStore<jdk.nashorn.internal.ir.BinaryNode> {
                    protected abstract op(): void
                    protected evaluate(): void
                    public static class: java.lang.Class<any>
                }
                interface CodeGenerator$BinarySelfAssignment$$Lambda extends jdk.nashorn.internal.codegen.CodeGenerator$SelfModifyingStore<jdk.nashorn.internal.ir.BinaryNode> {
                    (): void
                }
            }
        }
    }
}