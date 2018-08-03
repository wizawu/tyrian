declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
                class BottomGuardingDynamicLinker implements jdk.internal.dynalink.linker.TypeBasedGuardingDynamicLinker {
                    public static readonly INSTANCE: jdk.internal.dynalink.support.BottomGuardingDynamicLinker
                    public canLinkType(arg0: java.lang.Class<any>): boolean
                    public getGuardedInvocation(arg0: jdk.internal.dynalink.linker.LinkRequest, arg1: jdk.internal.dynalink.linker.LinkerServices): jdk.internal.dynalink.linker.GuardedInvocation
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}