declare namespace java {
  namespace time {
    namespace chrono {

      interface ChronoLocalDateTime<D extends java.time.chrono.ChronoLocalDate> extends java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.chrono.ChronoLocalDateTime<unknown>> {
        timeLineOrder(): java.util.Comparator<java.time.chrono.ChronoLocalDateTime<unknown>>
        from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime<unknown>
        getChronology(): java.time.chrono.Chronology
        toLocalDate(): D
        toLocalTime(): java.time.LocalTime
        isSupported(arg0: java.time.temporal.TemporalField): boolean
        isSupported(arg0: java.time.temporal.TemporalUnit): boolean
        with(arg0: java.time.temporal.TemporalAdjuster): java.time.chrono.ChronoLocalDateTime<D>
        with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoLocalDateTime<D>
        plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDateTime<D>
        plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTime<D>
        minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDateTime<D>
        minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTime<D>
        query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
        format(arg0: java.time.format.DateTimeFormatter): java.lang.String
        atZone(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<D>
        toInstant(arg0: java.time.ZoneOffset): java.time.Instant
        toEpochSecond(arg0: java.time.ZoneOffset): long
        compareTo(arg0: java.time.chrono.ChronoLocalDateTime<unknown>): int
        isAfter(arg0: java.time.chrono.ChronoLocalDateTime<unknown>): boolean
        isBefore(arg0: java.time.chrono.ChronoLocalDateTime<unknown>): boolean
        isEqual(arg0: java.time.chrono.ChronoLocalDateTime<unknown>): boolean
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
        toString(): java.lang.String
        minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
        with(arg0: java.time.temporal.TemporalAdjuster): java.time.temporal.Temporal
        compareTo(arg0: java.lang.Object): int
      }

    }
  }
}
