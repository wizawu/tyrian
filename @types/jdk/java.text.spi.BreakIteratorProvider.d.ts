declare namespace java {
  namespace text {
    namespace spi {
      abstract class BreakIteratorProvider extends java.util.spi.LocaleServiceProvider {
        protected constructor()
        public abstract getWordInstance(arg0: java.util.Locale): java.text.BreakIterator
        public abstract getLineInstance(arg0: java.util.Locale): java.text.BreakIterator
        public abstract getCharacterInstance(arg0: java.util.Locale): java.text.BreakIterator
        public abstract getSentenceInstance(arg0: java.util.Locale): java.text.BreakIterator
      }
    }
  }
}
