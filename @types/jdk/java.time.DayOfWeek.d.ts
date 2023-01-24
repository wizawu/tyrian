declare namespace java {
  namespace time {
    class DayOfWeek
      extends java.lang.Enum<java.time.DayOfWeek>
      implements java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster
    {
      public static readonly MONDAY: java.time.DayOfWeek
      public static readonly TUESDAY: java.time.DayOfWeek
      public static readonly WEDNESDAY: java.time.DayOfWeek
      public static readonly THURSDAY: java.time.DayOfWeek
      public static readonly FRIDAY: java.time.DayOfWeek
      public static readonly SATURDAY: java.time.DayOfWeek
      public static readonly SUNDAY: java.time.DayOfWeek
      public static values(): java.time.DayOfWeek[]
      public static valueOf(arg0: java.lang.String | string): java.time.DayOfWeek
      public static of(arg0: number | java.lang.Integer): java.time.DayOfWeek
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.DayOfWeek
      public getValue(): number
      public getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): java.lang.String
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): number
      public getLong(arg0: java.time.temporal.TemporalField): number
      public plus(arg0: number | java.lang.Long): java.time.DayOfWeek
      public minus(arg0: number | java.lang.Long): java.time.DayOfWeek
      public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$lambda<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
    }
  }
}
