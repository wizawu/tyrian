declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class OptimisticReturnFilters {
                    public constructor()
                    public static filterOptimisticReturnValue(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>, arg2: int): java.lang.invoke.MethodHandle
                    public static filterOptimisticReturnValue(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: jdk.internal.dynalink.CallSiteDescriptor): jdk.internal.dynalink.linker.GuardedInvocation
                    public static ensureInt(arg0: java.lang.Object, arg1: int): int
                    public static ensureNumber(arg0: java.lang.Object, arg1: int): double
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}