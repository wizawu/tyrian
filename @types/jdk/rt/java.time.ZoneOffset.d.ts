declare namespace java {
    namespace time {
        class ZoneOffset extends java.time.ZoneId implements java.time.temporal.TemporalAccessor , java.time.temporal.TemporalAdjuster , java.lang.Comparable<java.time.ZoneOffset> , java.io.Serializable {
            public static readonly UTC: java.time.ZoneOffset
            public static readonly MIN: java.time.ZoneOffset
            public static readonly MAX: java.time.ZoneOffset
            public static of(arg0: java.lang.String | string): java.time.ZoneOffset
            public static ofHours(arg0: int): java.time.ZoneOffset
            public static ofHoursMinutes(arg0: int, arg1: int): java.time.ZoneOffset
            public static ofHoursMinutesSeconds(arg0: int, arg1: int, arg2: int): java.time.ZoneOffset
            public static from(arg0: java.time.temporal.TemporalAccessor): java.time.ZoneOffset
            public static ofTotalSeconds(arg0: int): java.time.ZoneOffset
            public getTotalSeconds(): int
            public getId(): string
            public getRules(): java.time.zone.ZoneRules
            public isSupported(arg0: java.time.temporal.TemporalField): boolean
            public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
            public get(arg0: java.time.temporal.TemporalField): int
            public getLong(arg0: java.time.temporal.TemporalField): long
            public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$Lambda<R>): R
            public adjustInto<R>(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
            public compareTo<R>(arg0: java.time.ZoneOffset): int
            public equals<R>(arg0: java.lang.Object): boolean
            public hashCode<R>(): int
            public toString<R>(): string
            public compareTo<R>(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}