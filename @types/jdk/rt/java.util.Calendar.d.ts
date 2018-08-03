declare namespace java {
    namespace util {
        abstract class Calendar implements java.io.Serializable , java.lang.Cloneable , java.lang.Comparable<java.util.Calendar> {
            public static readonly ERA: int
            public static readonly YEAR: int
            public static readonly MONTH: int
            public static readonly WEEK_OF_YEAR: int
            public static readonly WEEK_OF_MONTH: int
            public static readonly DATE: int
            public static readonly DAY_OF_MONTH: int
            public static readonly DAY_OF_YEAR: int
            public static readonly DAY_OF_WEEK: int
            public static readonly DAY_OF_WEEK_IN_MONTH: int
            public static readonly AM_PM: int
            public static readonly HOUR: int
            public static readonly HOUR_OF_DAY: int
            public static readonly MINUTE: int
            public static readonly SECOND: int
            public static readonly MILLISECOND: int
            public static readonly ZONE_OFFSET: int
            public static readonly DST_OFFSET: int
            public static readonly FIELD_COUNT: int
            public static readonly SUNDAY: int
            public static readonly MONDAY: int
            public static readonly TUESDAY: int
            public static readonly WEDNESDAY: int
            public static readonly THURSDAY: int
            public static readonly FRIDAY: int
            public static readonly SATURDAY: int
            public static readonly JANUARY: int
            public static readonly FEBRUARY: int
            public static readonly MARCH: int
            public static readonly APRIL: int
            public static readonly MAY: int
            public static readonly JUNE: int
            public static readonly JULY: int
            public static readonly AUGUST: int
            public static readonly SEPTEMBER: int
            public static readonly OCTOBER: int
            public static readonly NOVEMBER: int
            public static readonly DECEMBER: int
            public static readonly UNDECIMBER: int
            public static readonly AM: int
            public static readonly PM: int
            public static readonly ALL_STYLES: int
            public static readonly SHORT: int
            public static readonly LONG: int
            public static readonly NARROW_FORMAT: int
            public static readonly NARROW_STANDALONE: int
            public static readonly SHORT_FORMAT: int
            public static readonly LONG_FORMAT: int
            public static readonly SHORT_STANDALONE: int
            public static readonly LONG_STANDALONE: int
            protected fields: int[]
            protected isSet: boolean[]
            protected time: long
            protected isTimeSet: boolean
            protected areFieldsSet: boolean
            protected constructor()
            protected constructor(arg0: java.util.TimeZone, arg1: java.util.Locale)
            public static getInstance(): java.util.Calendar
            public static getInstance(arg0: java.util.TimeZone): java.util.Calendar
            public static getInstance(arg0: java.util.Locale): java.util.Calendar
            public static getInstance(arg0: java.util.TimeZone, arg1: java.util.Locale): java.util.Calendar
            public static getAvailableLocales(): java.util.Locale[]
            protected abstract computeTime(): void
            protected abstract computeFields(): void
            public getTime(): java.util.Date
            public setTime(arg0: java.util.Date): void
            public getTimeInMillis(): long
            public setTimeInMillis(arg0: long): void
            public get(arg0: int): int
            protected internalGet(arg0: int): int
            public set(arg0: int, arg1: int): void
            public set(arg0: int, arg1: int, arg2: int): void
            public set(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
            public set(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
            public clear(): void
            public clear(arg0: int): void
            public isSet(arg0: int): boolean
            public getDisplayName(arg0: int, arg1: int, arg2: java.util.Locale): string
            public getDisplayNames(arg0: int, arg1: int, arg2: java.util.Locale): java.util.Map<java.lang.String, java.lang.Integer>
            protected complete(): void
            public static getAvailableCalendarTypes(): java.util.Set<java.lang.String>
            public getCalendarType(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public before(arg0: java.lang.Object): boolean
            public after(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.util.Calendar): int
            public abstract add(arg0: int, arg1: int): void
            public abstract roll(arg0: int, arg1: boolean): void
            public roll(arg0: int, arg1: int): void
            public setTimeZone(arg0: java.util.TimeZone): void
            public getTimeZone(): java.util.TimeZone
            public setLenient(arg0: boolean): void
            public isLenient(): boolean
            public setFirstDayOfWeek(arg0: int): void
            public getFirstDayOfWeek(): int
            public setMinimalDaysInFirstWeek(arg0: int): void
            public getMinimalDaysInFirstWeek(): int
            public isWeekDateSupported(): boolean
            public getWeekYear(): int
            public setWeekDate(arg0: int, arg1: int, arg2: int): void
            public getWeeksInWeekYear(): int
            public abstract getMinimum(arg0: int): int
            public abstract getMaximum(arg0: int): int
            public abstract getGreatestMinimum(arg0: int): int
            public abstract getLeastMaximum(arg0: int): int
            public getActualMinimum(arg0: int): int
            public getActualMaximum(arg0: int): int
            public clone(): java.lang.Object
            public toString(): string
            public toInstant(): java.time.Instant
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}