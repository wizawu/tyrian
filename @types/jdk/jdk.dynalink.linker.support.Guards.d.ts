declare namespace jdk {
  namespace dynalink {
    namespace linker {
      namespace support {

        class Guards {
          static readonly $assertionsDisabled: boolean
          public static isOfClass(arg0: java.lang.Class<unknown>, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
          public static isInstance(arg0: java.lang.Class<unknown>, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
          public static isInstance(arg0: java.lang.Class<unknown>, arg1: number | java.lang.Integer, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
          public static isArray(arg0: number | java.lang.Integer, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
          public static asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
          public static asType(arg0: jdk.dynalink.linker.LinkerServices, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
          public static getClassGuard(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodHandle
          public static getInstanceOfGuard(arg0: java.lang.Class<unknown>): java.lang.invoke.MethodHandle
          public static getIdentityGuard(arg0: java.lang.Object | any): java.lang.invoke.MethodHandle
          public static isNull(): java.lang.invoke.MethodHandle
          public static isNotNull(): java.lang.invoke.MethodHandle
        }

      }
    }
  }
}
