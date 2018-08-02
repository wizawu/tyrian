declare namespace java {
    namespace lang {
        namespace invoke {
            class MethodHandles {
                public static lookup(): java.lang.invoke.MethodHandles$Lookup
                public static publicLookup(): java.lang.invoke.MethodHandles$Lookup
                public static reflectAs<T extends java.lang.reflect.Member>(arg0: java.lang.Class<T>, arg1: java.lang.invoke.MethodHandle): T
                public static exactInvoker(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public static invoker(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public static spreadInvoker(arg0: java.lang.invoke.MethodType, arg1: int): java.lang.invoke.MethodHandle
                public static guardWithTest(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static catchException(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<java.lang.Throwable>, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static identity(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public static constant(arg0: java.lang.Class<any>, arg1: java.lang.Object): java.lang.invoke.MethodHandle
                public static arrayElementGetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public static arrayElementSetter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public static throwException(arg0: java.lang.Class<any>, arg1: java.lang.Class<java.lang.Throwable>): java.lang.invoke.MethodHandle
                public static filterReturnValue(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static filterArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.invoke.MethodHandle[]): java.lang.invoke.MethodHandle
                public static foldArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static permuteArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType, ...arg2: int[]): java.lang.invoke.MethodHandle
                public static collectArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                public static dropArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.util.List<java.lang.Class<any>>): java.lang.invoke.MethodHandle
                public static explicitCastArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public static insertArguments(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Object[]): java.lang.invoke.MethodHandle
                public static class: java.lang.Class<any>
            }
        }
    }
}