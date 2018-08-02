declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
class JRELocaleProviderAdapter extends sun.util.locale.provider.LocaleProviderAdapter implements sun.util.locale.provider.ResourceBundleBasedAdapter {
    public constructor()
    public getAdapterType(): sun.util.locale.provider.LocaleProviderAdapter$Type
    public getLocaleServiceProvider<P extends java.util.spi.LocaleServiceProvider>(arg0: java.lang.Class<P>): P
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
    public getLocaleData<P extends java.util.spi.LocaleServiceProvider>(): sun.util.resources.LocaleData
    public getAvailableLocales<P extends java.util.spi.LocaleServiceProvider>(): java.util.Locale[]
    public getLanguageTagSet<P extends java.util.spi.LocaleServiceProvider>(arg0: java.lang.String | string): java.util.Set<java.lang.String>
    protected createLanguageTagSet<P extends java.util.spi.LocaleServiceProvider>(arg0: java.lang.String | string): java.util.Set<java.lang.String>
    public static class: java.lang.Class<any>
}

class JRELocaleProviderAdapter$$Lambda extends sun.util.locale.provider.LocaleProviderAdapter implements sun.util.locale.provider.ResourceBundleBasedAdapter {
    public constructor()
}

            }
        }
    }
}