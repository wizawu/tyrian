declare namespace java {
    namespace time {
        class LocalDateTime implements java.time.temporal.Temporal , java.time.temporal.TemporalAdjuster , java.time.chrono.ChronoLocalDateTime<java.time.LocalDate> , java.io.Serializable {
            public static MIN: java.time.LocalDateTime
            public static MAX: java.time.LocalDateTime
            public static now(): java.time.LocalDateTime
            public static now(arg0: java.time.ZoneId): java.time.LocalDateTime
            public static now(arg0: java.time.Clock): java.time.LocalDateTime
            public static of(arg0: int, arg1: java.time.Month | java.time.Month$$Lambda, arg2: int, arg3: int, arg4: int): java.time.LocalDateTime
            public static of(arg0: int, arg1: java.time.Month | java.time.Month$$Lambda, arg2: int, arg3: int, arg4: int, arg5: int): java.time.LocalDateTime
            public static of(arg0: int, arg1: java.time.Month | java.time.Month$$Lambda, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): java.time.LocalDateTime
            public static of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): java.time.LocalDateTime
            public static of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): java.time.LocalDateTime
            public static of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int): java.time.LocalDateTime
            public static of(arg0: java.time.LocalDate, arg1: java.time.LocalTime): java.time.LocalDateTime
            public static ofInstant(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.LocalDateTime
            public static ofEpochSecond(arg0: long, arg1: int, arg2: java.time.ZoneOffset): java.time.LocalDateTime
            public static from(arg0: java.time.temporal.TemporalAccessor): java.time.LocalDateTime
            public static parse(arg0: java.lang.CharSequence): java.time.LocalDateTime
            public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.LocalDateTime
            public isSupported(arg0: java.time.temporal.TemporalField): boolean
            public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
            public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
            public get(arg0: java.time.temporal.TemporalField): int
            public getLong(arg0: java.time.temporal.TemporalField): long
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
            public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.LocalDateTime
            public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.LocalDateTime
            public withYear(arg0: int): java.time.LocalDateTime
            public withMonth(arg0: int): java.time.LocalDateTime
            public withDayOfMonth(arg0: int): java.time.LocalDateTime
            public withDayOfYear(arg0: int): java.time.LocalDateTime
            public withHour(arg0: int): java.time.LocalDateTime
            public withMinute(arg0: int): java.time.LocalDateTime
            public withSecond(arg0: int): java.time.LocalDateTime
            public withNano(arg0: int): java.time.LocalDateTime
            public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.LocalDateTime
            public plus(arg0: java.time.temporal.TemporalAmount): java.time.LocalDateTime
            public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.LocalDateTime
            public plusYears(arg0: long): java.time.LocalDateTime
            public plusMonths(arg0: long): java.time.LocalDateTime
            public plusWeeks(arg0: long): java.time.LocalDateTime
            public plusDays(arg0: long): java.time.LocalDateTime
            public plusHours(arg0: long): java.time.LocalDateTime
            public plusMinutes(arg0: long): java.time.LocalDateTime
            public plusSeconds(arg0: long): java.time.LocalDateTime
            public plusNanos(arg0: long): java.time.LocalDateTime
            public minus(arg0: java.time.temporal.TemporalAmount): java.time.LocalDateTime
            public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.LocalDateTime
            public minusYears(arg0: long): java.time.LocalDateTime
            public minusMonths(arg0: long): java.time.LocalDateTime
            public minusWeeks(arg0: long): java.time.LocalDateTime
            public minusDays(arg0: long): java.time.LocalDateTime
            public minusHours(arg0: long): java.time.LocalDateTime
            public minusMinutes(arg0: long): java.time.LocalDateTime
            public minusSeconds(arg0: long): java.time.LocalDateTime
            public minusNanos(arg0: long): java.time.LocalDateTime
            public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
            public adjustInto<R>(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
            public until<R>(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
            public format<R>(arg0: java.time.format.DateTimeFormatter): string
            public atOffset<R>(arg0: java.time.ZoneOffset): java.time.OffsetDateTime
            public atZone<R>(arg0: java.time.ZoneId): java.time.ZonedDateTime
            public compareTo<R>(arg0: java.time.chrono.ChronoLocalDateTime<any>): int
            public isAfter<R>(arg0: java.time.chrono.ChronoLocalDateTime<any>): boolean
            public isBefore<R>(arg0: java.time.chrono.ChronoLocalDateTime<any>): boolean
            public isEqual<R>(arg0: java.time.chrono.ChronoLocalDateTime<any>): boolean
            public equals<R>(arg0: java.lang.Object): boolean
            public hashCode<R>(): int
            public toString<R>(): string
            public minus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
            public minus<R>(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
            public plus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
            public plus<R>(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
            public with<R>(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
            public with<R>(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.temporal.Temporal
            public atZone<R>(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime
            public minus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTime
            public minus<R>(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDateTime
            public plus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTime
            public plus<R>(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDateTime
            public with<R>(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoLocalDateTime
            public with<R>(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.chrono.ChronoLocalDateTime
            public toLocalDate<R>(): java.time.chrono.ChronoLocalDate
            public compareTo<R>(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}