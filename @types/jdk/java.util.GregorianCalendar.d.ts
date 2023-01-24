declare namespace java {
  namespace util {
    class GregorianCalendar extends java.util.Calendar {
      public static readonly BC: int
      static readonly BCE: int
      public static readonly AD: int
      static readonly CE: int
      static readonly MONTH_LENGTH: int[]
      static readonly LEAP_MONTH_LENGTH: int[]
      static readonly MIN_VALUES: int[]
      static readonly LEAST_MAX_VALUES: int[]
      static readonly MAX_VALUES: int[]
      static readonly serialVersionUID: long
      static readonly DEFAULT_GREGORIAN_CUTOVER: long
      static readonly $assertionsDisabled: boolean
      public constructor()
      public constructor(arg0: java.util.TimeZone)
      public constructor(arg0: java.util.Locale)
      public constructor(arg0: java.util.TimeZone, arg1: java.util.Locale)
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      )
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      )
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer
      )
      constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: number | java.lang.Integer
      )
      constructor(arg0: java.util.TimeZone, arg1: java.util.Locale, arg2: boolean | java.lang.Boolean)
      public setGregorianChange(arg0: java.util.Date): void
      public getGregorianChange(): java.util.Date
      public isLeapYear(arg0: number | java.lang.Integer): boolean
      public getCalendarType(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public add(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public roll(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      public roll(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public getMinimum(arg0: number | java.lang.Integer): number
      public getMaximum(arg0: number | java.lang.Integer): number
      public getGreatestMinimum(arg0: number | java.lang.Integer): number
      public getLeastMaximum(arg0: number | java.lang.Integer): number
      public getActualMinimum(arg0: number | java.lang.Integer): number
      public getActualMaximum(arg0: number | java.lang.Integer): number
      public clone(): java.lang.Object
      public getTimeZone(): java.util.TimeZone
      public setTimeZone(arg0: java.util.TimeZone): void
      public isWeekDateSupported(): boolean
      public getWeekYear(): number
      public setWeekDate(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public getWeeksInWeekYear(): number
      protected computeFields(): void
      protected computeTime(): void
      public toZonedDateTime(): java.time.ZonedDateTime
      public static from(arg0: java.time.ZonedDateTime): java.util.GregorianCalendar
    }
  }
}
