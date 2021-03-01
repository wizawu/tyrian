declare namespace jdk {
  namespace dynalink {

    interface RelinkableCallSite {

      initialize(arg0: java.lang.invoke.MethodHandle): void
      getDescriptor(): jdk.dynalink.CallSiteDescriptor
      relink(arg0: jdk.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
      resetAndRelink(arg0: jdk.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
    }

  }
}
