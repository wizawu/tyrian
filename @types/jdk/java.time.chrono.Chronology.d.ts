declare namespace java {
  namespace time {
    namespace chrono {
      interface Chronology extends java.lang.Comparable<java.time.chrono.Chronology> {
        from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.Chronology
        ofLocale(arg0: java.util.Locale): java.time.chrono.Chronology
        of(arg0: java.lang.String | string): java.time.chrono.Chronology
        getAvailableChronologies(): java.util.Set<java.time.chrono.Chronology>
        getId(): java.lang.String
        getCalendarType(): java.lang.String
        date(
          arg0: java.time.chrono.Era,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): java.time.chrono.ChronoLocalDate
        date(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.chrono.ChronoLocalDate
        dateYearDay(
          arg0: java.time.chrono.Era,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.chrono.ChronoLocalDate
        dateYearDay(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.time.chrono.ChronoLocalDate
        dateEpochDay(arg0: number | java.lang.Long): java.time.chrono.ChronoLocalDate
        dateNow(): java.time.chrono.ChronoLocalDate
        dateNow(arg0: java.time.ZoneId): java.time.chrono.ChronoLocalDate
        dateNow(arg0: java.time.Clock): java.time.chrono.ChronoLocalDate
        date(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDate
        localDateTime(
          arg0: java.time.temporal.TemporalAccessor
        ): java.time.chrono.ChronoLocalDateTime<java.time.chrono.ChronoLocalDate>
        zonedDateTime(
          arg0: java.time.temporal.TemporalAccessor
        ): java.time.chrono.ChronoZonedDateTime<java.time.chrono.ChronoLocalDate>
        zonedDateTime(
          arg0: java.time.Instant,
          arg1: java.time.ZoneId
        ): java.time.chrono.ChronoZonedDateTime<java.time.chrono.ChronoLocalDate>
        isLeapYear(arg0: number | java.lang.Long): boolean
        prolepticYear(arg0: java.time.chrono.Era, arg1: number | java.lang.Integer): number
        eraOf(arg0: number | java.lang.Integer): java.time.chrono.Era
        eras(): java.util.List<java.time.chrono.Era>
        range(arg0: java.time.temporal.ChronoField): java.time.temporal.ValueRange
        getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): java.lang.String
        resolveDate(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.chrono.ChronoLocalDate
        period(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.chrono.ChronoPeriod
        epochSecond(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: java.time.ZoneOffset
        ): number
        epochSecond(
          arg0: java.time.chrono.Era,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer,
          arg7: java.time.ZoneOffset
        ): number
        compareTo(arg0: java.time.chrono.Chronology): number
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
        toString(): java.lang.String
        compareTo(arg0: java.lang.Object | any): number
      }
    }
  }
}
