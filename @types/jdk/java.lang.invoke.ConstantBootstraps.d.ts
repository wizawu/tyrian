declare namespace java {
  namespace lang {
    namespace invoke {

      class ConstantBootstraps {
        public constructor()
        static makeConstant(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>, arg3: java.lang.Object | any, arg4: java.lang.Class<unknown>): java.lang.Object
        public static nullConstant(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>): java.lang.Object
        public static primitiveClass(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>): java.lang.Class<unknown>
        public static enumConstant<E extends java.lang.Enum<E>>(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<E>): E
        public static getStaticFinal(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>, arg3: java.lang.Class<unknown>): java.lang.Object
        public static getStaticFinal(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>): java.lang.Object
        public static invoke(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>, arg3: java.lang.invoke.MethodHandle, ...vargs: (java.lang.Object | any)[]): java.lang.Object
        public static fieldVarHandle(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<java.lang.invoke.VarHandle>, arg3: java.lang.Class<unknown>, arg4: java.lang.Class<unknown>): java.lang.invoke.VarHandle
        public static staticFieldVarHandle(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<java.lang.invoke.VarHandle>, arg3: java.lang.Class<unknown>, arg4: java.lang.Class<unknown>): java.lang.invoke.VarHandle
        public static arrayVarHandle(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<java.lang.invoke.VarHandle>, arg3: java.lang.Class<unknown>): java.lang.invoke.VarHandle
      }

    }
  }
}
