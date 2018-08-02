declare namespace sun {
    namespace util {
        namespace cldr {
class CLDRLocaleProviderAdapter extends sun.util.locale.provider.JRELocaleProviderAdapter {
    public constructor()
    public getAdapterType(): sun.util.locale.provider.LocaleProviderAdapter$Type
    public getBreakIteratorProvider(): java.text.spi.BreakIteratorProvider
    public getCollatorProvider(): java.text.spi.CollatorProvider
    public getAvailableLocales(): java.util.Locale[]
    protected createLanguageTagSet(arg0: java.lang.String | string): java.util.Set<java.lang.String>
    public static class: java.lang.Class<any>
}

        }
    }
}