declare namespace com {
    namespace sun {
        namespace tracing {
            abstract class ProviderFactory {
                protected constructor()
                public abstract createProvider<T extends com.sun.tracing.Provider>(arg0: java.lang.Class<T>): T
                public static getDefaultFactory<T extends com.sun.tracing.Provider>(): com.sun.tracing.ProviderFactory
                public static class: java.lang.Class<any>
            }
            interface ProviderFactory$$Lambda {
                (arg0: java.lang.Class<T>): T
            }
        }
    }
}