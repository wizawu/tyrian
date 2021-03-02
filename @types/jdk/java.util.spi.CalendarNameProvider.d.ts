declare namespace java {
  namespace util {
    namespace spi {

      abstract class CalendarNameProvider extends java.util.spi.LocaleServiceProvider {
        protected constructor()
        public abstract getDisplayName(arg0: java.lang.String, arg1: int, arg2: int, arg3: int, arg4: java.util.Locale): java.lang.String
        public abstract getDisplayNames(arg0: java.lang.String, arg1: int, arg2: int, arg3: java.util.Locale): java.util.Map<java.lang.String,java.lang.Integer>
      }

    }
  }
}
