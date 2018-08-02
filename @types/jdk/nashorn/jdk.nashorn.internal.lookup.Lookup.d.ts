declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace lookup {
class Lookup {
    public static MH: jdk.nashorn.internal.lookup.MethodHandleFunctionality
    public static EMPTY_GETTER: java.lang.invoke.MethodHandle
    public static EMPTY_SETTER: java.lang.invoke.MethodHandle
    public static TYPE_ERROR_THROWER_GETTER: java.lang.invoke.MethodHandle
    public static TYPE_ERROR_THROWER_SETTER: java.lang.invoke.MethodHandle
    public static GET_OBJECT_TYPE: java.lang.invoke.MethodType
    public static SET_OBJECT_TYPE: java.lang.invoke.MethodType
    public static GET_PRIMITIVE_TYPE: java.lang.invoke.MethodType
    public static SET_PRIMITIVE_TYPE: java.lang.invoke.MethodType
    public static emptyGetter(arg0: java.lang.Object): java.lang.Object
    public static emptySetter(arg0: java.lang.Object, arg1: java.lang.Object): void
    public static emptyGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public static typeErrorThrowerGetter(arg0: java.lang.Object): java.lang.Object
    public static typeErrorThrowerSetter(arg0: java.lang.Object, arg1: java.lang.Object): void
    public static filterArgumentType(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public static filterReturnType(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<any>): java.lang.invoke.MethodHandle
    public static class: java.lang.Class<any>
}

            }
        }
    }
}