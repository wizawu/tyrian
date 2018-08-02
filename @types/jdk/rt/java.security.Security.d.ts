declare namespace java {
    namespace security {
class Security {
    public static getAlgorithmProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public static insertProviderAt(arg0: java.security.Provider, arg1: int): int
    public static addProvider(arg0: java.security.Provider): int
    public static removeProvider(arg0: java.lang.String | string): void
    public static getProviders(): java.security.Provider[]
    public static getProvider(arg0: java.lang.String | string): java.security.Provider
    public static getProviders(arg0: java.lang.String | string): java.security.Provider[]
    public static getProviders(arg0: java.util.Map<java.lang.String, java.lang.String>): java.security.Provider[]
    public static getProperty(arg0: java.lang.String | string): string
    public static setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public static getAlgorithms(arg0: java.lang.String | string): java.util.Set<java.lang.String>
    public static class: java.lang.Class<any>
}

    }
}