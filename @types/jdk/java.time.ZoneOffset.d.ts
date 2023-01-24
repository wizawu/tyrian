declare namespace java {
  namespace time {
    class ZoneOffset
      extends java.time.ZoneId
      implements
        java.time.temporal.TemporalAccessor,
        java.time.temporal.TemporalAdjuster,
        java.lang.Comparable<java.time.ZoneOffset>,
        java.io.Serializable
    {
      public static readonly UTC: java.time.ZoneOffset
      public static readonly MIN: java.time.ZoneOffset
      public static readonly MAX: java.time.ZoneOffset
      public static of(arg0: java.lang.String | string): java.time.ZoneOffset
      public static ofHours(arg0: number | java.lang.Integer): java.time.ZoneOffset
      public static ofHoursMinutes(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): java.time.ZoneOffset
      public static ofHoursMinutesSeconds(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.time.ZoneOffset
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.ZoneOffset
      public static ofTotalSeconds(arg0: number | java.lang.Integer): java.time.ZoneOffset
      public getTotalSeconds(): number
      public getId(): java.lang.String
      public getRules(): java.time.zone.ZoneRules
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): number
      public getLong(arg0: java.time.temporal.TemporalField): number
      public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$lambda<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public compareTo(arg0: java.time.ZoneOffset): number
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      write(arg0: java.io.DataOutput): void
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.DataInput): java.time.ZoneOffset
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
