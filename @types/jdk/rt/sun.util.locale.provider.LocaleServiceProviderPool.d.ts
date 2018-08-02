declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class LocaleServiceProviderPool {
                    public static getPool(arg0: java.lang.Class<java.util.spi.LocaleServiceProvider>): sun.util.locale.provider.LocaleServiceProviderPool
                    public static getAllAvailableLocales(): java.util.Locale[]
                    public getAvailableLocales(): java.util.Locale[]
                    public getLocalizedObject<P extends java.util.spi.LocaleServiceProvider, S>(arg0: sun.util.locale.provider.LocaleServiceProviderPool$LocalizedObjectGetter<P, S>, arg1: java.util.Locale, ...arg2: java.lang.Object[]): S
                    public getLocalizedObject<P extends java.util.spi.LocaleServiceProvider, S>(arg0: sun.util.locale.provider.LocaleServiceProviderPool$LocalizedObjectGetter<P, S>, arg1: java.util.Locale, arg2: java.lang.String | string, ...arg3: java.lang.Object[]): S
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}