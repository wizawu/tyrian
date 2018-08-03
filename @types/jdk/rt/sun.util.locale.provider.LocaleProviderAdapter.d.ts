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
                    public abstract getAdapterType(): sun.util.locale.provider.LocaleProviderAdapter$Type
                    public abstract getLocaleServiceProvider<P extends java.util.spi.LocaleServiceProvider>(arg0: java.lang.Class<P>): P
                    public abstract getBreakIteratorProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.BreakIteratorProvider
                    public abstract getCollatorProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.CollatorProvider
                    public abstract getDateFormatProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.DateFormatProvider
                    public abstract getDateFormatSymbolsProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.DateFormatSymbolsProvider
                    public abstract getDecimalFormatSymbolsProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.DecimalFormatSymbolsProvider
                    public abstract getNumberFormatProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.NumberFormatProvider
                    public abstract getCurrencyNameProvider<P extends java.util.spi.LocaleServiceProvider>(): java.util.spi.CurrencyNameProvider
                    public abstract getLocaleNameProvider<P extends java.util.spi.LocaleServiceProvider>(): java.util.spi.LocaleNameProvider
                    public abstract getTimeZoneNameProvider<P extends java.util.spi.LocaleServiceProvider>(): java.util.spi.TimeZoneNameProvider
                    public abstract getCalendarDataProvider<P extends java.util.spi.LocaleServiceProvider>(): java.util.spi.CalendarDataProvider
                    public abstract getCalendarNameProvider<P extends java.util.spi.LocaleServiceProvider>(): java.util.spi.CalendarNameProvider
                    public abstract getCalendarProvider<P extends java.util.spi.LocaleServiceProvider>(): sun.util.spi.CalendarProvider
                    public abstract getLocaleResources<P extends java.util.spi.LocaleServiceProvider>(arg0: java.util.Locale): sun.util.locale.provider.LocaleResources
                    public abstract getAvailableLocales<P extends java.util.spi.LocaleServiceProvider>(): java.util.Locale[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}