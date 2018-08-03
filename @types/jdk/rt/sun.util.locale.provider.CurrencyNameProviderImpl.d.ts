declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class CurrencyNameProviderImpl extends java.util.spi.CurrencyNameProvider implements sun.util.locale.provider.AvailableLanguageTags {
                    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
                    public getAvailableLanguageTags(): java.util.Set<java.lang.String>
                    public getAvailableLocales(): java.util.Locale[]
                    public getSymbol(arg0: java.lang.String | string, arg1: java.util.Locale): string
                    public getDisplayName(arg0: java.lang.String | string, arg1: java.util.Locale): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}