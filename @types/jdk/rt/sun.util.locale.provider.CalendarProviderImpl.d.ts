declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class CalendarProviderImpl extends sun.util.spi.CalendarProvider implements sun.util.locale.provider.AvailableLanguageTags {
                    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
                    public getAvailableLocales(): java.util.Locale[]
                    public isSupportedLocale(arg0: java.util.Locale): boolean
                    public getInstance(arg0: java.util.TimeZone, arg1: java.util.Locale): java.util.Calendar
                    public getAvailableLanguageTags(): java.util.Set<java.lang.String>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}