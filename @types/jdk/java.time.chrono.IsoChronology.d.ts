declare namespace java {
  namespace time {
    namespace chrono {
      class IsoChronology extends java.time.chrono.AbstractChronology implements java.io.Serializable {
        public static readonly INSTANCE: java.time.chrono.IsoChronology
        public getId(): java.lang.String
        public getCalendarType(): java.lang.String
        public date(
          arg0: java.time.chrono.Era,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): java.time.LocalDate
        public date(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.LocalDate
        public dateYearDay(
          arg0: java.time.chrono.Era,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.LocalDate
        public dateYearDay(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.time.LocalDate
        public dateEpochDay(arg0: number | java.lang.Long): java.time.LocalDate
        public date(arg0: java.time.temporal.TemporalAccessor): java.time.LocalDate
        public epochSecond(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: java.time.ZoneOffset
        ): number
        public localDateTime(arg0: java.time.temporal.TemporalAccessor): java.time.LocalDateTime
        public zonedDateTime(arg0: java.time.temporal.TemporalAccessor): java.time.ZonedDateTime
        public zonedDateTime(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.ZonedDateTime
        public dateNow(): java.time.LocalDate
        public dateNow(arg0: java.time.ZoneId): java.time.LocalDate
        public dateNow(arg0: java.time.Clock): java.time.LocalDate
        public isLeapYear(arg0: number | java.lang.Long): boolean
        public prolepticYear(arg0: java.time.chrono.Era, arg1: number | java.lang.Integer): number
        public eraOf(arg0: number | java.lang.Integer): java.time.chrono.IsoEra
        public eras(): java.util.List<java.time.chrono.Era>
        public resolveDate(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.LocalDate
        resolveProlepticMonth(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): void
        resolveYearOfEra(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.LocalDate
        resolveYMD(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.LocalDate
        public range(arg0: java.time.temporal.ChronoField): java.time.temporal.ValueRange
        public period(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.Period
        writeReplace(): java.lang.Object
        resolveYMD(arg0: java.util.Map, arg1: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate
        resolveYearOfEra(arg0: java.util.Map, arg1: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate
        public resolveDate(arg0: java.util.Map, arg1: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate
        public period(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.chrono.ChronoPeriod
        public eraOf(arg0: number | java.lang.Integer): java.time.chrono.Era
        public zonedDateTime(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime
        public zonedDateTime(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime
        public localDateTime(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime
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
