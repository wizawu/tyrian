declare namespace java {
  namespace util {
    namespace spi {

      abstract class CalendarNameProvider extends java.util.spi.LocaleServiceProvider {
        protected constructor()
        public abstract getDisplayName(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.util.Locale): java.lang.String
        public abstract getDisplayNames(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.util.Locale): java.util.Map<java.lang.String,java.lang.Integer>
      }

    }
  }
}
