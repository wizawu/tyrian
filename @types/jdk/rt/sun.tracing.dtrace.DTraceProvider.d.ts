declare namespace sun {
    namespace tracing {
        namespace dtrace {
            class DTraceProvider extends sun.tracing.ProviderSkeleton {
                protected createProbe(arg0: java.lang.reflect.Method): sun.tracing.ProbeSkeleton
                public dispose(): void
                public newProxyInstance<T extends com.sun.tracing.Provider>(): T
                protected triggerProbe<T extends com.sun.tracing.Provider>(arg0: java.lang.reflect.Method, arg1: java.lang.Object[]): void
                public getProviderName<T extends com.sun.tracing.Provider>(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}