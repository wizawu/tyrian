declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class CalendarDataProviderImpl extends java.util.spi.CalendarDataProvider implements sun.util.locale.provider.AvailableLanguageTags {
                    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
                    public getFirstDayOfWeek(arg0: java.util.Locale): int
                    public getMinimalDaysInFirstWeek(arg0: java.util.Locale): int
                    public getAvailableLocales(): java.util.Locale[]
                    public getAvailableLanguageTags(): java.util.Set<java.lang.String>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}