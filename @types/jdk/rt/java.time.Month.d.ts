declare namespace java {
    namespace time {
class Month extends java.lang.Enum<java.time.Month> implements java.time.temporal.TemporalAccessor , java.time.temporal.TemporalAdjuster {
    public static JANUARY: java.time.Month
    public static FEBRUARY: java.time.Month
    public static MARCH: java.time.Month
    public static APRIL: java.time.Month
    public static MAY: java.time.Month
    public static JUNE: java.time.Month
    public static JULY: java.time.Month
    public static AUGUST: java.time.Month
    public static SEPTEMBER: java.time.Month
    public static OCTOBER: java.time.Month
    public static NOVEMBER: java.time.Month
    public static DECEMBER: java.time.Month
    public static values(): java.time.Month[]
    public static valueOf(arg0: java.lang.String | string): java.time.Month
    public static of(arg0: int): java.time.Month
    public static from(arg0: java.time.temporal.TemporalAccessor): java.time.Month
    public getValue(): int
    public getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): string
    public isSupported(arg0: java.time.temporal.TemporalField): boolean
    public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
    public get(arg0: java.time.temporal.TemporalField): int
    public getLong(arg0: java.time.temporal.TemporalField): long
    public plus(arg0: long): java.time.Month
    public minus(arg0: long): java.time.Month
    public length(arg0: boolean): int
    public minLength(): int
    public maxLength(): int
    public firstDayOfYear(arg0: boolean): int
    public firstMonthOfQuarter(): java.time.Month
    public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
    public adjustInto<R>(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
    public static class: java.lang.Class<any>
}

class Month$$Lambda extends java.lang.Enum<java.time.Month> implements java.time.temporal.TemporalAccessor , java.time.temporal.TemporalAdjuster {
    public static JANUARY: java.time.Month
}

    }
}