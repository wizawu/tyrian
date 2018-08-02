declare namespace java {
    namespace time {
class LocalDate implements java.time.temporal.Temporal , java.time.temporal.TemporalAdjuster , java.time.chrono.ChronoLocalDate , java.io.Serializable {
    public static MIN: java.time.LocalDate
    public static MAX: java.time.LocalDate
    public static now(): java.time.LocalDate
    public static now(arg0: java.time.ZoneId): java.time.LocalDate
    public static now(arg0: java.time.Clock): java.time.LocalDate
    public static of(arg0: int, arg1: java.time.Month | java.time.Month$$Lambda, arg2: int): java.time.LocalDate
    public static of(arg0: int, arg1: int, arg2: int): java.time.LocalDate
    public static ofYearDay(arg0: int, arg1: int): java.time.LocalDate
    public static ofEpochDay(arg0: long): java.time.LocalDate
    public static from(arg0: java.time.temporal.TemporalAccessor): java.time.LocalDate
    public static parse(arg0: java.lang.CharSequence): java.time.LocalDate
    public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.LocalDate
    public isSupported(arg0: java.time.temporal.TemporalField): boolean
    public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
    public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
    public get(arg0: java.time.temporal.TemporalField): int
    public getLong(arg0: java.time.temporal.TemporalField): long
    public getChronology(): java.time.chrono.IsoChronology
    public getEra(): java.time.chrono.Era
    public getYear(): int
    public getMonthValue(): int
    public getMonth(): java.time.Month
    public getDayOfMonth(): int
    public getDayOfYear(): int
    public getDayOfWeek(): java.time.DayOfWeek
    public isLeapYear(): boolean
    public lengthOfMonth(): int
    public lengthOfYear(): int
    public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.LocalDate
    public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.LocalDate
    public withYear(arg0: int): java.time.LocalDate
    public withMonth(arg0: int): java.time.LocalDate
    public withDayOfMonth(arg0: int): java.time.LocalDate
    public withDayOfYear(arg0: int): java.time.LocalDate
    public plus(arg0: java.time.temporal.TemporalAmount): java.time.LocalDate
    public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.LocalDate
    public plusYears(arg0: long): java.time.LocalDate
    public plusMonths(arg0: long): java.time.LocalDate
    public plusWeeks(arg0: long): java.time.LocalDate
    public plusDays(arg0: long): java.time.LocalDate
    public minus(arg0: java.time.temporal.TemporalAmount): java.time.LocalDate
    public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.LocalDate
    public minusYears(arg0: long): java.time.LocalDate
    public minusMonths(arg0: long): java.time.LocalDate
    public minusWeeks(arg0: long): java.time.LocalDate
    public minusDays(arg0: long): java.time.LocalDate
    public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
    public adjustInto<R>(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
    public until<R>(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
    public until<R>(arg0: java.time.chrono.ChronoLocalDate): java.time.Period
    public format<R>(arg0: java.time.format.DateTimeFormatter): string
    public atTime<R>(arg0: java.time.LocalTime): java.time.LocalDateTime
    public atTime<R>(arg0: int, arg1: int): java.time.LocalDateTime
    public atTime<R>(arg0: int, arg1: int, arg2: int): java.time.LocalDateTime
    public atTime<R>(arg0: int, arg1: int, arg2: int, arg3: int): java.time.LocalDateTime
    public atTime<R>(arg0: java.time.OffsetTime): java.time.OffsetDateTime
    public atStartOfDay<R>(): java.time.LocalDateTime
    public atStartOfDay<R>(arg0: java.time.ZoneId): java.time.ZonedDateTime
    public toEpochDay<R>(): long
    public compareTo<R>(arg0: java.time.chrono.ChronoLocalDate): int
    public isAfter<R>(arg0: java.time.chrono.ChronoLocalDate): boolean
    public isBefore<R>(arg0: java.time.chrono.ChronoLocalDate): boolean
    public isEqual<R>(arg0: java.time.chrono.ChronoLocalDate): boolean
    public equals<R>(arg0: java.lang.Object): boolean
    public hashCode<R>(): int
    public toString<R>(): string
    public minus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
    public minus<R>(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
    public plus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
    public plus<R>(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
    public with<R>(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
    public with<R>(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.temporal.Temporal
    public atTime<R>(arg0: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime
    public until<R>(arg0: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
    public minus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
    public minus<R>(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
    public plus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
    public plus<R>(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
    public with<R>(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoLocalDate
    public with<R>(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.chrono.ChronoLocalDate
    public getChronology<R>(): java.time.chrono.Chronology
    public compareTo<R>(arg0: java.lang.Object): int
    public static class: java.lang.Class<any>
}

    }
}