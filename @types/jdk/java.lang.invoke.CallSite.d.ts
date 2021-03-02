declare namespace java {
  namespace lang {
    namespace invoke {

      abstract class CallSite {
        target: java.lang.invoke.MethodHandle
        static readonly $assertionsDisabled: boolean
        constructor(arg0: java.lang.invoke.MethodType)
        constructor(arg0: java.lang.invoke.MethodHandle)
        constructor(arg0: java.lang.invoke.MethodType, arg1: java.lang.invoke.MethodHandle)
        public type(): java.lang.invoke.MethodType
        public abstract getTarget(): java.lang.invoke.MethodHandle
        public abstract setTarget(arg0: java.lang.invoke.MethodHandle): void
        checkTargetChange(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): void
        public abstract dynamicInvoker(): java.lang.invoke.MethodHandle
        makeDynamicInvoker(): java.lang.invoke.MethodHandle
        setTargetNormal(arg0: java.lang.invoke.MethodHandle): void
        getTargetVolatile(): java.lang.invoke.MethodHandle
        setTargetVolatile(arg0: java.lang.invoke.MethodHandle): void
        static makeSite(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.String, arg2: java.lang.invoke.MethodType, arg3: java.lang.Object, arg4: java.lang.Class<unknown>): java.lang.invoke.CallSite
      }

    }
  }
}
