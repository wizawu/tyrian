declare namespace java {
  namespace time {

    class MonthDay implements java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.MonthDay>, java.io.Serializable {
      public static now(): java.time.MonthDay
      public static now(arg0: java.time.ZoneId): java.time.MonthDay
      public static now(arg0: java.time.Clock): java.time.MonthDay
      public static of(arg0: java.time.Month, arg1: int): java.time.MonthDay
      public static of(arg0: int, arg1: int): java.time.MonthDay
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.MonthDay
      public static parse(arg0: java.lang.CharSequence): java.time.MonthDay
      public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.MonthDay
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): int
      public getLong(arg0: java.time.temporal.TemporalField): long
      public getMonthValue(): int
      public getMonth(): java.time.Month
      public getDayOfMonth(): int
      public isValidYear(arg0: int): boolean
      public withMonth(arg0: int): java.time.MonthDay
      public with(arg0: java.time.Month): java.time.MonthDay
      public withDayOfMonth(arg0: int): java.time.MonthDay
      public query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public atYear(arg0: int): java.time.LocalDate
      public compareTo(arg0: java.time.MonthDay): int
      public isAfter(arg0: java.time.MonthDay): boolean
      public isBefore(arg0: java.time.MonthDay): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.DataInput): java.time.MonthDay
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
