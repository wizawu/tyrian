declare namespace java {
  namespace time {
    namespace chrono {

      interface ChronoLocalDate extends java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.chrono.ChronoLocalDate> {
        timeLineOrder(): java.util.Comparator<java.time.chrono.ChronoLocalDate>
        from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDate
        getChronology(): java.time.chrono.Chronology
        getEra(): java.time.chrono.Era
        isLeapYear(): boolean
        lengthOfMonth(): int
        lengthOfYear(): int
        isSupported(arg0: java.time.temporal.TemporalField): boolean
        isSupported(arg0: java.time.temporal.TemporalUnit): boolean
        with(arg0: java.time.temporal.TemporalAdjuster): java.time.chrono.ChronoLocalDate
        with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoLocalDate
        plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
        plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
        minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
        minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
        query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
        until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
        until(arg0: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
        format(arg0: java.time.format.DateTimeFormatter): java.lang.String
        atTime(arg0: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime<unknown>
        toEpochDay(): long
        compareTo(arg0: java.time.chrono.ChronoLocalDate): int
        isAfter(arg0: java.time.chrono.ChronoLocalDate): boolean
        isBefore(arg0: java.time.chrono.ChronoLocalDate): boolean
        isEqual(arg0: java.time.chrono.ChronoLocalDate): boolean
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
