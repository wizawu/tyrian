declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
class CompositeTypeBasedGuardingDynamicLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker , java.io.Serializable {
    public constructor(arg0: java.lang.Iterable<jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker>)
    public canLinkType(arg0: java.lang.Class<any>): boolean
    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
    public static optimize(arg0: java.lang.Iterable<jdk.internal.dynalink.linker.GuardingDynamicLinker>): java.util.List<jdk.internal.dynalink.linker.GuardingDynamicLinker>
    public static class: java.lang.Class<any>
}

            }
        }
    }
}