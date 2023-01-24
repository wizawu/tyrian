declare namespace java {
  namespace lang {
    namespace invoke {
      class SerializedLambda implements java.io.Serializable {
        public constructor(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string,
          arg4: number | java.lang.Integer,
          arg5: java.lang.String | string,
          arg6: java.lang.String | string,
          arg7: java.lang.String | string,
          arg8: java.lang.String | string,
          arg9: java.lang.Object[] | any[]
        )
        public getCapturingClass(): java.lang.String
        public getFunctionalInterfaceClass(): java.lang.String
        public getFunctionalInterfaceMethodName(): java.lang.String
        public getFunctionalInterfaceMethodSignature(): java.lang.String
        public getImplClass(): java.lang.String
        public getImplMethodName(): java.lang.String
        public getImplMethodSignature(): java.lang.String
        public getImplMethodKind(): number
        public getInstantiatedMethodType(): java.lang.String
        public getCapturedArgCount(): number
        public getCapturedArg(arg0: number | java.lang.Integer): java.lang.Object
        public toString(): java.lang.String
      }
    }
  }
}
