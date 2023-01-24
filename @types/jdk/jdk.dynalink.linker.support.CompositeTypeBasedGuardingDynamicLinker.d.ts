declare namespace jdk {
  namespace dynalink {
    namespace linker {
      namespace support {
        class CompositeTypeBasedGuardingDynamicLinker implements jdk.dynalink.linker.TypeBasedGuardingDynamicLinker {
          public constructor(arg0: java.lang.Iterable<jdk.dynalink.linker.TypeBasedGuardingDynamicLinker>)
          public canLinkType(arg0: java.lang.Class<unknown>): boolean
          public getGuardedInvocation(
            arg0: jdk.dynalink.linker.LinkRequest,
            arg1: jdk.dynalink.linker.LinkerServices
          ): jdk.dynalink.linker.GuardedInvocation
          public static optimize(
            arg0: java.lang.Iterable<jdk.dynalink.linker.GuardingDynamicLinker>
          ): java.util.List<jdk.dynalink.linker.GuardingDynamicLinker>
        }
      }
    }
  }
}
