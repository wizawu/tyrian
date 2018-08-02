declare namespace java {
    namespace lang {
        namespace invoke {
            class HandleCache {
                public static getMethodFromPerClassCache(arg0: java.util.Map<java.lang.invoke.CacheKey, java.lang.ref.WeakReference<java.lang.invoke.MethodHandle>>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                public static getMethodWithSpecialCallerFromPerClassCache(arg0: java.util.Map<java.lang.invoke.CacheKey, java.lang.ref.WeakReference<java.lang.invoke.MethodHandle>>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType, arg3: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public static getFieldFromPerClassCache(arg0: java.util.Map<java.lang.invoke.CacheKey, java.lang.ref.WeakReference<java.lang.invoke.MethodHandle>>, arg1: java.lang.String | string, arg2: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public static putMethodInPerClassCache(arg0: java.util.Map<java.lang.invoke.CacheKey, java.lang.ref.WeakReference<java.lang.invoke.MethodHandle>>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType, arg3: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static putMethodWithSpecialCallerInPerClassCache(arg0: java.util.Map<java.lang.invoke.CacheKey, java.lang.ref.WeakReference<java.lang.invoke.MethodHandle>>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType, arg3: java.lang.invoke.MethodHandle, arg4: java.lang.Class<any>): java.lang.invoke.MethodHandle
                public static putFieldInPerClassCache(arg0: java.util.Map<java.lang.invoke.CacheKey, java.lang.ref.WeakReference<java.lang.invoke.MethodHandle>>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                public static class: java.lang.Class<any>
            }
        }
    }
}