declare namespace java {
  namespace lang {
    namespace invoke {

      interface MethodHandleInfo {
        public static readonly REF_getField: int
        public static readonly REF_getStatic: int
        public static readonly REF_putField: int
        public static readonly REF_putStatic: int
        public static readonly REF_invokeVirtual: int
        public static readonly REF_invokeStatic: int
        public static readonly REF_invokeSpecial: int
        public static readonly REF_newInvokeSpecial: int
        public static readonly REF_invokeInterface: int
        getReferenceKind(): int
        getDeclaringClass(): java.lang.Class<unknown>
        getName(): java.lang.String
        getMethodType(): java.lang.invoke.MethodType
        reflectAs<T extends java.lang.reflect.Member>(arg0: java.lang.Class<T>, arg1: java.lang.invoke.MethodHandles$Lookup): T
        getModifiers(): int
        isVarArgs(): boolean
        referenceKindToString(arg0: int): java.lang.String
        toString(arg0: int, arg1: java.lang.Class<unknown>, arg2: java.lang.String, arg3: java.lang.invoke.MethodType): java.lang.String
      }

    }
  }
}
