declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
                class Lookup {
                    public static PUBLIC: jdk.internal.dynalink.support.Lookup
                    public constructor(arg0: java.lang.invoke.MethodHandles$Lookup)
                    public unreflect(arg0: java.lang.reflect.Method): java.lang.invoke.MethodHandle
                    public static unreflect(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.reflect.Method): java.lang.invoke.MethodHandle
                    public unreflectGetter(arg0: java.lang.reflect.Field): java.lang.invoke.MethodHandle
                    public findGetter(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
                    public unreflectSetter(arg0: java.lang.reflect.Field): java.lang.invoke.MethodHandle
                    public unreflectConstructor(arg0: java.lang.reflect.Constructor<any>): java.lang.invoke.MethodHandle
                    public static unreflectConstructor(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.reflect.Constructor<any>): java.lang.invoke.MethodHandle
                    public findSpecial(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public findStatic(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public findVirtual(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public static findOwnSpecial(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                    public findOwnSpecial(arg0: java.lang.String | string, arg1: java.lang.Class<any>, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                    public static findOwnStatic(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                    public findOwnStatic(arg0: java.lang.String | string, arg1: java.lang.Class<any>, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}