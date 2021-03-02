declare namespace jdk {
  namespace dynalink {
    namespace linker {

      interface GuardedInvocationTransformer$$lambda {
        (arg0: jdk.dynalink.linker.GuardedInvocation, arg1: jdk.dynalink.linker.LinkRequest, arg2: jdk.dynalink.linker.LinkerServices): jdk.dynalink.linker.GuardedInvocation
      }

      interface GuardedInvocationTransformer {
        filter(arg0: jdk.dynalink.linker.GuardedInvocation, arg1: jdk.dynalink.linker.LinkRequest, arg2: jdk.dynalink.linker.LinkerServices): jdk.dynalink.linker.GuardedInvocation
      }

    }
  }
}
