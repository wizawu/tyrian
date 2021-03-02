declare namespace java {
  namespace time {

    class Month extends java.lang.Enum<java.time.Month> implements java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster {
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
      public static valueOf(arg0: java.lang.String): java.time.Month
      public static of(arg0: int): java.time.Month
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.Month
      public getValue(): int
      public getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): java.lang.String
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): int
      public getLong(arg0: java.time.temporal.TemporalField): long
      public plus(arg0: long): java.time.Month
      public minus(arg0: long): java.time.Month
      public length(arg0: boolean): int
      public minLength(): int
      public maxLength(): int
      public firstDayOfYear(arg0: boolean): int
      public firstMonthOfQuarter(): java.time.Month
      public query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
    }

  }
}
