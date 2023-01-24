declare namespace java {
  namespace sql {
    class Time extends java.util.Date {
      static readonly serialVersionUID: long
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      )
      public constructor(arg0: number | java.lang.Long)
      public setTime(arg0: number | java.lang.Long): void
      public static valueOf(arg0: java.lang.String | string): java.sql.Time
      public toString(): java.lang.String
      public getYear(): number
      public getMonth(): number
      public getDay(): number
      public getDate(): number
      public setYear(arg0: number | java.lang.Integer): void
      public setMonth(arg0: number | java.lang.Integer): void
      public setDate(arg0: number | java.lang.Integer): void
      public static valueOf(arg0: java.time.LocalTime): java.sql.Time
      public toLocalTime(): java.time.LocalTime
      public toInstant(): java.time.Instant
    }
  }
}
