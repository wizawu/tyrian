declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace linker {
                    class Bootstrap {
                        public static BOOTSTRAP: jdk.nashorn.internal.codegen.CompilerConstants$Call
                        public static isCallable(arg0: java.lang.Object): boolean
                        public static isStrictCallable(arg0: java.lang.Object): boolean
                        public static isDynamicMethod(arg0: java.lang.Object): boolean
                        public static isFunctionalInterfaceObject(arg0: java.lang.Object): boolean
                        public static bootstrap(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType, arg3: int): java.lang.invoke.CallSite
                        public static mathBootstrap(arg0: java.lang.invoke.MethodHandles$Lookup, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType, arg3: int): java.lang.invoke.CallSite
                        public static createDynamicInvoker(arg0: java.lang.String | string, arg1: java.lang.Class<any>, ...arg2: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                        public static createDynamicInvoker(arg0: java.lang.String | string, arg1: int, arg2: java.lang.Class<any>, ...arg3: java.lang.Class<any>[]): java.lang.invoke.MethodHandle
                        public static createDynamicInvoker(arg0: java.lang.String | string, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                        public static bindCallable(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object[]): java.lang.Object
                        public static createSuperAdapter(arg0: java.lang.Object): java.lang.Object
                        public static checkReflectionAccess(arg0: java.lang.Class<any>, arg1: boolean): void
                        public static getLinkerServices(): jdk.internal.dynalink.linker.LinkerServices
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}