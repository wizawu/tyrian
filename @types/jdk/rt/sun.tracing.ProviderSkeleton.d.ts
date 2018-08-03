declare namespace sun {
    namespace tracing {
        abstract class ProviderSkeleton implements java.lang.reflect.InvocationHandler , com.sun.tracing.Provider {
            protected active: boolean
            protected providerType: java.lang.Class<com.sun.tracing.Provider>
            protected probes: java.util.HashMap<java.lang.reflect.Method, sun.tracing.ProbeSkeleton>
            protected abstract createProbe(arg0: java.lang.reflect.Method): sun.tracing.ProbeSkeleton
            protected constructor(arg0: java.lang.Class<com.sun.tracing.Provider>)
            public init(): void
            public newProxyInstance<T extends com.sun.tracing.Provider>(): T
            public invoke<T extends com.sun.tracing.Provider>(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
            public getProbe<T extends com.sun.tracing.Provider>(arg0: java.lang.reflect.Method): com.sun.tracing.Probe
            public dispose<T extends com.sun.tracing.Provider>(): void
            protected getProviderName<T extends com.sun.tracing.Provider>(): string
            protected static getAnnotationString<T extends com.sun.tracing.Provider>(arg0: java.lang.reflect.AnnotatedElement, arg1: java.lang.Class<java.lang.annotation.Annotation>, arg2: java.lang.String | string): string
            protected static getAnnotationValue<T extends com.sun.tracing.Provider>(arg0: java.lang.reflect.AnnotatedElement, arg1: java.lang.Class<java.lang.annotation.Annotation>, arg2: java.lang.String | string, arg3: java.lang.Object): java.lang.Object
            protected triggerProbe<T extends com.sun.tracing.Provider>(arg0: java.lang.reflect.Method, arg1: java.lang.Object[]): void
            public static class: java.lang.Class<any>
        }
        interface ProviderSkeleton$$Lambda implements java.lang.reflect.InvocationHandler , com.sun.tracing.Provider {
            (arg0: java.lang.reflect.Method): sun.tracing.ProbeSkeleton
        }
    }
}