declare namespace jdk {
  namespace dynalink {
    namespace linker {

      class GuardedInvocation {
        public constructor(arg0: java.lang.invoke.MethodHandle)
        public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle)
        public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.SwitchPoint)
        public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.SwitchPoint)
        public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.SwitchPoint, arg3: java.lang.Class<java.lang.Throwable>)
        public constructor(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.SwitchPoint[], arg3: java.lang.Class<java.lang.Throwable>)
        public getInvocation(): java.lang.invoke.MethodHandle
        public getGuard(): java.lang.invoke.MethodHandle
        public getSwitchPoints(): java.lang.invoke.SwitchPoint[]
        public getException(): java.lang.Class<java.lang.Throwable>
        public hasBeenInvalidated(): boolean
        public replaceMethods(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): jdk.dynalink.linker.GuardedInvocation
        public addSwitchPoint(arg0: java.lang.invoke.SwitchPoint): jdk.dynalink.linker.GuardedInvocation
        public asType(arg0: java.lang.invoke.MethodType): jdk.dynalink.linker.GuardedInvocation
        public asType(arg0: jdk.dynalink.linker.LinkerServices, arg1: java.lang.invoke.MethodType): jdk.dynalink.linker.GuardedInvocation
        public asTypeSafeReturn(arg0: jdk.dynalink.linker.LinkerServices, arg1: java.lang.invoke.MethodType): jdk.dynalink.linker.GuardedInvocation
        public asType(arg0: jdk.dynalink.CallSiteDescriptor): jdk.dynalink.linker.GuardedInvocation
        public filterArguments(arg0: number | java.lang.Integer, ...vargs: (java.lang.invoke.MethodHandle)[]): jdk.dynalink.linker.GuardedInvocation
        public dropArguments(arg0: number | java.lang.Integer, arg1: java.util.List<java.lang.Class<unknown>>): jdk.dynalink.linker.GuardedInvocation
        public dropArguments(arg0: number | java.lang.Integer, ...vargs: (java.lang.Class<unknown>)[]): jdk.dynalink.linker.GuardedInvocation
        public compose(arg0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
        public compose(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
      }

    }
  }
}
