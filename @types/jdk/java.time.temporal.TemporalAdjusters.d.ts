declare namespace java {
  namespace time {
    namespace temporal {
      class TemporalAdjusters {
        public static ofDateAdjuster(
          arg0: java.util.function$.UnaryOperator<java.time.LocalDate>
        ): java.time.temporal.TemporalAdjuster
        public static firstDayOfMonth(): java.time.temporal.TemporalAdjuster
        public static lastDayOfMonth(): java.time.temporal.TemporalAdjuster
        public static firstDayOfNextMonth(): java.time.temporal.TemporalAdjuster
        public static firstDayOfYear(): java.time.temporal.TemporalAdjuster
        public static lastDayOfYear(): java.time.temporal.TemporalAdjuster
        public static firstDayOfNextYear(): java.time.temporal.TemporalAdjuster
        public static firstInMonth(arg0: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster
        public static lastInMonth(arg0: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster
        public static dayOfWeekInMonth(
          arg0: number | java.lang.Integer,
          arg1: java.time.DayOfWeek
        ): java.time.temporal.TemporalAdjuster
        public static next(arg0: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster
        public static nextOrSame(arg0: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster
        public static previous(arg0: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster
        public static previousOrSame(arg0: java.time.DayOfWeek): java.time.temporal.TemporalAdjuster
      }
    }
  }
}
