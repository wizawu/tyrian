declare namespace java {
  namespace time {

    class Year implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.Year>, java.io.Serializable {
      public static readonly MIN_VALUE: int
      public static readonly MAX_VALUE: int
      public static now(): java.time.Year
      public static now(arg0: java.time.ZoneId): java.time.Year
      public static now(arg0: java.time.Clock): java.time.Year
      public static of(arg0: number | java.lang.Integer): java.time.Year
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.Year
      public static parse(arg0: java.lang.CharSequence): java.time.Year
      public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.Year
      public static isLeap(arg0: number | java.lang.Long): boolean
      public getValue(): number
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): number
      public getLong(arg0: java.time.temporal.TemporalField): number
      public isLeap(): boolean
      public isValidMonthDay(arg0: java.time.MonthDay): boolean
      public length(): number
      public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda): java.time.Year
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.Year
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.Year
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.Year
      public plusYears(arg0: number | java.lang.Long): java.time.Year
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.Year
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.Year
      public minusYears(arg0: number | java.lang.Long): java.time.Year
      public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$lambda<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): number
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public atDay(arg0: number | java.lang.Integer): java.time.LocalDate
      public atMonth(arg0: java.time.Month): java.time.YearMonth
      public atMonth(arg0: number | java.lang.Integer): java.time.YearMonth
      public atMonthDay(arg0: java.time.MonthDay): java.time.LocalDate
      public compareTo(arg0: java.time.Year): number
      public isAfter(arg0: java.time.Year): boolean
      public isBefore(arg0: java.time.Year): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.DataInput): java.time.Year
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda): java.time.temporal.Temporal
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
