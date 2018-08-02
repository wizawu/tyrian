declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace linker {
class LinkerCallSite$TracingLinkerCallSite extends jdk.nashorn.internal.runtime.linker.LinkerCallSite {
    public setTarget(arg0: java.lang.invoke.MethodHandle): void
    public initialize(arg0: java.lang.invoke.MethodHandle): void
    public relink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
    public resetAndRelink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
    public traceObject(arg0: java.lang.invoke.MethodHandle, ...arg1: java.lang.Object[]): java.lang.Object
    public traceVoid(arg0: java.lang.invoke.MethodHandle, ...arg1: java.lang.Object[]): void
    public traceMiss(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}