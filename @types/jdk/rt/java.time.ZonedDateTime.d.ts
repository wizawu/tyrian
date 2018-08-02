declare namespace java {
    namespace time {
class ZonedDateTime implements java.time.temporal.Temporal , java.time.chrono.ChronoZonedDateTime<java.time.LocalDate> , java.io.Serializable {
    public static now(): java.time.ZonedDateTime
    public static now(arg0: java.time.ZoneId): java.time.ZonedDateTime
    public static now(arg0: java.time.Clock): java.time.ZonedDateTime
    public static of(arg0: java.time.LocalDate, arg1: java.time.LocalTime, arg2: java.time.ZoneId): java.time.ZonedDateTime
    public static of(arg0: java.time.LocalDateTime, arg1: java.time.ZoneId): java.time.ZonedDateTime
    public static of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.time.ZoneId): java.time.ZonedDateTime
    public static ofLocal(arg0: java.time.LocalDateTime, arg1: java.time.ZoneId, arg2: java.time.ZoneOffset): java.time.ZonedDateTime
    public static ofInstant(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.ZonedDateTime
    public static ofInstant(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: java.time.ZoneId): java.time.ZonedDateTime
    public static ofStrict(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: java.time.ZoneId): java.time.ZonedDateTime
    public static from(arg0: java.time.temporal.TemporalAccessor): java.time.ZonedDateTime
    public static parse(arg0: java.lang.CharSequence): java.time.ZonedDateTime
    public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.ZonedDateTime
    public isSupported(arg0: java.time.temporal.TemporalField): boolean
    public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
    public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
    public get(arg0: java.time.temporal.TemporalField): int
    public getLong(arg0: java.time.temporal.TemporalField): long
    public getOffset(): java.time.ZoneOffset
    public withEarlierOffsetAtOverlap(): java.time.ZonedDateTime
    public withLaterOffsetAtOverlap(): java.time.ZonedDateTime
    public getZone(): java.time.ZoneId
    public withZoneSameLocal(arg0: java.time.ZoneId): java.time.ZonedDateTime
    public withZoneSameInstant(arg0: java.time.ZoneId): java.time.ZonedDateTime
    public withFixedOffsetZone(): java.time.ZonedDateTime
    public toLocalDateTime(): java.time.LocalDateTime
    public toLocalDate(): java.time.LocalDate
    public getYear(): int
    public getMonthValue(): int
    public getMonth(): java.time.Month
    public getDayOfMonth(): int
    public getDayOfYear(): int
    public getDayOfWeek(): java.time.DayOfWeek
    public toLocalTime(): java.time.LocalTime
    public getHour(): int
    public getMinute(): int
    public getSecond(): int
    public getNano(): int
    public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.ZonedDateTime
    public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.ZonedDateTime
    public withYear(arg0: int): java.time.ZonedDateTime
    public withMonth(arg0: int): java.time.ZonedDateTime
    public withDayOfMonth(arg0: int): java.time.ZonedDateTime
    public withDayOfYear(arg0: int): java.time.ZonedDateTime
    public withHour(arg0: int): java.time.ZonedDateTime
    public withMinute(arg0: int): java.time.ZonedDateTime
    public withSecond(arg0: int): java.time.ZonedDateTime
    public withNano(arg0: int): java.time.ZonedDateTime
    public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.ZonedDateTime
    public plus(arg0: java.time.temporal.TemporalAmount): java.time.ZonedDateTime
    public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.ZonedDateTime
    public plusYears(arg0: long): java.time.ZonedDateTime
    public plusMonths(arg0: long): java.time.ZonedDateTime
    public plusWeeks(arg0: long): java.time.ZonedDateTime
    public plusDays(arg0: long): java.time.ZonedDateTime
    public plusHours(arg0: long): java.time.ZonedDateTime
    public plusMinutes(arg0: long): java.time.ZonedDateTime
    public plusSeconds(arg0: long): java.time.ZonedDateTime
    public plusNanos(arg0: long): java.time.ZonedDateTime
    public minus(arg0: java.time.temporal.TemporalAmount): java.time.ZonedDateTime
    public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.ZonedDateTime
    public minusYears(arg0: long): java.time.ZonedDateTime
    public minusMonths(arg0: long): java.time.ZonedDateTime
    public minusWeeks(arg0: long): java.time.ZonedDateTime
    public minusDays(arg0: long): java.time.ZonedDateTime
    public minusHours(arg0: long): java.time.ZonedDateTime
    public minusMinutes(arg0: long): java.time.ZonedDateTime
    public minusSeconds(arg0: long): java.time.ZonedDateTime
    public minusNanos(arg0: long): java.time.ZonedDateTime
    public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
    public until<R>(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
    public format<R>(arg0: java.time.format.DateTimeFormatter): string
    public toOffsetDateTime<R>(): java.time.OffsetDateTime
    public equals<R>(arg0: java.lang.Object): boolean
    public hashCode<R>(): int
    public toString<R>(): string
    public minus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
    public minus<R>(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
    public plus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
    public plus<R>(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
    public with<R>(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
    public with<R>(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.temporal.Temporal
    public minus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoZonedDateTime
    public minus<R>(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime
    public plus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoZonedDateTime
    public plus<R>(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime
    public with<R>(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoZonedDateTime
    public with<R>(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.chrono.ChronoZonedDateTime
    public withZoneSameInstant<R>(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime
    public withZoneSameLocal<R>(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime
    public withLaterOffsetAtOverlap<R>(): java.time.chrono.ChronoZonedDateTime
    public withEarlierOffsetAtOverlap<R>(): java.time.chrono.ChronoZonedDateTime
    public toLocalDateTime<R>(): java.time.chrono.ChronoLocalDateTime
    public toLocalDate<R>(): java.time.chrono.ChronoLocalDate
    public static class: java.lang.Class<any>
}

    }
}