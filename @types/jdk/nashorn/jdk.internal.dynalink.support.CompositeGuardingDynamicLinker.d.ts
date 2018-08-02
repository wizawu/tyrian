declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
                class CompositeGuardingDynamicLinker implements jdk.internal.dynalink.linker.GuardingDynamicLinker , java.io.Serializable {
                    public constructor(arg0: java.lang.Iterable<jdk.internal.dynalink.linker.GuardingDynamicLinker>)
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}