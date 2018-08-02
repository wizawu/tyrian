declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class SPILocaleProviderAdapter$LocaleNameProviderDelegate extends java.util.spi.LocaleNameProvider implements sun.util.locale.provider.SPILocaleProviderAdapter$Delegate<java.util.spi.LocaleNameProvider> {
                    public addImpl(arg0: java.util.spi.LocaleNameProvider): void
                    public getImpl(arg0: java.util.Locale): java.util.spi.LocaleNameProvider
                    public getAvailableLocales(): java.util.Locale[]
                    public isSupportedLocale(arg0: java.util.Locale): boolean
                    public getDisplayLanguage(arg0: java.lang.String | string, arg1: java.util.Locale): string
                    public getDisplayScript(arg0: java.lang.String | string, arg1: java.util.Locale): string
                    public getDisplayCountry(arg0: java.lang.String | string, arg1: java.util.Locale): string
                    public getDisplayVariant(arg0: java.lang.String | string, arg1: java.util.Locale): string
                    public getImpl(arg0: java.util.Locale): java.util.spi.LocaleServiceProvider
                    public addImpl(arg0: java.util.spi.LocaleServiceProvider): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}