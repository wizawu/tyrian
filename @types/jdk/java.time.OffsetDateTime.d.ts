declare namespace java {
  namespace time {

    class OffsetDateTime implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.OffsetDateTime>, java.io.Serializable {
      public static readonly MIN: java.time.OffsetDateTime
      public static readonly MAX: java.time.OffsetDateTime
      public static timeLineOrder(): java.util.Comparator<java.time.OffsetDateTime>
      public static now(): java.time.OffsetDateTime
      public static now(arg0: java.time.ZoneId): java.time.OffsetDateTime
      public static now(arg0: java.time.Clock): java.time.OffsetDateTime
      public static of(arg0: java.time.LocalDate, arg1: java.time.LocalTime, arg2: java.time.ZoneOffset): java.time.OffsetDateTime
      public static of(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset): java.time.OffsetDateTime
      public static of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int, arg7: java.time.ZoneOffset): java.time.OffsetDateTime
      public static ofInstant(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.OffsetDateTime
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.OffsetDateTime
      public static parse(arg0: java.lang.CharSequence): java.time.OffsetDateTime
      public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.OffsetDateTime
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): int
      public getLong(arg0: java.time.temporal.TemporalField): long
      public getOffset(): java.time.ZoneOffset
      public withOffsetSameLocal(arg0: java.time.ZoneOffset): java.time.OffsetDateTime
      public withOffsetSameInstant(arg0: java.time.ZoneOffset): java.time.OffsetDateTime
      public toLocalDateTime(): java.time.LocalDateTime
      public toLocalDate(): java.time.LocalDate
      public getYear(): int
      public getMonthValue(): int
      public getMonth(): java.time.Month
      public getDayOfMonth(): int
      public getDayOfYear(): int
      public getDayOfWeek(): java.time.DayOfWeek
      public toLocalTime(): java.time.LocalTime
      public getHour(): int
      public getMinute(): int
      public getSecond(): int
      public getNano(): int
      public with(arg0: java.time.temporal.TemporalAdjuster): java.time.OffsetDateTime
      public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.OffsetDateTime
      public withYear(arg0: int): java.time.OffsetDateTime
      public withMonth(arg0: int): java.time.OffsetDateTime
      public withDayOfMonth(arg0: int): java.time.OffsetDateTime
      public withDayOfYear(arg0: int): java.time.OffsetDateTime
      public withHour(arg0: int): java.time.OffsetDateTime
      public withMinute(arg0: int): java.time.OffsetDateTime
      public withSecond(arg0: int): java.time.OffsetDateTime
      public withNano(arg0: int): java.time.OffsetDateTime
      public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.OffsetDateTime
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.OffsetDateTime
      public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.OffsetDateTime
      public plusYears(arg0: long): java.time.OffsetDateTime
      public plusMonths(arg0: long): java.time.OffsetDateTime
      public plusWeeks(arg0: long): java.time.OffsetDateTime
      public plusDays(arg0: long): java.time.OffsetDateTime
      public plusHours(arg0: long): java.time.OffsetDateTime
      public plusMinutes(arg0: long): java.time.OffsetDateTime
      public plusSeconds(arg0: long): java.time.OffsetDateTime
      public plusNanos(arg0: long): java.time.OffsetDateTime
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.OffsetDateTime
      public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.OffsetDateTime
      public minusYears(arg0: long): java.time.OffsetDateTime
      public minusMonths(arg0: long): java.time.OffsetDateTime
      public minusWeeks(arg0: long): java.time.OffsetDateTime
      public minusDays(arg0: long): java.time.OffsetDateTime
      public minusHours(arg0: long): java.time.OffsetDateTime
      public minusMinutes(arg0: long): java.time.OffsetDateTime
      public minusSeconds(arg0: long): java.time.OffsetDateTime
      public minusNanos(arg0: long): java.time.OffsetDateTime
      public query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public atZoneSameInstant(arg0: java.time.ZoneId): java.time.ZonedDateTime
      public atZoneSimilarLocal(arg0: java.time.ZoneId): java.time.ZonedDateTime
      public toOffsetTime(): java.time.OffsetTime
      public toZonedDateTime(): java.time.ZonedDateTime
      public toInstant(): java.time.Instant
      public toEpochSecond(): long
      public compareTo(arg0: java.time.OffsetDateTime): int
      public isAfter(arg0: java.time.OffsetDateTime): boolean
      public isBefore(arg0: java.time.OffsetDateTime): boolean
      public isEqual(arg0: java.time.OffsetDateTime): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      writeExternal(arg0: java.io.ObjectOutput): void
      static readExternal(arg0: java.io.ObjectInput): java.time.OffsetDateTime
      public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalAdjuster): java.time.temporal.Temporal
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
