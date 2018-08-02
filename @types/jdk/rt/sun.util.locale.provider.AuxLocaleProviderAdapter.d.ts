declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                abstract class AuxLocaleProviderAdapter extends sun.util.locale.provider.LocaleProviderAdapter {
                    public constructor()
                    public getLocaleServiceProvider<P extends java.util.spi.LocaleServiceProvider>(arg0: java.lang.Class<P>): P
                    protected findInstalledProvider<P extends java.util.spi.LocaleServiceProvider>(arg0: java.lang.Class<P>): P
                    public getBreakIteratorProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.BreakIteratorProvider
                    public getCollatorProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.CollatorProvider
                    public getDateFormatProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.DateFormatProvider
                    public getDateFormatSymbolsProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.DateFormatSymbolsProvider
                    public getDecimalFormatSymbolsProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.DecimalFormatSymbolsProvider
                    public getNumberFormatProvider<P extends java.util.spi.LocaleServiceProvider>(): java.text.spi.NumberFormatProvider
                    public getCurrencyNameProvider<P extends java.util.spi.LocaleServiceProvider>(): java.util.spi.CurrencyNameProvider
                    public getLocaleNameProvider<P extends java.util.spi.LocaleServiceProvider>(): java.util.spi.LocaleNameProvider
                    public getTimeZoneNameProvider<P extends java.util.spi.LocaleServiceProvider>(): java.util.spi.TimeZoneNameProvider
                    public getCalendarDataProvider<P extends java.util.spi.LocaleServiceProvider>(): java.util.spi.CalendarDataProvider
                    public getCalendarNameProvider<P extends java.util.spi.LocaleServiceProvider>(): java.util.spi.CalendarNameProvider
                    public getCalendarProvider<P extends java.util.spi.LocaleServiceProvider>(): sun.util.spi.CalendarProvider
                    public getLocaleResources<P extends java.util.spi.LocaleServiceProvider>(arg0: java.util.Locale): sun.util.locale.provider.LocaleResources
                    public getAvailableLocales<P extends java.util.spi.LocaleServiceProvider>(): java.util.Locale[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}