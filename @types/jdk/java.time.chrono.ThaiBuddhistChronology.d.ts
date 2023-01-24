declare namespace java {
  namespace time {
    namespace chrono {
      class ThaiBuddhistChronology extends java.time.chrono.AbstractChronology implements java.io.Serializable {
        public static readonly INSTANCE: java.time.chrono.ThaiBuddhistChronology
        static readonly YEARS_DIFFERENCE: int
        public getId(): java.lang.String
        public getCalendarType(): java.lang.String
        public date(
          arg0: java.time.chrono.Era,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): java.time.chrono.ThaiBuddhistDate
        public date(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.chrono.ThaiBuddhistDate
        public dateYearDay(
          arg0: java.time.chrono.Era,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.chrono.ThaiBuddhistDate
        public dateYearDay(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.time.chrono.ThaiBuddhistDate
        public dateEpochDay(arg0: number | java.lang.Long): java.time.chrono.ThaiBuddhistDate
        public dateNow(): java.time.chrono.ThaiBuddhistDate
        public dateNow(arg0: java.time.ZoneId): java.time.chrono.ThaiBuddhistDate
        public dateNow(arg0: java.time.Clock): java.time.chrono.ThaiBuddhistDate
        public date(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ThaiBuddhistDate
        public localDateTime(
          arg0: java.time.temporal.TemporalAccessor
        ): java.time.chrono.ChronoLocalDateTime<java.time.chrono.ThaiBuddhistDate>
        public zonedDateTime(
          arg0: java.time.temporal.TemporalAccessor
        ): java.time.chrono.ChronoZonedDateTime<java.time.chrono.ThaiBuddhistDate>
        public zonedDateTime(
          arg0: java.time.Instant,
          arg1: java.time.ZoneId
        ): java.time.chrono.ChronoZonedDateTime<java.time.chrono.ThaiBuddhistDate>
        public isLeapYear(arg0: number | java.lang.Long): boolean
        public prolepticYear(arg0: java.time.chrono.Era, arg1: number | java.lang.Integer): number
        public eraOf(arg0: number | java.lang.Integer): java.time.chrono.ThaiBuddhistEra
        public eras(): java.util.List<java.time.chrono.Era>
        public range(arg0: java.time.temporal.ChronoField): java.time.temporal.ValueRange
        public resolveDate(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.chrono.ThaiBuddhistDate
        writeReplace(): java.lang.Object
        public resolveDate(arg0: java.util.Map, arg1: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate
        public eraOf(arg0: number | java.lang.Integer): java.time.chrono.Era
        public date(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDate
        public dateNow(arg0: java.time.Clock): java.time.chrono.ChronoLocalDate
        public dateNow(arg0: java.time.ZoneId): java.time.chrono.ChronoLocalDate
        public dateNow(): java.time.chrono.ChronoLocalDate
        public dateEpochDay(arg0: number | java.lang.Long): java.time.chrono.ChronoLocalDate
        public dateYearDay(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.time.chrono.ChronoLocalDate
        public dateYearDay(
          arg0: java.time.chrono.Era,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.chrono.ChronoLocalDate
        public date(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.chrono.ChronoLocalDate
        public date(
          arg0: java.time.chrono.Era,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): java.time.chrono.ChronoLocalDate
      }
    }
  }
}
