declare namespace java {
  namespace time {
    namespace chrono {
      interface ChronoZonedDateTime<D extends java.time.chrono.ChronoLocalDate>
        extends java.time.temporal.Temporal,
          java.lang.Comparable<java.time.chrono.ChronoZonedDateTime<unknown>> {
        timeLineOrder?(): java.util.Comparator<java.time.chrono.ChronoZonedDateTime<unknown>>
        from?(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime<unknown>
        range?(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
        get?(arg0: java.time.temporal.TemporalField): number
        getLong?(arg0: java.time.temporal.TemporalField): number
        toLocalDate?(): D
        toLocalTime?(): java.time.LocalTime
        toLocalDateTime(): java.time.chrono.ChronoLocalDateTime<D>
        getChronology?(): java.time.chrono.Chronology
        getOffset(): java.time.ZoneOffset
        getZone(): java.time.ZoneId
        withEarlierOffsetAtOverlap(): java.time.chrono.ChronoZonedDateTime<D>
        withLaterOffsetAtOverlap(): java.time.chrono.ChronoZonedDateTime<D>
        withZoneSameLocal(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<D>
        withZoneSameInstant(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<D>
        isSupported(arg0: java.time.temporal.TemporalField): boolean
        isSupported?(arg0: java.time.temporal.TemporalUnit): boolean
        with?(
          arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda
        ): java.time.chrono.ChronoZonedDateTime<D>
        with(
          arg0: java.time.temporal.TemporalField,
          arg1: number | java.lang.Long
        ): java.time.chrono.ChronoZonedDateTime<D>
        plus?(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime<D>
        plus(
          arg0: number | java.lang.Long,
          arg1: java.time.temporal.TemporalUnit
        ): java.time.chrono.ChronoZonedDateTime<D>
        minus?(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime<D>
        minus?(
          arg0: number | java.lang.Long,
          arg1: java.time.temporal.TemporalUnit
        ): java.time.chrono.ChronoZonedDateTime<D>
        query?<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$lambda<R>): R
        format?(arg0: java.time.format.DateTimeFormatter): java.lang.String
        toInstant?(): java.time.Instant
        toEpochSecond?(): number
        compareTo?(arg0: java.time.chrono.ChronoZonedDateTime<unknown>): number
        isBefore?(arg0: java.time.chrono.ChronoZonedDateTime<unknown>): boolean
        isAfter?(arg0: java.time.chrono.ChronoZonedDateTime<unknown>): boolean
        isEqual?(arg0: java.time.chrono.ChronoZonedDateTime<unknown>): boolean
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
        toString(): java.lang.String
        minus?(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        minus?(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        plus?(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        plus?(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        with?(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.temporal.Temporal
        with?(
          arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda
        ): java.time.temporal.Temporal
        compareTo?(arg0: java.lang.Object | any): number
      }
    }
  }
}
