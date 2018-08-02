declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
class DateFormatProviderImpl extends java.text.spi.DateFormatProvider implements sun.util.locale.provider.AvailableLanguageTags {
    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
    public getAvailableLocales(): java.util.Locale[]
    public isSupportedLocale(arg0: java.util.Locale): boolean
    public getTimeInstance(arg0: int, arg1: java.util.Locale): java.text.DateFormat
    public getDateInstance(arg0: int, arg1: java.util.Locale): java.text.DateFormat
    public getDateTimeInstance(arg0: int, arg1: int, arg2: java.util.Locale): java.text.DateFormat
    public getAvailableLanguageTags(): java.util.Set<java.lang.String>
    public static class: java.lang.Class<any>
}

class DateFormatProviderImpl$$Lambda extends java.text.spi.DateFormatProvider implements sun.util.locale.provider.AvailableLanguageTags {
    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
}

            }
        }
    }
}