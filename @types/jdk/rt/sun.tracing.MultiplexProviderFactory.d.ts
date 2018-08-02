declare namespace sun {
    namespace tracing {
        class MultiplexProviderFactory extends com.sun.tracing.ProviderFactory {
            public constructor(arg0: java.util.Set<com.sun.tracing.ProviderFactory>)
            public createProvider<T extends com.sun.tracing.Provider>(arg0: java.lang.Class<T>): T
            public static class: java.lang.Class<any>
        }
    }
}