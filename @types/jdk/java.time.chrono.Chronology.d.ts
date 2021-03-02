declare namespace java {
  namespace time {
    namespace chrono {

      interface Chronology extends java.lang.Comparable<java.time.chrono.Chronology> {
        from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.Chronology
        ofLocale(arg0: java.util.Locale): java.time.chrono.Chronology
        of(arg0: java.lang.String): java.time.chrono.Chronology
        getAvailableChronologies(): java.util.Set<java.time.chrono.Chronology>
        getId(): java.lang.String
        getCalendarType(): java.lang.String
        date(arg0: java.time.chrono.Era, arg1: int, arg2: int, arg3: int): java.time.chrono.ChronoLocalDate
        date(arg0: int, arg1: int, arg2: int): java.time.chrono.ChronoLocalDate
        dateYearDay(arg0: java.time.chrono.Era, arg1: int, arg2: int): java.time.chrono.ChronoLocalDate
        dateYearDay(arg0: int, arg1: int): java.time.chrono.ChronoLocalDate
        dateEpochDay(arg0: long): java.time.chrono.ChronoLocalDate
        dateNow(): java.time.chrono.ChronoLocalDate
        dateNow(arg0: java.time.ZoneId): java.time.chrono.ChronoLocalDate
        dateNow(arg0: java.time.Clock): java.time.chrono.ChronoLocalDate
        date(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDate
        localDateTime(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime<java.time.chrono.ChronoLocalDate>
        zonedDateTime(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime<java.time.chrono.ChronoLocalDate>
        zonedDateTime(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<java.time.chrono.ChronoLocalDate>
        isLeapYear(arg0: long): boolean
        prolepticYear(arg0: java.time.chrono.Era, arg1: int): int
        eraOf(arg0: int): java.time.chrono.Era
        eras(): java.util.List<java.time.chrono.Era>
        range(arg0: java.time.temporal.ChronoField): java.time.temporal.ValueRange
        getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): java.lang.String
        resolveDate(arg0: java.util.Map<java.time.temporal.TemporalField,java.lang.Long>, arg1: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate
        period(arg0: int, arg1: int, arg2: int): java.time.chrono.ChronoPeriod
        epochSecond(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.time.ZoneOffset): long
        epochSecond(arg0: java.time.chrono.Era, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.time.ZoneOffset): long
        compareTo(arg0: java.time.chrono.Chronology): int
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
        toString(): java.lang.String
        compareTo(arg0: java.lang.Object): int
      }

    }
  }
}
