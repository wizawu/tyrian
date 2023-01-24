declare namespace java {
  namespace sql {
    class Timestamp extends java.util.Date {
      static readonly serialVersionUID: long
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: number | java.lang.Integer
      )
      public constructor(arg0: number | java.lang.Long)
      public setTime(arg0: number | java.lang.Long): void
      public getTime(): number
      public static valueOf(arg0: java.lang.String | string): java.sql.Timestamp
      public toString(): java.lang.String
      public getNanos(): number
      public setNanos(arg0: number | java.lang.Integer): void
      public equals(arg0: java.sql.Timestamp): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public before(arg0: java.sql.Timestamp): boolean
      public after(arg0: java.sql.Timestamp): boolean
      public compareTo(arg0: java.sql.Timestamp): number
      public compareTo(arg0: java.util.Date): number
      public hashCode(): number
      public static valueOf(arg0: java.time.LocalDateTime): java.sql.Timestamp
      public toLocalDateTime(): java.time.LocalDateTime
      public static from(arg0: java.time.Instant): java.sql.Timestamp
      public toInstant(): java.time.Instant
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
