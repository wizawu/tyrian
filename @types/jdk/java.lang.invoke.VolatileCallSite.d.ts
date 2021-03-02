declare namespace java {
  namespace lang {
    namespace invoke {

      class VolatileCallSite extends java.lang.invoke.CallSite {
        public constructor(arg0: java.lang.invoke.MethodType)
        public constructor(arg0: java.lang.invoke.MethodHandle)
        public getTarget(): java.lang.invoke.MethodHandle
        public setTarget(arg0: java.lang.invoke.MethodHandle): void
        public dynamicInvoker(): java.lang.invoke.MethodHandle
      }

    }
  }
}
