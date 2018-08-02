declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace linker {
                    class NashornGuards {
                        public static explicitInstanceOfCheck(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): boolean
                        public static getScriptObjectGuard(): java.lang.invoke.MethodHandle
                        public static getNotJSObjectGuard(): java.lang.invoke.MethodHandle
                        public static getScriptObjectGuard(arg0: boolean): java.lang.invoke.MethodHandle
                        public static getMapGuard(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: boolean): java.lang.invoke.MethodHandle
                        public static getGuard(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.Property, arg2: jdk.internal.dynalink.CallSiteDescriptor, arg3: boolean): java.lang.invoke.MethodHandle
                        public static getIdentityGuard(arg0: jdk.nashorn.internal.runtime.ScriptObject): java.lang.invoke.MethodHandle
                        public static getStringGuard(): java.lang.invoke.MethodHandle
                        public static getNumberGuard(): java.lang.invoke.MethodHandle
                        public static combineGuards(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}