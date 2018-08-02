declare namespace java {
    namespace time {
        namespace chrono {
interface ChronoLocalDate extends java.time.temporal.Temporal , java.time.temporal.TemporalAdjuster , java.lang.Comparable<java.time.chrono.ChronoLocalDate> {
    timeLineOrder(): java.util.Comparator<java.time.chrono.ChronoLocalDate>
    from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ChronoLocalDate
    getChronology(): java.time.chrono.Chronology
    getEra(): java.time.chrono.Era
    isLeapYear(): boolean
    lengthOfMonth(): int
    lengthOfYear(): int
    isSupported(arg0: java.time.temporal.TemporalField): boolean
    isSupported(arg0: java.time.temporal.TemporalUnit): boolean
    with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.chrono.ChronoLocalDate
    with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoLocalDate
    plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
    plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
    minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
    minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
    query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
    adjustInto<R>(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
    until<R>(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
    until<R>(arg0: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
    format<R>(arg0: java.time.format.DateTimeFormatter): string
    atTime<R>(arg0: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime<any>
    toEpochDay<R>(): long
    compareTo<R>(arg0: java.time.chrono.ChronoLocalDate): int
    isAfter<R>(arg0: java.time.chrono.ChronoLocalDate): boolean
    isBefore<R>(arg0: java.time.chrono.ChronoLocalDate): boolean
    isEqual<R>(arg0: java.time.chrono.ChronoLocalDate): boolean
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