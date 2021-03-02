declare namespace java {
  namespace time {

    class OffsetTime implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.OffsetTime>, java.io.Serializable {
      public static readonly MIN: java.time.OffsetTime
      public static readonly MAX: java.time.OffsetTime
      public static now(): java.time.OffsetTime
      public static now(arg0: java.time.ZoneId): java.time.OffsetTime
      public static now(arg0: java.time.Clock): java.time.OffsetTime
      public static of(arg0: java.time.LocalTime, arg1: java.time.ZoneOffset): java.time.OffsetTime
      public static of(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.time.ZoneOffset): java.time.OffsetTime
      public static ofInstant(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.OffsetTime
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.OffsetTime
      public static parse(arg0: java.lang.CharSequence): java.time.OffsetTime
      public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.OffsetTime
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): int
      public getLong(arg0: java.time.temporal.TemporalField): long
      public getOffset(): java.time.ZoneOffset
      public withOffsetSameLocal(arg0: java.time.ZoneOffset): java.time.OffsetTime
      public withOffsetSameInstant(arg0: java.time.ZoneOffset): java.time.OffsetTime
      public toLocalTime(): java.time.LocalTime
      public getHour(): int
      public getMinute(): int
      public getSecond(): int
      public getNano(): int
      public with(arg0: java.time.temporal.TemporalAdjuster): java.time.OffsetTime
      public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.OffsetTime
      public withHour(arg0: int): java.time.OffsetTime
      public withMinute(arg0: int): java.time.OffsetTime
      public withSecond(arg0: int): java.time.OffsetTime
      public withNano(arg0: int): java.time.OffsetTime
      public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.OffsetTime
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.OffsetTime
      public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.OffsetTime
      public plusHours(arg0: long): java.time.OffsetTime
      public plusMinutes(arg0: long): java.time.OffsetTime
      public plusSeconds(arg0: long): java.time.OffsetTime
      public plusNanos(arg0: long): java.time.OffsetTime
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.OffsetTime
      public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.OffsetTime
      public minusHours(arg0: long): java.time.OffsetTime
      public minusMinutes(arg0: long): java.time.OffsetTime
      public minusSeconds(arg0: long): java.time.OffsetTime
      public minusNanos(arg0: long): java.time.OffsetTime
      public query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public atDate(arg0: java.time.LocalDate): java.time.OffsetDateTime
      public toEpochSecond(arg0: java.time.LocalDate): long
      public compareTo(arg0: java.time.OffsetTime): int
      public isAfter(arg0: java.time.OffsetTime): boolean
      public isBefore(arg0: java.time.OffsetTime): boolean
      public isEqual(arg0: java.time.OffsetTime): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      writeExternal(arg0: java.io.ObjectOutput): void
      static readExternal(arg0: java.io.ObjectInput): java.time.OffsetTime
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
