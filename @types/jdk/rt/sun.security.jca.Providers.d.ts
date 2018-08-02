declare namespace sun {
    namespace security {
        namespace jca {
class Providers {
    public static getSunProvider(): java.security.Provider
    public static startJarVerification(): java.lang.Object
    public static stopJarVerification(arg0: java.lang.Object): void
    public static getProviderList(): sun.security.jca.ProviderList
    public static setProviderList(arg0: sun.security.jca.ProviderList): void
    public static getFullProviderList(): sun.security.jca.ProviderList
    public static getThreadProviderList(): sun.security.jca.ProviderList
    public static beginThreadProviderList(arg0: sun.security.jca.ProviderList): sun.security.jca.ProviderList
    public static endThreadProviderList(arg0: sun.security.jca.ProviderList): void
    public static class: java.lang.Class<any>
}

        }
    }
}