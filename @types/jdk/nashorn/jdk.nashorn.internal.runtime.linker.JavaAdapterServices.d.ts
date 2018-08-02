declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace linker {
                    class JavaAdapterServices {
                        public static getHandle(arg0: jdk.nashorn.internal.runtime.ScriptFunction, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                        public static getHandle(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                        public static getClassOverrides(): java.lang.Object
                        public static invokeNoPermissions(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.Object): void
                        public static setGlobal(arg0: java.lang.Object): void
                        public static getGlobal(): java.lang.Object
                        public static getObjectConverter(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
                        public static exportReturnValue(arg0: java.lang.Object): java.lang.Object
                        public static toCharPrimitive(arg0: java.lang.Object): char
                        public static toString(arg0: java.lang.Object): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}