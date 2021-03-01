declare namespace jdk {
  namespace dynalink {
    namespace linker {
      namespace support {

        class CompositeGuardingDynamicLinker implements jdk.dynalink.linker.GuardingDynamicLinker {

          public constructor(arg0: java.lang.Iterable<jdk.dynalink.linker.GuardingDynamicLinker>)
          public getGuardedInvocation(arg0: jdk.dynalink.linker.LinkRequest, arg1: jdk.dynalink.linker.LinkerServices): jdk.dynalink.linker.GuardedInvocation
        }

      }
    }
  }
}
