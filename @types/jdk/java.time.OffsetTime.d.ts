declare namespace java {
  namespace time {
    class OffsetTime
      implements
        java.time.temporal.Temporal,
        java.time.temporal.TemporalAdjuster,
        java.lang.Comparable<java.time.OffsetTime>,
        java.io.Serializable
    {
      public static readonly MIN: java.time.OffsetTime
      public static readonly MAX: java.time.OffsetTime
      public static now(): java.time.OffsetTime
      public static now(arg0: java.time.ZoneId): java.time.OffsetTime
      public static now(arg0: java.time.Clock): java.time.OffsetTime
      public static of(arg0: java.time.LocalTime, arg1: java.time.ZoneOffset): java.time.OffsetTime
      public static of(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: java.time.ZoneOffset
      ): java.time.OffsetTime
      public static ofInstant(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.OffsetTime
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.OffsetTime
      public static parse(arg0: string | java.lang.CharSequence): java.time.OffsetTime
      public static parse(
        arg0: string | java.lang.CharSequence,
        arg1: java.time.format.DateTimeFormatter
      ): java.time.OffsetTime
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): number
      public getLong(arg0: java.time.temporal.TemporalField): number
      public getOffset(): java.time.ZoneOffset
      public withOffsetSameLocal(arg0: java.time.ZoneOffset): java.time.OffsetTime
      public withOffsetSameInstant(arg0: java.time.ZoneOffset): java.time.OffsetTime
      public toLocalTime(): java.time.LocalTime
      public getHour(): number
      public getMinute(): number
      public getSecond(): number
      public getNano(): number
      public with(
        arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda
      ): java.time.OffsetTime
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.OffsetTime
      public withHour(arg0: number | java.lang.Integer): java.time.OffsetTime
      public withMinute(arg0: number | java.lang.Integer): java.time.OffsetTime
      public withSecond(arg0: number | java.lang.Integer): java.time.OffsetTime
      public withNano(arg0: number | java.lang.Integer): java.time.OffsetTime
      public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.OffsetTime
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.OffsetTime
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.OffsetTime
      public plusHours(arg0: number | java.lang.Long): java.time.OffsetTime
      public plusMinutes(arg0: number | java.lang.Long): java.time.OffsetTime
      public plusSeconds(arg0: number | java.lang.Long): java.time.OffsetTime
      public plusNanos(arg0: number | java.lang.Long): java.time.OffsetTime
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.OffsetTime
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.OffsetTime
      public minusHours(arg0: number | java.lang.Long): java.time.OffsetTime
      public minusMinutes(arg0: number | java.lang.Long): java.time.OffsetTime
      public minusSeconds(arg0: number | java.lang.Long): java.time.OffsetTime
      public minusNanos(arg0: number | java.lang.Long): java.time.OffsetTime
      public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$lambda<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): number
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public atDate(arg0: java.time.LocalDate): java.time.OffsetDateTime
      public toEpochSecond(arg0: java.time.LocalDate): number
      public compareTo(arg0: java.time.OffsetTime): number
      public isAfter(arg0: java.time.OffsetTime): boolean
      public isBefore(arg0: java.time.OffsetTime): boolean
      public isEqual(arg0: java.time.OffsetTime): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      writeExternal(arg0: java.io.ObjectOutput): void
      static readExternal(arg0: java.io.ObjectInput): java.time.OffsetTime
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.temporal.Temporal
      public with(
        arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda
      ): java.time.temporal.Temporal
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
