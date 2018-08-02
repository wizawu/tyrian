declare namespace javax {
    namespace imageio {
        namespace spi {
            class ServiceRegistry {
                public constructor(arg0: java.util.Iterator<java.lang.Class<any>>)
                public static lookupProviders<T>(arg0: java.lang.Class<T>, arg1: java.lang.ClassLoader): java.util.Iterator<T>
                public static lookupProviders<T>(arg0: java.lang.Class<T>): java.util.Iterator<T>
                public getCategories(): java.util.Iterator<java.lang.Class<any>>
                public registerServiceProvider<T>(arg0: T, arg1: java.lang.Class<T>): boolean
                public registerServiceProvider<T>(arg0: java.lang.Object): void
                public registerServiceProviders<T>(arg0: java.util.Iterator<any>): void
                public deregisterServiceProvider<T>(arg0: T, arg1: java.lang.Class<T>): boolean
                public deregisterServiceProvider<T>(arg0: java.lang.Object): void
                public contains<T>(arg0: java.lang.Object): boolean
                public getServiceProviders<T>(arg0: java.lang.Class<T>, arg1: boolean): java.util.Iterator<T>
                public getServiceProviders<T>(arg0: java.lang.Class<T>, arg1: javax.imageio.spi.ServiceRegistry$Filter | javax.imageio.spi.ServiceRegistry$Filter$$Lambda, arg2: boolean): java.util.Iterator<T>
                public getServiceProviderByClass<T>(arg0: java.lang.Class<T>): T
                public setOrdering<T>(arg0: java.lang.Class<T>, arg1: T, arg2: T): boolean
                public unsetOrdering<T>(arg0: java.lang.Class<T>, arg1: T, arg2: T): boolean
                public deregisterAll<T>(arg0: java.lang.Class<any>): void
                public deregisterAll<T>(): void
                public finalize<T>(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}