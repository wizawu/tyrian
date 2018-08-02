declare namespace jdk {
    namespace internal {
        namespace dynalink {
class DynamicLinkerFactory {
    public static DEFAULT_UNSTABLE_RELINK_THRESHOLD: int
    public constructor()
    public setClassLoader(arg0: java.lang.ClassLoader): void
    public setPrioritizedLinkers(arg0: java.util.List<jdk.internal.dynalink.linker.GuardingDynamicLinker>): void
    public setPrioritizedLinkers(...arg0: jdk.internal.dynalink.linker.GuardingDynamicLinker[]): void
    public setPrioritizedLinker(arg0: jdk.internal.dynalink.linker.GuardingDynamicLinker | jdk.internal.dynalink.linker.GuardingDynamicLinker$$Lambda): void
    public setFallbackLinkers(arg0: java.util.List<jdk.internal.dynalink.linker.GuardingDynamicLinker>): void
    public setFallbackLinkers(...arg0: jdk.internal.dynalink.linker.GuardingDynamicLinker[]): void
    public setRuntimeContextArgCount(arg0: int): void
    public setSyncOnRelink(arg0: boolean): void
    public setUnstableRelinkThreshold(arg0: int): void
    public setPrelinkFilter(arg0: jdk.internal.dynalink.GuardedInvocationFilter | jdk.internal.dynalink.GuardedInvocationFilter$$Lambda): void
    public setAutoConversionStrategy(arg0: jdk.internal.dynalink.linker.MethodTypeConversionStrategy | jdk.internal.dynalink.linker.MethodTypeConversionStrategy$$Lambda): void
    public setInternalObjectsFilter(arg0: jdk.internal.dynalink.linker.MethodHandleTransformer | jdk.internal.dynalink.linker.MethodHandleTransformer$$Lambda): void
    public createLinker(): jdk.internal.dynalink.DynamicLinker
    public static class: java.lang.Class<any>
}

        }
    }
}