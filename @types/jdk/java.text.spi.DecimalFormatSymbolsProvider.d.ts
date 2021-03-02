declare namespace java {
  namespace text {
    namespace spi {

      abstract class DecimalFormatSymbolsProvider extends java.util.spi.LocaleServiceProvider {
        protected constructor()
        public abstract getInstance(arg0: java.util.Locale): java.text.DecimalFormatSymbols
      }

    }
  }
}
