declare namespace java {
    namespace time {
        namespace chrono {
            interface ChronoZonedDateTime<D extends java.time.chrono.ChronoLocalDate> extends java.time.temporal.Temporal , java.lang.Comparable<java.time.chrono.ChronoZonedDateTime<any>> {
                timeLineOrder(): java.util.Comparator<java.time.chrono.ChronoZonedDateTime<any>>
                from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoZonedDateTime<any>
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
                with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.chrono.ChronoZonedDateTime<D>
                with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoZonedDateTime<D>
                plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime<D>
                plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoZonedDateTime<D>
                minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime<D>
                minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoZonedDateTime<D>
                query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
                format<R>(arg0: java.time.format.DateTimeFormatter): string
                toInstant<R>(): java.time.Instant
                toEpochSecond<R>(): long
                compareTo<R>(arg0: java.time.chrono.ChronoZonedDateTime<any>): int
                isBefore<R>(arg0: java.time.chrono.ChronoZonedDateTime<any>): boolean
                isAfter<R>(arg0: java.time.chrono.ChronoZonedDateTime<any>): boolean
                isEqual<R>(arg0: java.time.chrono.ChronoZonedDateTime<any>): boolean
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