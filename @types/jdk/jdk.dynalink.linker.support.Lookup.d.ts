declare namespace jdk {
  namespace dynalink {
    namespace linker {
      namespace support {

        class Lookup {
          public static readonly PUBLIC: jdk.dynalink.linker.support.Lookup
          public constructor(arg0: java.lang.invoke.MethodHandles$Lookup)
          public unreflect(arg0: java.lang.reflect.Method): java.lang.invoke.MethodHandle
          public static unreflect(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.reflect.Method): java.lang.invoke.MethodHandle
          public unreflectGetter(arg0: java.lang.reflect.Field): java.lang.invoke.MethodHandle
          public findGetter(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>): java.lang.invoke.MethodHandle
          public unreflectSetter(arg0: java.lang.reflect.Field): java.lang.invoke.MethodHandle
          public unreflectConstructor(arg0: java.lang.reflect.Constructor<unknown>): java.lang.invoke.MethodHandle
          public static unreflectConstructor(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.reflect.Constructor<unknown>): java.lang.invoke.MethodHandle
          public findSpecial(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
          public findStatic(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
          public findVirtual(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
          public static findOwnSpecial(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>, ...vargs: (java.lang.Class<unknown>)[]): java.lang.invoke.MethodHandle
          public findOwnSpecial(arg0: java.lang.String | string, arg1: java.lang.Class<unknown>, ...vargs: (java.lang.Class<unknown>)[]): java.lang.invoke.MethodHandle
          public static findOwnStatic(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<unknown>, ...vargs: (java.lang.Class<unknown>)[]): java.lang.invoke.MethodHandle
          public findOwnStatic(arg0: java.lang.String | string, arg1: java.lang.Class<unknown>, ...vargs: (java.lang.Class<unknown>)[]): java.lang.invoke.MethodHandle
        }

      }
    }
  }
}
