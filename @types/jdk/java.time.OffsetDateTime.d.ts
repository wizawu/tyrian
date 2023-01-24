declare namespace java {
  namespace time {
    class OffsetDateTime
      implements
        java.time.temporal.Temporal,
        java.time.temporal.TemporalAdjuster,
        java.lang.Comparable<java.time.OffsetDateTime>,
        java.io.Serializable
    {
      public static readonly MIN: java.time.OffsetDateTime
      public static readonly MAX: java.time.OffsetDateTime
      public static timeLineOrder(): java.util.Comparator<java.time.OffsetDateTime>
      public static now(): java.time.OffsetDateTime
      public static now(arg0: java.time.ZoneId): java.time.OffsetDateTime
      public static now(arg0: java.time.Clock): java.time.OffsetDateTime
      public static of(
        arg0: java.time.LocalDate,
        arg1: java.time.LocalTime,
        arg2: java.time.ZoneOffset
      ): java.time.OffsetDateTime
      public static of(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset): java.time.OffsetDateTime
      public static of(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer,
        arg5: number | java.lang.Integer,
        arg6: number | java.lang.Integer,
        arg7: java.time.ZoneOffset
      ): java.time.OffsetDateTime
      public static ofInstant(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.OffsetDateTime
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.OffsetDateTime
      public static parse(arg0: string | java.lang.CharSequence): java.time.OffsetDateTime
      public static parse(
        arg0: string | java.lang.CharSequence,
        arg1: java.time.format.DateTimeFormatter
      ): java.time.OffsetDateTime
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): number
      public getLong(arg0: java.time.temporal.TemporalField): number
      public getOffset(): java.time.ZoneOffset
      public withOffsetSameLocal(arg0: java.time.ZoneOffset): java.time.OffsetDateTime
      public withOffsetSameInstant(arg0: java.time.ZoneOffset): java.time.OffsetDateTime
      public toLocalDateTime(): java.time.LocalDateTime
      public toLocalDate(): java.time.LocalDate
      public getYear(): number
      public getMonthValue(): number
      public getMonth(): java.time.Month
      public getDayOfMonth(): number
      public getDayOfYear(): number
      public getDayOfWeek(): java.time.DayOfWeek
      public toLocalTime(): java.time.LocalTime
      public getHour(): number
      public getMinute(): number
      public getSecond(): number
      public getNano(): number
      public with(
        arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda
      ): java.time.OffsetDateTime
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.OffsetDateTime
      public withYear(arg0: number | java.lang.Integer): java.time.OffsetDateTime
      public withMonth(arg0: number | java.lang.Integer): java.time.OffsetDateTime
      public withDayOfMonth(arg0: number | java.lang.Integer): java.time.OffsetDateTime
      public withDayOfYear(arg0: number | java.lang.Integer): java.time.OffsetDateTime
      public withHour(arg0: number | java.lang.Integer): java.time.OffsetDateTime
      public withMinute(arg0: number | java.lang.Integer): java.time.OffsetDateTime
      public withSecond(arg0: number | java.lang.Integer): java.time.OffsetDateTime
      public withNano(arg0: number | java.lang.Integer): java.time.OffsetDateTime
      public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.OffsetDateTime
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.OffsetDateTime
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.OffsetDateTime
      public plusYears(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public plusMonths(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public plusWeeks(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public plusDays(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public plusHours(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public plusMinutes(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public plusSeconds(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public plusNanos(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.OffsetDateTime
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.OffsetDateTime
      public minusYears(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public minusMonths(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public minusWeeks(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public minusDays(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public minusHours(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public minusMinutes(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public minusSeconds(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public minusNanos(arg0: number | java.lang.Long): java.time.OffsetDateTime
      public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$lambda<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): number
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public atZoneSameInstant(arg0: java.time.ZoneId): java.time.ZonedDateTime
      public atZoneSimilarLocal(arg0: java.time.ZoneId): java.time.ZonedDateTime
      public toOffsetTime(): java.time.OffsetTime
      public toZonedDateTime(): java.time.ZonedDateTime
      public toInstant(): java.time.Instant
      public toEpochSecond(): number
      public compareTo(arg0: java.time.OffsetDateTime): number
      public isAfter(arg0: java.time.OffsetDateTime): boolean
      public isBefore(arg0: java.time.OffsetDateTime): boolean
      public isEqual(arg0: java.time.OffsetDateTime): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      writeExternal(arg0: java.io.ObjectOutput): void
      static readExternal(arg0: java.io.ObjectInput): java.time.OffsetDateTime
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
