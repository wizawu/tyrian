declare namespace java {
    namespace util {
        class JapaneseImperialCalendar extends java.util.Calendar {
            public static BEFORE_MEIJI: int
            public static MEIJI: int
            public static TAISHO: int
            public static SHOWA: int
            public static HEISEI: int
            public getCalendarType(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public add(arg0: int, arg1: int): void
            public roll(arg0: int, arg1: boolean): void
            public roll(arg0: int, arg1: int): void
            public getDisplayName(arg0: int, arg1: int, arg2: java.util.Locale): string
            public getDisplayNames(arg0: int, arg1: int, arg2: java.util.Locale): java.util.Map<java.lang.String, java.lang.Integer>
            public getMinimum(arg0: int): int
            public getMaximum(arg0: int): int
            public getGreatestMinimum(arg0: int): int
            public getLeastMaximum(arg0: int): int
            public getActualMinimum(arg0: int): int
            public getActualMaximum(arg0: int): int
            public clone(): java.lang.Object
            public getTimeZone(): java.util.TimeZone
            public setTimeZone(arg0: java.util.TimeZone): void
            protected computeFields(): void
            protected computeTime(): void
            public static class: java.lang.Class<any>
        }
    }
}