declare namespace jdk {
  namespace dynalink {
    namespace linker {

      interface TypeBasedGuardingDynamicLinker extends jdk.dynalink.linker.GuardingDynamicLinker {
        canLinkType(arg0: java.lang.Class<unknown>): boolean
      }

    }
  }
}
