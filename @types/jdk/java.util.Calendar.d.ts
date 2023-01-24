declare namespace java {
  namespace util {
    abstract class Calendar
      implements java.io.Serializable, java.lang.Cloneable, java.lang.Comparable<java.util.Calendar>
    {
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
      static readonly STANDALONE_MASK: int
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
      areAllFieldsSet: boolean
      static readonly ALL_FIELDS: int
      static readonly currentSerialVersion: int
      static readonly serialVersionUID: long
      static readonly ERA_MASK: int
      static readonly YEAR_MASK: int
      static readonly MONTH_MASK: int
      static readonly WEEK_OF_YEAR_MASK: int
      static readonly WEEK_OF_MONTH_MASK: int
      static readonly DAY_OF_MONTH_MASK: int
      static readonly DATE_MASK: int
      static readonly DAY_OF_YEAR_MASK: int
      static readonly DAY_OF_WEEK_MASK: int
      static readonly DAY_OF_WEEK_IN_MONTH_MASK: int
      static readonly AM_PM_MASK: int
      static readonly HOUR_MASK: int
      static readonly HOUR_OF_DAY_MASK: int
      static readonly MINUTE_MASK: int
      static readonly SECOND_MASK: int
      static readonly MILLISECOND_MASK: int
      static readonly ZONE_OFFSET_MASK: int
      static readonly DST_OFFSET_MASK: int
      static readonly $assertionsDisabled: boolean
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
      public getTimeInMillis(): number
      public setTimeInMillis(arg0: number | java.lang.Long): void
      public get(arg0: number | java.lang.Integer): number
      protected internalGet(arg0: number | java.lang.Integer): number
      internalSet(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public set(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public set(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public set(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      ): void
      public set(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      ): void
      public clear(): void
      public clear(arg0: number | java.lang.Integer): void
      public isSet(arg0: number | java.lang.Integer): boolean
      public getDisplayName(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: java.util.Locale
      ): java.lang.String
      public getDisplayNames(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: java.util.Locale
      ): java.util.Map<java.lang.String, java.lang.Integer>
      checkDisplayNameParams(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: java.util.Locale,
        arg5: number | java.lang.Integer
      ): boolean
      protected complete(): void
      isExternallySet(arg0: number | java.lang.Integer): boolean
      getSetStateFields(): number
      setFieldsComputed(arg0: number | java.lang.Integer): void
      setFieldsNormalized(arg0: number | java.lang.Integer): void
      isPartiallyNormalized(): boolean
      isFullyNormalized(): boolean
      setUnnormalized(): void
      static isFieldSet(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      selectFields(): number
      getBaseStyle(arg0: number | java.lang.Integer): number
      public static getAvailableCalendarTypes(): java.util.Set<java.lang.String>
      public getCalendarType(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public before(arg0: java.lang.Object | any): boolean
      public after(arg0: java.lang.Object | any): boolean
      public compareTo(arg0: java.util.Calendar): number
      public abstract add(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public abstract roll(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      public roll(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public setTimeZone(arg0: java.util.TimeZone): void
      public getTimeZone(): java.util.TimeZone
      getZone(): java.util.TimeZone
      setZoneShared(arg0: boolean | java.lang.Boolean): void
      public setLenient(arg0: boolean | java.lang.Boolean): void
      public isLenient(): boolean
      public setFirstDayOfWeek(arg0: number | java.lang.Integer): void
      public getFirstDayOfWeek(): number
      public setMinimalDaysInFirstWeek(arg0: number | java.lang.Integer): void
      public getMinimalDaysInFirstWeek(): number
      public isWeekDateSupported(): boolean
      public getWeekYear(): number
      public setWeekDate(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public getWeeksInWeekYear(): number
      public abstract getMinimum(arg0: number | java.lang.Integer): number
      public abstract getMaximum(arg0: number | java.lang.Integer): number
      public abstract getGreatestMinimum(arg0: number | java.lang.Integer): number
      public abstract getLeastMaximum(arg0: number | java.lang.Integer): number
      public getActualMinimum(arg0: number | java.lang.Integer): number
      public getActualMaximum(arg0: number | java.lang.Integer): number
      public clone(): java.lang.Object
      static getFieldName(arg0: number | java.lang.Integer): java.lang.String
      public toString(): java.lang.String
      public toInstant(): java.time.Instant
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
