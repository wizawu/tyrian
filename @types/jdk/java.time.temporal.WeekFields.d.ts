declare namespace java {
  namespace time {
    namespace temporal {

      class WeekFields implements java.io.Serializable {
        public static readonly ISO: java.time.temporal.WeekFields
        public static readonly SUNDAY_START: java.time.temporal.WeekFields
        public static readonly WEEK_BASED_YEARS: java.time.temporal.TemporalUnit
        public static of(arg0: java.util.Locale): java.time.temporal.WeekFields
        public static of(arg0: java.time.DayOfWeek, arg1: number | java.lang.Integer): java.time.temporal.WeekFields
        public getFirstDayOfWeek(): java.time.DayOfWeek
        public getMinimalDaysInFirstWeek(): number
        public dayOfWeek(): java.time.temporal.TemporalField
        public weekOfMonth(): java.time.temporal.TemporalField
        public weekOfYear(): java.time.temporal.TemporalField
        public weekOfWeekBasedYear(): java.time.temporal.TemporalField
        public weekBasedYear(): java.time.temporal.TemporalField
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }

    }
  }
}
