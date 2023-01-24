declare namespace jdk {
  namespace dynalink {
    namespace linker {
      interface GuardingDynamicLinker$$lambda {
        (
          arg0: jdk.dynalink.linker.LinkRequest,
          arg1: jdk.dynalink.linker.LinkerServices
        ): jdk.dynalink.linker.GuardedInvocation
      }

      interface GuardingDynamicLinker {
        getGuardedInvocation(
          arg0: jdk.dynalink.linker.LinkRequest,
          arg1: jdk.dynalink.linker.LinkerServices
        ): jdk.dynalink.linker.GuardedInvocation
      }
    }
  }
}
