declare namespace java {
    namespace time {
        namespace chrono {
            interface ChronoLocalDateTime<D extends java.time.chrono.ChronoLocalDate> extends java.time.temporal.Temporal , java.time.temporal.TemporalAdjuster , java.lang.Comparable<java.time.chrono.ChronoLocalDateTime<any>> {
                timeLineOrder(): java.util.Comparator<java.time.chrono.ChronoLocalDateTime<any>>
                from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDateTime<any>
                getChronology(): java.time.chrono.Chronology
                toLocalDate(): D
                toLocalTime(): java.time.LocalTime
                isSupported(arg0: java.time.temporal.TemporalField): boolean
                isSupported(arg0: java.time.temporal.TemporalUnit): boolean
                with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.chrono.ChronoLocalDateTime<D>
                with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoLocalDateTime<D>
                plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDateTime<D>
                plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTime<D>
                minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDateTime<D>
                minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTime<D>
                query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
                adjustInto<R>(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
                format<R>(arg0: java.time.format.DateTimeFormatter): string
                atZone<R>(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<D>
                toInstant<R>(arg0: java.time.ZoneOffset): java.time.Instant
                toEpochSecond<R>(arg0: java.time.ZoneOffset): long
                compareTo<R>(arg0: java.time.chrono.ChronoLocalDateTime<any>): int
                isAfter<R>(arg0: java.time.chrono.ChronoLocalDateTime<any>): boolean
                isBefore<R>(arg0: java.time.chrono.ChronoLocalDateTime<any>): boolean
                isEqual<R>(arg0: java.time.chrono.ChronoLocalDateTime<any>): boolean
                equals<R>(arg0: java.lang.Object): boolean
                hashCode<R>(): int
                toString<R>(): string
                minus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
                minus<R>(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
                plus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
                plus<R>(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
                with<R>(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
                with<R>(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.temporal.Temporal
                compareTo<R>(arg0: java.lang.Object): int
            }
        }
    }
}