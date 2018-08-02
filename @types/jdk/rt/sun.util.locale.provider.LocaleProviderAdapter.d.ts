declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
abstract class LocaleProviderAdapter {
    public constructor()
    public static forType(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type): sun.util.locale.provider.LocaleProviderAdapter
    public static forJRE(): sun.util.locale.provider.LocaleProviderAdapter
    public static getResourceBundleBased(): sun.util.locale.provider.LocaleProviderAdapter
    public static getAdapterPreference(): java.util.List<sun.util.locale.provider.LocaleProviderAdapter$Type>
    public static getAdapter(arg0: java.lang.Class<java.util.spi.LocaleServiceProvider>, arg1: java.util.Locale): sun.util.locale.provider.LocaleProviderAdapter
    public static isSupportedLocale(arg0: java.util.Locale, arg1: sun.util.locale.provider.LocaleProviderAdapter$Type, arg2: java.util.Set<java.lang.String>): boolean
    public static toLocaleArray(arg0: java.util.Set<java.lang.String>): java.util.Locale[]
    public getAdapterType(): sun.util.locale.provider.LocaleProviderAdapter$Type
    public getLocaleServiceProvider<P extends java.util.spi.LocaleServiceProvider>(arg0: java.lang.Class<P>): P
    public getBreakIteratorProvider(): java.text.spi.BreakIteratorProvider
    public getCollatorProvider(): java.text.spi.CollatorProvider
    public getDateFormatProvider(): java.text.spi.DateFormatProvider
    public getDateFormatSymbolsProvider(): java.text.spi.DateFormatSymbolsProvider
    public getDecimalFormatSymbolsProvider(): java.text.spi.DecimalFormatSymbolsProvider
    public getNumberFormatProvider(): java.text.spi.NumberFormatProvider
    public getCurrencyNameProvider(): java.util.spi.CurrencyNameProvider
    public getLocaleNameProvider(): java.util.spi.LocaleNameProvider
    public getTimeZoneNameProvider(): java.util.spi.TimeZoneNameProvider
    public getCalendarDataProvider(): java.util.spi.CalendarDataProvider
    public getCalendarNameProvider(): java.util.spi.CalendarNameProvider
    public getCalendarProvider(): sun.util.spi.CalendarProvider
    public getLocaleResources(arg0: java.util.Locale): sun.util.locale.provider.LocaleResources
    public getAvailableLocales(): java.util.Locale[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}