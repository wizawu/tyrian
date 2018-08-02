declare namespace java {
    namespace time {
        namespace chrono {
class JapaneseDate extends java.time.chrono.ChronoLocalDateImpl<java.time.chrono.JapaneseDate> implements java.time.chrono.ChronoLocalDate , java.io.Serializable {
    public static now(): java.time.chrono.JapaneseDate
    public static now(arg0: java.time.ZoneId): java.time.chrono.JapaneseDate
    public static now(arg0: java.time.Clock): java.time.chrono.JapaneseDate
    public static of(arg0: java.time.chrono.JapaneseEra, arg1: int, arg2: int, arg3: int): java.time.chrono.JapaneseDate
    public static of(arg0: int, arg1: int, arg2: int): java.time.chrono.JapaneseDate
    public static from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.JapaneseDate
    public getChronology(): java.time.chrono.JapaneseChronology
    public getEra(): java.time.chrono.JapaneseEra
    public lengthOfMonth(): int
    public lengthOfYear(): int
    public isSupported(arg0: java.time.temporal.TemporalField): boolean
    public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
    public getLong(arg0: java.time.temporal.TemporalField): long
    public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.JapaneseDate
    public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.chrono.JapaneseDate
    public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.JapaneseDate
    public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.JapaneseDate
    public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.JapaneseDate
    public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.JapaneseDate
    public atTime(arg0: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime<java.time.chrono.JapaneseDate>
    public until(arg0: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
    public toEpochDay(): long
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
    public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
    public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
    public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
    public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
    public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoLocalDate
    public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.chrono.ChronoLocalDate
    public getEra(): java.time.chrono.Era
    public getChronology(): java.time.chrono.Chronology
    public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
    public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
    public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
    public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
    public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
    public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.temporal.Temporal
    public static class: java.lang.Class<any>
}

        }
    }
}