declare namespace sun {
    namespace security {
        namespace jca {
            class ProviderList {
                public static add(arg0: sun.security.jca.ProviderList, arg1: java.security.Provider): sun.security.jca.ProviderList
                public static insertAt(arg0: sun.security.jca.ProviderList, arg1: java.security.Provider, arg2: int): sun.security.jca.ProviderList
                public static remove(arg0: sun.security.jca.ProviderList, arg1: java.lang.String | string): sun.security.jca.ProviderList
                public static newList(...arg0: java.security.Provider[]): sun.security.jca.ProviderList
                public size(): int
                public providers(): java.util.List<java.security.Provider>
                public getProvider(arg0: java.lang.String | string): java.security.Provider
                public getIndex(arg0: java.lang.String | string): int
                public toArray(): java.security.Provider[]
                public toString(): string
                public getService(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.Provider$Service
                public getServices(arg0: java.lang.String | string, arg1: java.lang.String | string): java.util.List<java.security.Provider$Service>
                public getServices(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>): java.util.List<java.security.Provider$Service>
                public getServices(arg0: java.util.List<sun.security.jca.ServiceId>): java.util.List<java.security.Provider$Service>
                public static class: java.lang.Class<any>
            }
        }
    }
}