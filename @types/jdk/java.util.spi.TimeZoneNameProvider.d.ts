declare namespace java {
  namespace util {
    namespace spi {

      abstract class TimeZoneNameProvider extends java.util.spi.LocaleServiceProvider {

        protected constructor()
        public abstract getDisplayName(arg0: java.lang.String, arg1: boolean, arg2: int, arg3: java.util.Locale): java.lang.String
        public getGenericDisplayName(arg0: java.lang.String, arg1: int, arg2: java.util.Locale): java.lang.String
      }

    }
  }
}
