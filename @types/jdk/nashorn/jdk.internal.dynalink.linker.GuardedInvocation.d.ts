declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace linker {
                class GuardedInvocation {
                    public constructor(arg0: java.lang.invoke.MethodHandle)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.SwitchPoint)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.SwitchPoint)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.SwitchPoint, arg3: java.lang.Class<java.lang.Throwable>)
                    public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.SwitchPoint[], arg3: java.lang.Class<java.lang.Throwable>)
                    public getInvocation(): java.lang.invoke.MethodHandle
                    public getGuard(): java.lang.invoke.MethodHandle
                    public getSwitchPoints(): java.lang.invoke.SwitchPoint[]
                    public getException(): java.lang.Class<java.lang.Throwable>
                    public hasBeenInvalidated(): boolean
                    public assertType(arg0: java.lang.invoke.MethodType): void
                    public replaceMethods(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): jdk.internal.dynalink.linker.GuardedInvocation
                    public addSwitchPoint(arg0: java.lang.invoke.SwitchPoint): jdk.internal.dynalink.linker.GuardedInvocation
                    public asType(arg0: java.lang.invoke.MethodType): jdk.internal.dynalink.linker.GuardedInvocation
                    public asType(arg0: jdk.internal.dynalink.linker.LinkerServices, arg1: java.lang.invoke.MethodType): jdk.internal.dynalink.linker.GuardedInvocation
                    public asTypeSafeReturn(arg0: jdk.internal.dynalink.linker.LinkerServices, arg1: java.lang.invoke.MethodType): jdk.internal.dynalink.linker.GuardedInvocation
                    public asType(arg0: jdk.internal.dynalink.CallSiteDescriptor): jdk.internal.dynalink.linker.GuardedInvocation
                    public filterArguments(arg0: int, ...arg1: java.lang.invoke.MethodHandle[]): jdk.internal.dynalink.linker.GuardedInvocation
                    public dropArguments(arg0: int, arg1: java.util.List<java.lang.Class<any>>): jdk.internal.dynalink.linker.GuardedInvocation
                    public dropArguments(arg0: int, ...arg1: java.lang.Class<any>[]): jdk.internal.dynalink.linker.GuardedInvocation
                    public compose(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public compose(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}