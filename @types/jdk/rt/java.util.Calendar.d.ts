declare namespace java {
    namespace util {
abstract class Calendar implements java.io.Serializable , java.lang.Cloneable , java.lang.Comparable<java.util.Calendar> {
    public static ERA: int
    public static YEAR: int
    public static MONTH: int
    public static WEEK_OF_YEAR: int
    public static WEEK_OF_MONTH: int
    public static DATE: int
    public static DAY_OF_MONTH: int
    public static DAY_OF_YEAR: int
    public static DAY_OF_WEEK: int
    public static DAY_OF_WEEK_IN_MONTH: int
    public static AM_PM: int
    public static HOUR: int
    public static HOUR_OF_DAY: int
    public static MINUTE: int
    public static SECOND: int
    public static MILLISECOND: int
    public static ZONE_OFFSET: int
    public static DST_OFFSET: int
    public static FIELD_COUNT: int
    public static SUNDAY: int
    public static MONDAY: int
    public static TUESDAY: int
    public static WEDNESDAY: int
    public static THURSDAY: int
    public static FRIDAY: int
    public static SATURDAY: int
    public static JANUARY: int
    public static FEBRUARY: int
    public static MARCH: int
    public static APRIL: int
    public static MAY: int
    public static JUNE: int
    public static JULY: int
    public static AUGUST: int
    public static SEPTEMBER: int
    public static OCTOBER: int
    public static NOVEMBER: int
    public static DECEMBER: int
    public static UNDECIMBER: int
    public static AM: int
    public static PM: int
    public static ALL_STYLES: int
    public static SHORT: int
    public static LONG: int
    public static NARROW_FORMAT: int
    public static NARROW_STANDALONE: int
    public static SHORT_FORMAT: int
    public static LONG_FORMAT: int
    public static SHORT_STANDALONE: int
    public static LONG_STANDALONE: int
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
    protected computeTime(): void
    protected computeFields(): void
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
    public add(arg0: int, arg1: int): void
    public roll(arg0: int, arg1: boolean): void
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
    public getMinimum(arg0: int): int
    public getMaximum(arg0: int): int
    public getGreatestMinimum(arg0: int): int
    public getLeastMaximum(arg0: int): int
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