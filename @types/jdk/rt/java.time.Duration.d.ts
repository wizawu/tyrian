declare namespace java {
    namespace time {
class Duration implements java.time.temporal.TemporalAmount , java.lang.Comparable<java.time.Duration> , java.io.Serializable {
    public static ZERO: java.time.Duration
    public static ofDays(arg0: long): java.time.Duration
    public static ofHours(arg0: long): java.time.Duration
    public static ofMinutes(arg0: long): java.time.Duration
    public static ofSeconds(arg0: long): java.time.Duration
    public static ofSeconds(arg0: long, arg1: long): java.time.Duration
    public static ofMillis(arg0: long): java.time.Duration
    public static ofNanos(arg0: long): java.time.Duration
    public static of(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.Duration
    public static from(arg0: java.time.temporal.TemporalAmount): java.time.Duration
    public static parse(arg0: java.lang.CharSequence): java.time.Duration
    public static between(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.Temporal): java.time.Duration
    public get(arg0: java.time.temporal.TemporalUnit): long
    public getUnits(): java.util.List<java.time.temporal.TemporalUnit>
    public isZero(): boolean
    public isNegative(): boolean
    public getSeconds(): long
    public getNano(): int
    public withSeconds(arg0: long): java.time.Duration
    public withNanos(arg0: int): java.time.Duration
    public plus(arg0: java.time.Duration): java.time.Duration
    public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.Duration
    public plusDays(arg0: long): java.time.Duration
    public plusHours(arg0: long): java.time.Duration
    public plusMinutes(arg0: long): java.time.Duration
    public plusSeconds(arg0: long): java.time.Duration
    public plusMillis(arg0: long): java.time.Duration
    public plusNanos(arg0: long): java.time.Duration
    public minus(arg0: java.time.Duration): java.time.Duration
    public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.Duration
    public minusDays(arg0: long): java.time.Duration
    public minusHours(arg0: long): java.time.Duration
    public minusMinutes(arg0: long): java.time.Duration
    public minusSeconds(arg0: long): java.time.Duration
    public minusMillis(arg0: long): java.time.Duration
    public minusNanos(arg0: long): java.time.Duration
    public multipliedBy(arg0: long): java.time.Duration
    public dividedBy(arg0: long): java.time.Duration
    public negated(): java.time.Duration
    public abs(): java.time.Duration
    public addTo(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
    public subtractFrom(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
    public toDays(): long
    public toHours(): long
    public toMinutes(): long
    public toMillis(): long
    public toNanos(): long
    public compareTo(arg0: java.time.Duration): int
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public compareTo(arg0: java.lang.Object): int
    public static class: java.lang.Class<any>
}

    }
}