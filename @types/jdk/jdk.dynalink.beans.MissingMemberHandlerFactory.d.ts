declare namespace jdk {
  namespace dynalink {
    namespace beans {
      interface MissingMemberHandlerFactory$$lambda {
        (arg0: jdk.dynalink.linker.LinkRequest, arg1: jdk.dynalink.linker.LinkerServices): java.lang.invoke.MethodHandle
      }

      interface MissingMemberHandlerFactory {
        createMissingMemberHandler(
          arg0: jdk.dynalink.linker.LinkRequest,
          arg1: jdk.dynalink.linker.LinkerServices
        ): java.lang.invoke.MethodHandle
      }
    }
  }
}
