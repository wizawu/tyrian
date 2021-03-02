declare namespace java {
  namespace lang {
    namespace invoke {

      abstract class MethodHandle {
        readonly form: java.lang.invoke.LambdaForm
        asTypeCache: java.lang.invoke.MethodHandle
        customizationCount: byte
        static readonly $assertionsDisabled: boolean
        public type(): java.lang.invoke.MethodType
        constructor(arg0: java.lang.invoke.MethodType, arg1: java.lang.invoke.LambdaForm)
        public invokeExact(...arg0: java.lang.Object[]): java.lang.Object
        public invoke(...arg0: java.lang.Object[]): java.lang.Object
        invokeBasic(...arg0: java.lang.Object[]): java.lang.Object
        static linkToVirtual(...arg0: java.lang.Object[]): java.lang.Object
        static linkToStatic(...arg0: java.lang.Object[]): java.lang.Object
        static linkToSpecial(...arg0: java.lang.Object[]): java.lang.Object
        static linkToInterface(...arg0: java.lang.Object[]): java.lang.Object
        public invokeWithArguments(...arg0: java.lang.Object[]): java.lang.Object
        public invokeWithArguments(arg0: java.util.List<unknown>): java.lang.Object
        public asType(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
        asTypeUncached(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
        public asSpreader(arg0: java.lang.Class<unknown>, arg1: int): java.lang.invoke.MethodHandle
        public asSpreader(arg0: int, arg1: java.lang.Class<unknown>, arg2: int): java.lang.invoke.MethodHandle
        public withVarargs(arg0: boolean): java.lang.invoke.MethodHandle
        public asCollector(arg0: java.lang.Class<unknown>, arg1: int): java.lang.invoke.MethodHandle
        public asCollector(arg0: int, arg1: java.lang.Class<unknown>, arg2: int): java.lang.invoke.MethodHandle
        asCollectorChecks(arg0: java.lang.Class<unknown>, arg1: int, arg2: int): boolean
        public asVarargsCollector(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodHandle
        public isVarargsCollector(): boolean
        public asFixedArity(): java.lang.invoke.MethodHandle
        public bindTo(arg0: java.lang.Object): java.lang.invoke.MethodHandle
        public toString(): java.lang.String
        standardString(): java.lang.String
        debugString(): java.lang.String
        bindArgumentL(arg0: int, arg1: java.lang.Object): java.lang.invoke.BoundMethodHandle
        setVarargs(arg0: java.lang.invoke.MemberName): java.lang.invoke.MethodHandle
        viewAsType(arg0: java.lang.invoke.MethodType, arg1: boolean): java.lang.invoke.MethodHandle
        viewAsTypeChecks(arg0: java.lang.invoke.MethodType, arg1: boolean): boolean
        internalForm(): java.lang.invoke.LambdaForm
        internalMemberName(): java.lang.invoke.MemberName
        internalCallerClass(): java.lang.Class<unknown>
        intrinsicName(): java.lang.invoke.MethodHandleImpl$Intrinsic
        withInternalMemberName(arg0: java.lang.invoke.MemberName, arg1: boolean): java.lang.invoke.MethodHandle
        isInvokeSpecial(): boolean
        internalValues(): java.lang.Object
        internalProperties(): java.lang.Object
        abstract copyWith(arg0: java.lang.invoke.MethodType, arg1: java.lang.invoke.LambdaForm): java.lang.invoke.MethodHandle
        abstract rebind(): java.lang.invoke.BoundMethodHandle
        updateForm(arg0: java.lang.invoke.LambdaForm): void
        customize(): void
      }

    }
  }
}
