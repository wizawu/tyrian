declare namespace jdk {
  namespace dynalink {
    namespace support {
      abstract class AbstractRelinkableCallSite
        extends java.lang.invoke.MutableCallSite
        implements jdk.dynalink.RelinkableCallSite
      {
        protected constructor(arg0: jdk.dynalink.CallSiteDescriptor)
        public getDescriptor(): jdk.dynalink.CallSiteDescriptor
        public initialize(arg0: java.lang.invoke.MethodHandle): void
      }
    }
  }
}
