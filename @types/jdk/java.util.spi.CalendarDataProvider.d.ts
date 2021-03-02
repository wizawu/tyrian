declare namespace java {
  namespace util {
    namespace spi {

      abstract class CalendarDataProvider extends java.util.spi.LocaleServiceProvider {
        protected constructor()
        public abstract getFirstDayOfWeek(arg0: java.util.Locale): int
        public abstract getMinimalDaysInFirstWeek(arg0: java.util.Locale): int
      }

    }
  }
}
