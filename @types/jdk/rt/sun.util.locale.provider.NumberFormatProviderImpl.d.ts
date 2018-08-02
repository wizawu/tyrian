declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class NumberFormatProviderImpl extends java.text.spi.NumberFormatProvider implements sun.util.locale.provider.AvailableLanguageTags {
                    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
                    public getAvailableLocales(): java.util.Locale[]
                    public isSupportedLocale(arg0: java.util.Locale): boolean
                    public getCurrencyInstance(arg0: java.util.Locale): java.text.NumberFormat
                    public getIntegerInstance(arg0: java.util.Locale): java.text.NumberFormat
                    public getNumberInstance(arg0: java.util.Locale): java.text.NumberFormat
                    public getPercentInstance(arg0: java.util.Locale): java.text.NumberFormat
                    public getAvailableLanguageTags(): java.util.Set<java.lang.String>
                    public static class: java.lang.Class<any>
                }
                class NumberFormatProviderImpl$$Lambda extends java.text.spi.NumberFormatProvider implements sun.util.locale.provider.AvailableLanguageTags {
                    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
                }
            }
        }
    }
}