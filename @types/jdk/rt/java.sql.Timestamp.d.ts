declare namespace java {
    namespace sql {
        class Timestamp extends java.util.Date {
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int)
            public constructor(arg0: long)
            public setTime(arg0: long): void
            public getTime(): long
            public static valueOf(arg0: java.lang.String | string): java.sql.Timestamp
            public toString(): string
            public getNanos(): int
            public setNanos(arg0: int): void
            public equals(arg0: java.sql.Timestamp): boolean
            public equals(arg0: java.lang.Object): boolean
            public before(arg0: java.sql.Timestamp): boolean
            public after(arg0: java.sql.Timestamp): boolean
            public compareTo(arg0: java.sql.Timestamp): int
            public compareTo(arg0: java.util.Date): int
            public hashCode(): int
            public static valueOf(arg0: java.time.LocalDateTime): java.sql.Timestamp
            public toLocalDateTime(): java.time.LocalDateTime
            public static from(arg0: java.time.Instant): java.sql.Timestamp
            public toInstant(): java.time.Instant
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}