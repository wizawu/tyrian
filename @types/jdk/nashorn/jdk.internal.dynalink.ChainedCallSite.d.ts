declare namespace jdk {
    namespace internal {
        namespace dynalink {
            class ChainedCallSite extends jdk.internal.dynalink.support.AbstractRelinkableCallSite {
                public constructor(arg0: jdk.internal.dynalink.CallSiteDescriptor)
                protected getMaxChainLength(): int
                public relink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                public resetAndRelink(arg0: jdk.internal.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
                protected getPruneSwitchpoints(): java.lang.invoke.MethodHandle
                protected getPruneCatches(): java.lang.invoke.MethodHandle
                public static class: java.lang.Class<any>
            }
        }
    }
}