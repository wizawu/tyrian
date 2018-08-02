declare namespace java {
    namespace util {
        class GregorianCalendar extends java.util.Calendar {
            public static BC: int
            public static AD: int
            public constructor()
            public constructor(arg0: java.util.TimeZone)
            public constructor(arg0: java.util.Locale)
            public constructor(arg0: java.util.TimeZone, arg1: java.util.Locale)
            public constructor(arg0: int, arg1: int, arg2: int)
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
            public setGregorianChange(arg0: java.util.Date): void
            public getGregorianChange(): java.util.Date
            public isLeapYear(arg0: int): boolean
            public getCalendarType(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public add(arg0: int, arg1: int): void
            public roll(arg0: int, arg1: boolean): void
            public roll(arg0: int, arg1: int): void
            public getMinimum(arg0: int): int
            public getMaximum(arg0: int): int
            public getGreatestMinimum(arg0: int): int
            public getLeastMaximum(arg0: int): int
            public getActualMinimum(arg0: int): int
            public getActualMaximum(arg0: int): int
            public clone(): java.lang.Object
            public getTimeZone(): java.util.TimeZone
            public setTimeZone(arg0: java.util.TimeZone): void
            public isWeekDateSupported(): boolean
            public getWeekYear(): int
            public setWeekDate(arg0: int, arg1: int, arg2: int): void
            public getWeeksInWeekYear(): int
            protected computeFields(): void
            protected computeTime(): void
            public toZonedDateTime(): java.time.ZonedDateTime
            public static from(arg0: java.time.ZonedDateTime): java.util.GregorianCalendar
            public static class: java.lang.Class<any>
        }
    }
}