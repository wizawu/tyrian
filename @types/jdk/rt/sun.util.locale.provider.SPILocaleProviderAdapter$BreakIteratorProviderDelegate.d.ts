declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class SPILocaleProviderAdapter$BreakIteratorProviderDelegate extends java.text.spi.BreakIteratorProvider implements sun.util.locale.provider.SPILocaleProviderAdapter$Delegate<java.text.spi.BreakIteratorProvider> {
                    public addImpl(arg0: java.text.spi.BreakIteratorProvider): void
                    public getImpl(arg0: java.util.Locale): java.text.spi.BreakIteratorProvider
                    public getAvailableLocales(): java.util.Locale[]
                    public isSupportedLocale(arg0: java.util.Locale): boolean
                    public getWordInstance(arg0: java.util.Locale): java.text.BreakIterator
                    public getLineInstance(arg0: java.util.Locale): java.text.BreakIterator
                    public getCharacterInstance(arg0: java.util.Locale): java.text.BreakIterator
                    public getSentenceInstance(arg0: java.util.Locale): java.text.BreakIterator
                    public getImpl(arg0: java.util.Locale): java.util.spi.LocaleServiceProvider
                    public addImpl(arg0: java.util.spi.LocaleServiceProvider): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}