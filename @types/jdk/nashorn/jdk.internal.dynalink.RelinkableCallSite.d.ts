declare namespace jdk {
    namespace internal {
        namespace dynalink {
interface RelinkableCallSite {
    initialize(arg0: java.lang.invoke.MethodHandle): void
    getDescriptor(): jdk.internal.dynalink.CallSiteDescriptor
    relink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
    resetAndRelink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
}

        }
    }
}