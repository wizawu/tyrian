declare namespace java {
    namespace lang {
        namespace invoke {
            abstract class DelegatingMethodHandle extends java.lang.invoke.MethodHandle {
                protected constructor(arg0: java.lang.invoke.MethodHandle)
                protected constructor(arg0: java.lang.invoke.MethodType, arg1: java.lang.invoke.MethodHandle)
                protected constructor(arg0: java.lang.invoke.MethodType, arg1: java.lang.invoke.LambdaForm)
                protected abstract getTarget(): java.lang.invoke.MethodHandle
                public static class: java.lang.Class<any>
            }
            interface DelegatingMethodHandle$$Lambda extends java.lang.invoke.MethodHandle {
                (): java.lang.invoke.MethodHandle
            }
        }
    }
}