declare namespace javax {
    namespace imageio {
        namespace spi {
            class SubRegistry {
                public constructor(arg0: javax.imageio.spi.ServiceRegistry, arg1: java.lang.Class)
                public registerServiceProvider(arg0: java.lang.Object): boolean
                public deregisterServiceProvider(arg0: java.lang.Object): boolean
                public contains(arg0: java.lang.Object): boolean
                public setOrdering(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                public unsetOrdering(arg0: java.lang.Object, arg1: java.lang.Object): boolean
                public getServiceProviders(arg0: boolean): java.util.Iterator
                public getServiceProviderByClass<T>(arg0: java.lang.Class<T>): T
                public clear<T>(): void
                public finalize<T>(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}