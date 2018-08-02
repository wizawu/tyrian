declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class BreakIteratorProviderImpl extends java.text.spi.BreakIteratorProvider implements sun.util.locale.provider.AvailableLanguageTags {
                    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
                    public getAvailableLocales(): java.util.Locale[]
                    public getWordInstance(arg0: java.util.Locale): java.text.BreakIterator
                    public getLineInstance(arg0: java.util.Locale): java.text.BreakIterator
                    public getCharacterInstance(arg0: java.util.Locale): java.text.BreakIterator
                    public getSentenceInstance(arg0: java.util.Locale): java.text.BreakIterator
                    public getAvailableLanguageTags(): java.util.Set<java.lang.String>
                    public isSupportedLocale(arg0: java.util.Locale): boolean
                    public static class: java.lang.Class<any>
                }
                class BreakIteratorProviderImpl$$Lambda extends java.text.spi.BreakIteratorProvider implements sun.util.locale.provider.AvailableLanguageTags {
                    public constructor(arg0: sun.util.locale.provider.LocaleProviderAdapter$Type, arg1: java.util.Set<java.lang.String>)
                }
            }
        }
    }
}