declare namespace jdk {
  namespace dynalink {

    class DynamicLinker {
      constructor(arg0: jdk.dynalink.linker.LinkerServices, arg1: jdk.dynalink.linker.GuardedInvocationTransformer | jdk.dynalink.linker.GuardedInvocationTransformer$$lambda, arg2: boolean | java.lang.Boolean, arg3: number | java.lang.Integer)
      public link<T extends jdk.dynalink.RelinkableCallSite>(arg0: T): T
      public getLinkerServices(): jdk.dynalink.linker.LinkerServices
      public static getLinkedCallSiteLocation(): java.lang.StackTraceElement
    }

  }
}
