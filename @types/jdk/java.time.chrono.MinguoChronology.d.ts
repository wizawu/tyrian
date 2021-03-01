declare namespace java {
  namespace time {
    namespace chrono {

      class MinguoChronology extends java.time.chrono.AbstractChronology implements java.io.Serializable {

        public static readonly INSTANCE: java.time.chrono.MinguoChronology
        static readonly YEARS_DIFFERENCE: int
        public getId(): java.lang.String
        public getCalendarType(): java.lang.String
        public date(arg0: java.time.chrono.Era, arg1: int, arg2: int, arg3: int): java.time.chrono.MinguoDate
        public date(arg0: int, arg1: int, arg2: int): java.time.chrono.MinguoDate
        public dateYearDay(arg0: java.time.chrono.Era, arg1: int, arg2: int): java.time.chrono.MinguoDate
        public dateYearDay(arg0: int, arg1: int): java.time.chrono.MinguoDate
        public dateEpochDay(arg0: long): java.time.chrono.MinguoDate
        public dateNow(): java.time.chrono.MinguoDate
        public dateNow(arg0: java.time.ZoneId): java.time.chrono.MinguoDate
        public dateNow(arg0: java.time.Clock): java.time.chrono.MinguoDate
        public date(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.MinguoDate
        public localDateTime(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime<java.time.chrono.MinguoDate>
        public zonedDateTime(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime<java.time.chrono.MinguoDate>
        public zonedDateTime(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<java.time.chrono.MinguoDate>
        public isLeapYear(arg0: long): boolean
        public prolepticYear(arg0: java.time.chrono.Era, arg1: int): int
        public eraOf(arg0: int): java.time.chrono.MinguoEra
        public eras(): java.util.List<java.time.chrono.Era>
        public range(arg0: java.time.temporal.ChronoField): java.time.temporal.ValueRange
        public resolveDate(arg0: java.util.Map<java.time.temporal.TemporalField,java.lang.Long>, arg1: java.time.format.ResolverStyle): java.time.chrono.MinguoDate
        writeReplace(): java.lang.Object
        public resolveDate(arg0: java.util.Map, arg1: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate
        public eraOf(arg0: int): java.time.chrono.Era
        public date(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDate
        public dateNow(arg0: java.time.Clock): java.time.chrono.ChronoLocalDate
        public dateNow(arg0: java.time.ZoneId): java.time.chrono.ChronoLocalDate
        public dateNow(): java.time.chrono.ChronoLocalDate
        public dateEpochDay(arg0: long): java.time.chrono.ChronoLocalDate
        public dateYearDay(arg0: int, arg1: int): java.time.chrono.ChronoLocalDate
        public dateYearDay(arg0: java.time.chrono.Era, arg1: int, arg2: int): java.time.chrono.ChronoLocalDate
        public date(arg0: int, arg1: int, arg2: int): java.time.chrono.ChronoLocalDate
        public date(arg0: java.time.chrono.Era, arg1: int, arg2: int, arg3: int): java.time.chrono.ChronoLocalDate
      }

    }
  }
}
