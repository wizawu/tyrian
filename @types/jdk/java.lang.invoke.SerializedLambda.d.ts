declare namespace java {
  namespace lang {
    namespace invoke {

      class SerializedLambda implements java.io.Serializable {
        public constructor(arg0: java.lang.Class<unknown>, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: int, arg5: java.lang.String, arg6: java.lang.String, arg7: java.lang.String, arg8: java.lang.String, arg9: java.lang.Object[])
        public getCapturingClass(): java.lang.String
        public getFunctionalInterfaceClass(): java.lang.String
        public getFunctionalInterfaceMethodName(): java.lang.String
        public getFunctionalInterfaceMethodSignature(): java.lang.String
        public getImplClass(): java.lang.String
        public getImplMethodName(): java.lang.String
        public getImplMethodSignature(): java.lang.String
        public getImplMethodKind(): int
        public getInstantiatedMethodType(): java.lang.String
        public getCapturedArgCount(): int
        public getCapturedArg(arg0: int): java.lang.Object
        public toString(): java.lang.String
      }

    }
  }
}
