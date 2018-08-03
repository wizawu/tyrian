declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                abstract class CompilerConstants$FieldAccess extends jdk.nashorn.internal.codegen.CompilerConstants$Access {
                    protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                    protected abstract get(arg0: jdk.nashorn.internal.codegen.MethodEmitter): jdk.nashorn.internal.codegen.MethodEmitter
                    protected abstract put(arg0: jdk.nashorn.internal.codegen.MethodEmitter): void
                    public descriptor(): string
                    public name(): string
                    public className(): string
                    public methodHandle(): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}