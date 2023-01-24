declare namespace java {
  namespace util {
    namespace spi {
      abstract class LocaleServiceProvider {
        protected constructor()
        public abstract getAvailableLocales(): java.util.Locale[]
        public isSupportedLocale(arg0: java.util.Locale): boolean
      }
    }
  }
}
