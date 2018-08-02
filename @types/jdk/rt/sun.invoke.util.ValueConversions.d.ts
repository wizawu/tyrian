declare namespace sun {
    namespace invoke {
        namespace util {
class ValueConversions {
    public constructor()
    public static unboxExact(arg0: sun.invoke.util.Wrapper): java.lang.invoke.MethodHandle
    public static unboxExact(arg0: sun.invoke.util.Wrapper, arg1: boolean): java.lang.invoke.MethodHandle
    public static unboxWiden(arg0: sun.invoke.util.Wrapper): java.lang.invoke.MethodHandle
    public static unboxCast(arg0: sun.invoke.util.Wrapper): java.lang.invoke.MethodHandle
    public static primitiveConversion(arg0: sun.invoke.util.Wrapper, arg1: java.lang.Object, arg2: boolean): java.lang.Number
    public static widenSubword(arg0: java.lang.Object): int
    public static boxExact(arg0: sun.invoke.util.Wrapper): java.lang.invoke.MethodHandle
    public static zeroConstantFunction(arg0: sun.invoke.util.Wrapper): java.lang.invoke.MethodHandle
    public static ignore(): java.lang.invoke.MethodHandle
    public static cast(): java.lang.invoke.MethodHandle
    public static convertPrimitive(arg0: sun.invoke.util.Wrapper, arg1: sun.invoke.util.Wrapper): java.lang.invoke.MethodHandle
    public static convertPrimitive(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public static class: java.lang.Class<any>
}

        }
    }
}