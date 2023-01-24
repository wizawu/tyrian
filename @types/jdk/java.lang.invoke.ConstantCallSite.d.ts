declare namespace java {
  namespace lang {
    namespace invoke {
      class ConstantCallSite extends java.lang.invoke.CallSite {
        public constructor(arg0: java.lang.invoke.MethodHandle)
        protected constructor(arg0: java.lang.invoke.MethodType, arg1: java.lang.invoke.MethodHandle)
        public getTarget(): java.lang.invoke.MethodHandle
        public setTarget(arg0: java.lang.invoke.MethodHandle): void
        public dynamicInvoker(): java.lang.invoke.MethodHandle
      }
    }
  }
}
