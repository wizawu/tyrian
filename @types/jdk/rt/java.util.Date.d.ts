declare namespace java {
    namespace util {
        class Date implements java.io.Serializable , java.lang.Cloneable , java.lang.Comparable<java.util.Date> {
            public constructor()
            public constructor(arg0: long)
            public constructor(arg0: int, arg1: int, arg2: int)
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
            public constructor(arg0: java.lang.String | string)
            public clone(): java.lang.Object
            public static UTC(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): long
            public static parse(arg0: java.lang.String | string): long
            public getYear(): int
            public setYear(arg0: int): void
            public getMonth(): int
            public setMonth(arg0: int): void
            public getDate(): int
            public setDate(arg0: int): void
            public getDay(): int
            public getHours(): int
            public setHours(arg0: int): void
            public getMinutes(): int
            public setMinutes(arg0: int): void
            public getSeconds(): int
            public setSeconds(arg0: int): void
            public getTime(): long
            public setTime(arg0: long): void
            public before(arg0: java.util.Date): boolean
            public after(arg0: java.util.Date): boolean
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.util.Date): int
            public hashCode(): int
            public toString(): string
            public toLocaleString(): string
            public toGMTString(): string
            public getTimezoneOffset(): int
            public static from(arg0: java.time.Instant): java.util.Date
            public toInstant(): java.time.Instant
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}