declare namespace java {
  namespace time {
    class Month
      extends java.lang.Enum<java.time.Month>
      implements java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster
    {
      public static readonly JANUARY: java.time.Month
      public static readonly FEBRUARY: java.time.Month
      public static readonly MARCH: java.time.Month
      public static readonly APRIL: java.time.Month
      public static readonly MAY: java.time.Month
      public static readonly JUNE: java.time.Month
      public static readonly JULY: java.time.Month
      public static readonly AUGUST: java.time.Month
      public static readonly SEPTEMBER: java.time.Month
      public static readonly OCTOBER: java.time.Month
      public static readonly NOVEMBER: java.time.Month
      public static readonly DECEMBER: java.time.Month
      public static values(): java.time.Month[]
      public static valueOf(arg0: java.lang.String | string): java.time.Month
      public static of(arg0: number | java.lang.Integer): java.time.Month
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.Month
      public getValue(): number
      public getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): java.lang.String
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): number
      public getLong(arg0: java.time.temporal.TemporalField): number
      public plus(arg0: number | java.lang.Long): java.time.Month
      public minus(arg0: number | java.lang.Long): java.time.Month
      public length(arg0: boolean | java.lang.Boolean): number
      public minLength(): number
      public maxLength(): number
      public firstDayOfYear(arg0: boolean | java.lang.Boolean): number
      public firstMonthOfQuarter(): java.time.Month
      public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$lambda<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
    }
  }
}
