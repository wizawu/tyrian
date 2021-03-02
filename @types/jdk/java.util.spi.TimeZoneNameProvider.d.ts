declare namespace java {
  namespace util {
    namespace spi {

      abstract class TimeZoneNameProvider extends java.util.spi.LocaleServiceProvider {
        protected constructor()
        public abstract getDisplayName(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean, arg2: number | java.lang.Integer, arg3: java.util.Locale): java.lang.String
        public getGenericDisplayName(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.util.Locale): java.lang.String
      }

    }
  }
}
