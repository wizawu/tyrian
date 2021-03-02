declare namespace java {
  namespace sql {

    class Time extends java.util.Date {
      static readonly serialVersionUID: long
      public constructor(arg0: int, arg1: int, arg2: int)
      public constructor(arg0: long)
      public setTime(arg0: long): void
      public static valueOf(arg0: java.lang.String): java.sql.Time
      public toString(): java.lang.String
      public getYear(): int
      public getMonth(): int
      public getDay(): int
      public getDate(): int
      public setYear(arg0: int): void
      public setMonth(arg0: int): void
      public setDate(arg0: int): void
      public static valueOf(arg0: java.time.LocalTime): java.sql.Time
      public toLocalTime(): java.time.LocalTime
      public toInstant(): java.time.Instant
    }

  }
}
