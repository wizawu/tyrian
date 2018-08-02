declare namespace java {
    namespace sql {
        class Time extends java.util.Date {
            public constructor(arg0: int, arg1: int, arg2: int)
            public constructor(arg0: long)
            public setTime(arg0: long): void
            public static valueOf(arg0: java.lang.String | string): java.sql.Time
            public toString(): string
            public getYear(): int
            public getMonth(): int
            public getDay(): int
            public getDate(): int
            public setYear(arg0: int): void
            public setMonth(arg0: int): void
            public setDate(arg0: int): void
            public static valueOf(arg0: java.time.LocalTime): java.sql.Time
            public toLocalTime(): java.time.LocalTime
            public toInstant(): java.time.Instant
            public static class: java.lang.Class<any>
        }
    }
}