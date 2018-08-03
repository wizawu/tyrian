declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                abstract class CompilerConstants$Call extends jdk.nashorn.internal.codegen.CompilerConstants$Access {
                    protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                    protected constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
                    public abstract invoke(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                    public descriptor(): string
                    public name(): string
                    public className(): string
                    public methodHandle(): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
                interface CompilerConstants$Call$$Lambda extends jdk.nashorn.internal.codegen.CompilerConstants$Access {
                    (arg0: jdk.internal.org.objectweb.asm.MethodVisitor): void
                }
            }
        }
    }
}