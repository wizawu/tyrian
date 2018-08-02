declare namespace java {
    namespace text {
        namespace spi {
            abstract class BreakIteratorProvider extends java.util.spi.LocaleServiceProvider {
                protected constructor()
                public getWordInstance(arg0: java.util.Locale): java.text.BreakIterator
                public getLineInstance(arg0: java.util.Locale): java.text.BreakIterator
                public getCharacterInstance(arg0: java.util.Locale): java.text.BreakIterator
                public getSentenceInstance(arg0: java.util.Locale): java.text.BreakIterator
                public static class: java.lang.Class<any>
            }
        }
    }
}