declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class SPILocaleProviderAdapter$DateFormatProviderDelegate extends java.text.spi.DateFormatProvider implements sun.util.locale.provider.SPILocaleProviderAdapter$Delegate<java.text.spi.DateFormatProvider> {
                    public addImpl(arg0: java.text.spi.DateFormatProvider): void
                    public getImpl(arg0: java.util.Locale): java.text.spi.DateFormatProvider
                    public getAvailableLocales(): java.util.Locale[]
                    public isSupportedLocale(arg0: java.util.Locale): boolean
                    public getTimeInstance(arg0: int, arg1: java.util.Locale): java.text.DateFormat
                    public getDateInstance(arg0: int, arg1: java.util.Locale): java.text.DateFormat
                    public getDateTimeInstance(arg0: int, arg1: int, arg2: java.util.Locale): java.text.DateFormat
                    public getImpl(arg0: java.util.Locale): java.util.spi.LocaleServiceProvider
                    public addImpl(arg0: java.util.spi.LocaleServiceProvider | java.util.spi.LocaleServiceProvider$$Lambda): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}