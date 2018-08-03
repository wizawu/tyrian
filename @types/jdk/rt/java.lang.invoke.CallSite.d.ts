declare namespace java {
    namespace lang {
        namespace invoke {
            abstract class CallSite {
                public type(): java.lang.invoke.MethodType
                public abstract getTarget(): java.lang.invoke.MethodHandle
                public abstract setTarget(arg0: java.lang.invoke.MethodHandle): void
                public abstract dynamicInvoker(): java.lang.invoke.MethodHandle
                public static class: java.lang.Class<any>
            }
        }
    }
}