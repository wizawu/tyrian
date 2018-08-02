declare namespace com {
    namespace sun {
        namespace tracing {
            abstract class ProviderFactory {
                protected constructor()
                public createProvider<T extends com.sun.tracing.Provider>(arg0: java.lang.Class<T>): T
                public static getDefaultFactory(): com.sun.tracing.ProviderFactory
                public static class: java.lang.Class<any>
            }
        }
    }
}