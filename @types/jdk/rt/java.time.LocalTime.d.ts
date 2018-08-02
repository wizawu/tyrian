declare namespace java {
    namespace time {
        class LocalTime implements java.time.temporal.Temporal , java.time.temporal.TemporalAdjuster , java.lang.Comparable<java.time.LocalTime> , java.io.Serializable {
            public static MIN: java.time.LocalTime
            public static MAX: java.time.LocalTime
            public static MIDNIGHT: java.time.LocalTime
            public static NOON: java.time.LocalTime
            public static now(): java.time.LocalTime
            public static now(arg0: java.time.ZoneId): java.time.LocalTime
            public static now(arg0: java.time.Clock): java.time.LocalTime
            public static of(arg0: int, arg1: int): java.time.LocalTime
            public static of(arg0: int, arg1: int, arg2: int): java.time.LocalTime
            public static of(arg0: int, arg1: int, arg2: int, arg3: int): java.time.LocalTime
            public static ofSecondOfDay(arg0: long): java.time.LocalTime
            public static ofNanoOfDay(arg0: long): java.time.LocalTime
            public static from(arg0: java.time.temporal.TemporalAccessor): java.time.LocalTime
            public static parse(arg0: java.lang.CharSequence): java.time.LocalTime
            public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.LocalTime
            public isSupported(arg0: java.time.temporal.TemporalField): boolean
            public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
            public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
            public get(arg0: java.time.temporal.TemporalField): int
            public getLong(arg0: java.time.temporal.TemporalField): long
            public getHour(): int
            public getMinute(): int
            public getSecond(): int
            public getNano(): int
            public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.LocalTime
            public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.LocalTime
            public withHour(arg0: int): java.time.LocalTime
            public withMinute(arg0: int): java.time.LocalTime
            public withSecond(arg0: int): java.time.LocalTime
            public withNano(arg0: int): java.time.LocalTime
            public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.LocalTime
            public plus(arg0: java.time.temporal.TemporalAmount): java.time.LocalTime
            public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.LocalTime
            public plusHours(arg0: long): java.time.LocalTime
            public plusMinutes(arg0: long): java.time.LocalTime
            public plusSeconds(arg0: long): java.time.LocalTime
            public plusNanos(arg0: long): java.time.LocalTime
            public minus(arg0: java.time.temporal.TemporalAmount): java.time.LocalTime
            public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.LocalTime
            public minusHours(arg0: long): java.time.LocalTime
            public minusMinutes(arg0: long): java.time.LocalTime
            public minusSeconds(arg0: long): java.time.LocalTime
            public minusNanos(arg0: long): java.time.LocalTime
            public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
            public adjustInto<R>(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
            public until<R>(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
            public format<R>(arg0: java.time.format.DateTimeFormatter): string
            public atDate<R>(arg0: java.time.LocalDate): java.time.LocalDateTime
            public atOffset<R>(arg0: java.time.ZoneOffset): java.time.OffsetTime
            public toSecondOfDay<R>(): int
            public toNanoOfDay<R>(): long
            public compareTo<R>(arg0: java.time.LocalTime): int
            public isAfter<R>(arg0: java.time.LocalTime): boolean
            public isBefore<R>(arg0: java.time.LocalTime): boolean
            public equals<R>(arg0: java.lang.Object): boolean
            public hashCode<R>(): int
            public toString<R>(): string
            public minus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
            public minus<R>(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
            public plus<R>(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
            public plus<R>(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
            public with<R>(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
            public with<R>(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.temporal.Temporal
            public compareTo<R>(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}