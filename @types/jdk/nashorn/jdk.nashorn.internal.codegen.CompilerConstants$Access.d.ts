declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                abstract class CompilerConstants$Access {
                    protected readonly methodHandle: java.lang.invoke.MethodHandle
                    protected readonly className: string
                    protected readonly name: string
                    protected readonly descriptor: string
                    protected constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
                    public methodHandle(): java.lang.invoke.MethodHandle
                    public className(): string
                    public name(): string
                    public descriptor(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}