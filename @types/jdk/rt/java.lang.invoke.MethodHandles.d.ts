declare namespace java {
    namespace lang {
        namespace invoke {
            class MethodHandles {
                public static lookup(): java.lang.invoke.MethodHandles$Lookup
                public static publicLookup(): java.lang.invoke.MethodHandles$Lookup
                public static reflectAs<T extends java.lang.reflect.Member>(arg0: java.lang.Class<T>, arg1: java.lang.invoke.MethodHandle): T
                public static exactInvoker<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public static invoker<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public static spreadInvoker<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodType, arg1: int): java.lang.invoke.MethodHandle
                public static guardWithTest<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static catchException<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Class<java.lang.Throwable>, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static identity<T extends java.lang.reflect.Member>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public static constant<T extends java.lang.reflect.Member>(arg0: java.lang.Class<any>, arg1: java.lang.Object): java.lang.invoke.MethodHandle
                public static arrayElementGetter<T extends java.lang.reflect.Member>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public static arrayElementSetter<T extends java.lang.reflect.Member>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public static throwException<T extends java.lang.reflect.Member>(arg0: java.lang.Class<any>, arg1: java.lang.Class<java.lang.Throwable>): java.lang.invoke.MethodHandle
                public static filterReturnValue<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static filterArguments<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.invoke.MethodHandle[]): java.lang.invoke.MethodHandle
                public static foldArguments<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static permuteArguments<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType, ...arg2: int[]): java.lang.invoke.MethodHandle
                public static collectArguments<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static dropArguments<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                public static dropArguments<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodHandle, arg1: int, arg2: java.util.List<java.lang.Class<any>>): java.lang.invoke.MethodHandle
                public static explicitCastArguments<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public static insertArguments<T extends java.lang.reflect.Member>(arg0: java.lang.invoke.MethodHandle, arg1: int, ...arg2: java.lang.Object[]): java.lang.invoke.MethodHandle
                public static class: java.lang.Class<any>
            }
        }
    }
}