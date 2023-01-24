declare namespace jdk {
  namespace dynalink {
    namespace linker {
      namespace support {
        class TypeUtilities {
          static readonly OBJECT_CLASS: java.lang.Class<java.lang.Object>
          static readonly $assertionsDisabled: boolean
          public static isMethodInvocationConvertible(
            arg0: java.lang.Class<unknown>,
            arg1: java.lang.Class<unknown>
          ): boolean
          public static isConvertibleWithoutLoss(
            arg0: java.lang.Class<unknown>,
            arg1: java.lang.Class<unknown>
          ): boolean
          public static isSubtype(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): boolean
          public static getPrimitiveTypeByName(arg0: java.lang.String | string): java.lang.Class<unknown>
          public static getPrimitiveType(arg0: java.lang.Class<unknown>): java.lang.Class<unknown>
          public static getWrapperType(arg0: java.lang.Class<unknown>): java.lang.Class<unknown>
          public static isWrapperType(arg0: java.lang.Class<unknown>): boolean
        }
      }
    }
  }
}
