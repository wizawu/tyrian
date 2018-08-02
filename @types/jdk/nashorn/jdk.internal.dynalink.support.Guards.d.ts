declare namespace jdk {
    namespace internal {
        namespace dynalink {
            namespace support {
class Guards {
    public static isOfClass(arg0: java.lang.Class<any>, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    public static isInstance(arg0: java.lang.Class<any>, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    public static isInstance(arg0: java.lang.Class<any>, arg1: int, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    public static isArray(arg0: int, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    public static canReferenceDirectly(arg0: java.lang.ClassLoader, arg1: java.lang.ClassLoader): boolean
    public static asType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    public static asType(arg0: jdk.internal.dynalink.linker.LinkerServices, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
    public static getClassGuard(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public static getInstanceOfGuard(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public static getIdentityGuard(arg0: java.lang.Object): java.lang.invoke.MethodHandle
    public static isNull(): java.lang.invoke.MethodHandle
    public static isNotNull(): java.lang.invoke.MethodHandle
    public static class: java.lang.Class<any>
}

            }
        }
    }
}