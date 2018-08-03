declare namespace java {
    namespace time {
        class Year implements java.time.temporal.Temporal , java.time.temporal.TemporalAdjuster , java.lang.Comparable<java.time.Year> , java.io.Serializable {
            public static readonly MIN_VALUE: int
            public static readonly MAX_VALUE: int
            public static now(): java.time.Year
            public static now(arg0: java.time.ZoneId): java.time.Year
            public static now(arg0: java.time.Clock): java.time.Year
            public static of(arg0: int): java.time.Year
            public static from(arg0: java.time.temporal.TemporalAccessor): java.time.Year
            public static parse(arg0: java.lang.CharSequence): java.time.Year
            public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.Year
            public static isLeap(arg0: long): boolean
            public getValue(): int
            public isSupported(arg0: java.time.temporal.TemporalField): boolean
            public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
            public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
            public get(arg0: java.time.temporal.TemporalField): int
            public getLong(arg0: java.time.temporal.TemporalField): long
            public isLeap(): boolean
            public isValidMonthDay(arg0: java.time.MonthDay): boolean
            public length(): int
            public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$Lambda): java.time.Year
            public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.Year
            public plus(arg0: java.time.temporal.TemporalAmount): java.time.Year
            public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.Year
            public plusYears(arg0: long): java.time.Year
            public minus(arg0: java.time.temporal.TemporalAmount): java.time.Year
            public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.Year
            public minusYears(arg0: long): java.time.Year
            public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
            public adjustInto<R>(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
            public until<R>(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
            public format<R>(arg0: java.time.format.DateTimeFormatter): string
            public atDay<R>(arg0: int): java.time.LocalDate
            public atMonth<R>(arg0: java.time.Month): java.time.YearMonth
            public atMonth<R>(arg0: int): java.time.YearMonth
            public atMonthDay<R>(arg0: java.time.MonthDay): java.time.LocalDate
            public compareTo<R>(arg0: java.time.Year): int
            public isAfter<R>(arg0: java.time.Year): boolean
            public isBefore<R>(arg0: java.time.Year): boolean
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