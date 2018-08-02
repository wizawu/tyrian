declare namespace java {
    namespace time {
        namespace chrono {
class ChronoLocalDateTimeImpl<D extends java.time.chrono.ChronoLocalDate> implements java.time.chrono.ChronoLocalDateTime<D> , java.time.temporal.Temporal , java.time.temporal.TemporalAdjuster , java.io.Serializable {
    public toLocalDate(): D
    public toLocalTime(): java.time.LocalTime
    public isSupported(arg0: java.time.temporal.TemporalField): boolean
    public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
    public get(arg0: java.time.temporal.TemporalField): int
    public getLong(arg0: java.time.temporal.TemporalField): long
    public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.chrono.ChronoLocalDateTimeImpl<D>
    public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoLocalDateTimeImpl<D>
    public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTimeImpl<D>
    public atZone(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<D>
    public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTime
    public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoLocalDateTime
    public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.chrono.ChronoLocalDateTime
    public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
    public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
    public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.temporal.Temporal
    public static class: java.lang.Class<any>
}

        }
    }
}