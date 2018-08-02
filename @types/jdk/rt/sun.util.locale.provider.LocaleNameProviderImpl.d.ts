declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
class LocaleNameProviderImpl extends java.util.spi.LocaleNameProvider implements sun.util.locale.provider.AvailableLanguageTags {
    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
    public getAvailableLocales(): java.util.Locale[]
    public isSupportedLocale(arg0: java.util.Locale): boolean
    public getDisplayLanguage(arg0: java.lang.String | string, arg1: java.util.Locale): string
    public getDisplayScript(arg0: java.lang.String | string, arg1: java.util.Locale): string
    public getDisplayCountry(arg0: java.lang.String | string, arg1: java.util.Locale): string
    public getDisplayVariant(arg0: java.lang.String | string, arg1: java.util.Locale): string
    public getAvailableLanguageTags(): java.util.Set<java.lang.String>
    public static class: java.lang.Class<any>
}

class LocaleNameProviderImpl$$Lambda extends java.util.spi.LocaleNameProvider implements sun.util.locale.provider.AvailableLanguageTags {
    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
}

            }
        }
    }
}