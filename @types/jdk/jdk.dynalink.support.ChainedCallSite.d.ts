declare namespace jdk {
  namespace dynalink {
    namespace support {

      class ChainedCallSite extends jdk.dynalink.support.AbstractRelinkableCallSite {

        public constructor(arg0: jdk.dynalink.CallSiteDescriptor)
        protected getMaxChainLength(): int
        public relink(arg0: jdk.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
        public resetAndRelink(arg0: jdk.dynalink.linker.GuardedInvocation, arg1: java.lang.invoke.MethodHandle): void
      }

    }
  }
}
