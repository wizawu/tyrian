declare namespace java {
    namespace sql {
        class Date extends java.util.Date {
            public constructor(arg0: int, arg1: int, arg2: int)
            public constructor(arg0: long)
            public setTime(arg0: long): void
            public static valueOf(arg0: java.lang.String | string): java.sql.Date
            public toString(): string
            public getHours(): int
            public getMinutes(): int
            public getSeconds(): int
            public setHours(arg0: int): void
            public setMinutes(arg0: int): void
            public setSeconds(arg0: int): void
            public static valueOf(arg0: java.time.LocalDate): java.sql.Date
            public toLocalDate(): java.time.LocalDate
            public toInstant(): java.time.Instant
            public static class: java.lang.Class<any>
        }
    }
}