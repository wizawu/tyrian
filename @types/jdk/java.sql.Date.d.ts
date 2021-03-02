declare namespace java {
  namespace sql {

    class Date extends java.util.Date {
      static readonly serialVersionUID: long
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Long)
      public setTime(arg0: number | java.lang.Long): void
      public static valueOf(arg0: java.lang.String | string): java.sql.Date
      public toString(): java.lang.String
      static formatDecimalInt(arg0: number | java.lang.Integer, arg1: char[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public getHours(): number
      public getMinutes(): number
      public getSeconds(): number
      public setHours(arg0: number | java.lang.Integer): void
      public setMinutes(arg0: number | java.lang.Integer): void
      public setSeconds(arg0: number | java.lang.Integer): void
      public static valueOf(arg0: java.time.LocalDate): java.sql.Date
      public toLocalDate(): java.time.LocalDate
      public toInstant(): java.time.Instant
    }

  }
}
