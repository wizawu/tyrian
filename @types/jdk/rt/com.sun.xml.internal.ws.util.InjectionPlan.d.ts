declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        abstract class InjectionPlan<T, R> {
                            public constructor()
                            public inject(arg0: T, arg1: R): void
                            public inject(arg0: T, arg1: java.util.concurrent.Callable<R> | java.util.concurrent.Callable$$Lambda<R>): void
                            public static buildInjectionPlan<T, R>(arg0: java.lang.Class<T>, arg1: java.lang.Class<R>, arg2: boolean): com.sun.xml.internal.ws.util.InjectionPlan<T, R>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}