declare namespace java {
  namespace util {
    namespace spi {
      abstract class LocaleNameProvider extends java.util.spi.LocaleServiceProvider {
        protected constructor()
        public abstract getDisplayLanguage(arg0: java.lang.String | string, arg1: java.util.Locale): java.lang.String
        public getDisplayScript(arg0: java.lang.String | string, arg1: java.util.Locale): java.lang.String
        public abstract getDisplayCountry(arg0: java.lang.String | string, arg1: java.util.Locale): java.lang.String
        public abstract getDisplayVariant(arg0: java.lang.String | string, arg1: java.util.Locale): java.lang.String
        public getDisplayUnicodeExtensionKey(arg0: java.lang.String | string, arg1: java.util.Locale): java.lang.String
        public getDisplayUnicodeExtensionType(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.util.Locale
        ): java.lang.String
      }
    }
  }
}
