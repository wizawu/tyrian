declare namespace java {
  namespace lang {
    namespace invoke {
      interface MethodHandleInfo {
        readonly REF_getField: int
        readonly REF_getStatic: int
        readonly REF_putField: int
        readonly REF_putStatic: int
        readonly REF_invokeVirtual: int
        readonly REF_invokeStatic: int
        readonly REF_invokeSpecial: int
        readonly REF_newInvokeSpecial: int
        readonly REF_invokeInterface: int
        getReferenceKind(): number
        getDeclaringClass(): java.lang.Class<unknown>
        getName(): java.lang.String
        getMethodType(): java.lang.invoke.MethodType
        reflectAs<T extends java.lang.reflect.Member>(
          arg0: java.lang.Class<T>,
          arg1: java.lang.invoke.MethodHandles$Lookup
        ): T
        getModifiers(): number
        isVarArgs?(): boolean
        referenceKindToString?(arg0: number | java.lang.Integer): java.lang.String
        toString?(
          arg0: number | java.lang.Integer,
          arg1: java.lang.Class<unknown>,
          arg2: java.lang.String | string,
          arg3: java.lang.invoke.MethodType
        ): java.lang.String
      }
    }
  }
}
