declare namespace java {
    namespace time {
        namespace chrono {
class ChronoZonedDateTimeImpl<D extends java.time.chrono.ChronoLocalDate> implements java.time.chrono.ChronoZonedDateTime<D> , java.io.Serializable {
    public getOffset(): java.time.ZoneOffset
    public withEarlierOffsetAtOverlap(): java.time.chrono.ChronoZonedDateTime<D>
    public withLaterOffsetAtOverlap(): java.time.chrono.ChronoZonedDateTime<D>
    public toLocalDateTime(): java.time.chrono.ChronoLocalDateTime<D>
    public getZone(): java.time.ZoneId
    public withZoneSameLocal(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<D>
    public withZoneSameInstant(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime<D>
    public isSupported(arg0: java.time.temporal.TemporalField): boolean
    public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoZonedDateTime<D>
    public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoZonedDateTime<D>
    public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
    public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
    public static class: java.lang.Class<any>
}

        }
    }
}