declare namespace sun {
    namespace tracing {
        namespace dtrace {
            class DTraceProviderFactory extends com.sun.tracing.ProviderFactory {
                public constructor()
                public createProvider<T extends com.sun.tracing.Provider>(arg0: java.lang.Class<T>): T
                public createProviders<T extends com.sun.tracing.Provider>(arg0: java.util.Set<java.lang.Class<com.sun.tracing.Provider>>, arg1: java.lang.String | string): java.util.Map<java.lang.Class<com.sun.tracing.Provider>, com.sun.tracing.Provider>
                public static isSupported<T extends com.sun.tracing.Provider>(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}