declare namespace java {
  namespace time {
    namespace chrono {

      interface ChronoZonedDateTime<D extends java.time.chrono.ChronoLocalDate> extends java.time.temporal.Temporal, java.lang.Comparable<java.time.chrono.ChronoZonedDateTime<unknown>> {
        timeLineOrder(): java.util.Comparator<java.time.chrono.ChronoZonedDateTime<unknown>>
        from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime<unknown>
        range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
        get(arg0: java.time.temporal.TemporalField): int
        getLong(arg0: java.time.temporal.TemporalField): long
        toLocalDate(): D
        toLocalTime(): java.time.LocalTime
        toLocalDateTime(): java.time.chrono.ChronoLocalDateTime<D>
        getChronology(): java.time.chrono.Chronology
        getOffset(): java.time.ZoneOffset
        getZone(): java.time.ZoneId
        withEarlierOffsetAtOverlap(): java.time.chrono.ChronoZonedDateTime<D>
        withLaterOffsetAtOverlap(): java.time.chrono.ChronoZonedDateTime<D>
        withZoneSameLocal(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<D>
        withZoneSameInstant(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<D>
        isSupported(arg0: java.time.temporal.TemporalField): boolean
        isSupported(arg0: java.time.temporal.TemporalUnit): boolean
        with(arg0: java.time.temporal.TemporalAdjuster): java.time.chrono.ChronoZonedDateTime<D>
        with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoZonedDateTime<D>
        plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime<D>
        plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoZonedDateTime<D>
        minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime<D>
        minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoZonedDateTime<D>
        query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
        format(arg0: java.time.format.DateTimeFormatter): java.lang.String
        toInstant(): java.time.Instant
        toEpochSecond(): long
        compareTo(arg0: java.time.chrono.ChronoZonedDateTime<unknown>): int
        isBefore(arg0: java.time.chrono.ChronoZonedDateTime<unknown>): boolean
        isAfter(arg0: java.time.chrono.ChronoZonedDateTime<unknown>): boolean
        isEqual(arg0: java.time.chrono.ChronoZonedDateTime<unknown>): boolean
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
