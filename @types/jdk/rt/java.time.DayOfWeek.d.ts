declare namespace java {
    namespace time {
        class DayOfWeek extends java.lang.Enum<java.time.DayOfWeek> implements java.time.temporal.TemporalAccessor , java.time.temporal.TemporalAdjuster {
            public static MONDAY: java.time.DayOfWeek
            public static TUESDAY: java.time.DayOfWeek
            public static WEDNESDAY: java.time.DayOfWeek
            public static THURSDAY: java.time.DayOfWeek
            public static FRIDAY: java.time.DayOfWeek
            public static SATURDAY: java.time.DayOfWeek
            public static SUNDAY: java.time.DayOfWeek
            public static values(): java.time.DayOfWeek[]
            public static valueOf(arg0: java.lang.String | string): java.time.DayOfWeek
            public static of(arg0: int): java.time.DayOfWeek
            public static from(arg0: java.time.temporal.TemporalAccessor): java.time.DayOfWeek
            public getValue(): int
            public getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): string
            public isSupported(arg0: java.time.temporal.TemporalField): boolean
            public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
            public get(arg0: java.time.temporal.TemporalField): int
            public getLong(arg0: java.time.temporal.TemporalField): long
            public plus(arg0: long): java.time.DayOfWeek
            public minus(arg0: long): java.time.DayOfWeek
            public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
            public adjustInto<R>(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
            public static class: java.lang.Class<any>
        }
    }
}