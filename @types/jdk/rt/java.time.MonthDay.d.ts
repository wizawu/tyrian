declare namespace java {
    namespace time {
class MonthDay implements java.time.temporal.TemporalAccessor , java.time.temporal.TemporalAdjuster , java.lang.Comparable<java.time.MonthDay> , java.io.Serializable {
    public static now(): java.time.MonthDay
    public static now(arg0: java.time.ZoneId): java.time.MonthDay
    public static now(arg0: java.time.Clock): java.time.MonthDay
    public static of(arg0: java.time.Month | java.time.Month$$Lambda, arg1: int): java.time.MonthDay
    public static of(arg0: int, arg1: int): java.time.MonthDay
    public static from(arg0: java.time.temporal.TemporalAccessor): java.time.MonthDay
    public static parse(arg0: java.lang.CharSequence): java.time.MonthDay
    public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.MonthDay
    public isSupported(arg0: java.time.temporal.TemporalField): boolean
    public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
    public get(arg0: java.time.temporal.TemporalField): int
    public getLong(arg0: java.time.temporal.TemporalField): long
    public getMonthValue(): int
    public getMonth(): java.time.Month
    public getDayOfMonth(): int
    public isValidYear(arg0: int): boolean
    public withMonth(arg0: int): java.time.MonthDay
    public with(arg0: java.time.Month | java.time.Month$$Lambda): java.time.MonthDay
    public withDayOfMonth(arg0: int): java.time.MonthDay
    public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
    public adjustInto<R>(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
    public format<R>(arg0: java.time.format.DateTimeFormatter): string
    public atYear<R>(arg0: int): java.time.LocalDate
    public compareTo<R>(arg0: java.time.MonthDay): int
    public isAfter<R>(arg0: java.time.MonthDay): boolean
    public isBefore<R>(arg0: java.time.MonthDay): boolean
    public equals<R>(arg0: java.lang.Object): boolean
    public hashCode<R>(): int
    public toString<R>(): string
    public compareTo<R>(arg0: java.lang.Object): int
    public static class: java.lang.Class<any>
}

    }
}