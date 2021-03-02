declare namespace java {
  namespace time {

    class LocalTime implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.LocalTime>, java.io.Serializable {
      public static readonly MIN: java.time.LocalTime
      public static readonly MAX: java.time.LocalTime
      public static readonly MIDNIGHT: java.time.LocalTime
      public static readonly NOON: java.time.LocalTime
      static readonly HOURS_PER_DAY: int
      static readonly MINUTES_PER_HOUR: int
      static readonly MINUTES_PER_DAY: int
      static readonly SECONDS_PER_MINUTE: int
      static readonly SECONDS_PER_HOUR: int
      static readonly SECONDS_PER_DAY: int
      static readonly MILLIS_PER_DAY: long
      static readonly MICROS_PER_DAY: long
      static readonly NANOS_PER_MILLI: long
      static readonly NANOS_PER_SECOND: long
      static readonly NANOS_PER_MINUTE: long
      static readonly NANOS_PER_HOUR: long
      static readonly NANOS_PER_DAY: long
      public static now(): java.time.LocalTime
      public static now(arg0: java.time.ZoneId): java.time.LocalTime
      public static now(arg0: java.time.Clock): java.time.LocalTime
      public static of(arg0: int, arg1: int): java.time.LocalTime
      public static of(arg0: int, arg1: int, arg2: int): java.time.LocalTime
      public static of(arg0: int, arg1: int, arg2: int, arg3: int): java.time.LocalTime
      public static ofInstant(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.LocalTime
      public static ofSecondOfDay(arg0: long): java.time.LocalTime
      public static ofNanoOfDay(arg0: long): java.time.LocalTime
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.LocalTime
      public static parse(arg0: java.lang.CharSequence): java.time.LocalTime
      public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.LocalTime
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): int
      public getLong(arg0: java.time.temporal.TemporalField): long
      public getHour(): int
      public getMinute(): int
      public getSecond(): int
      public getNano(): int
      public with(arg0: java.time.temporal.TemporalAdjuster): java.time.LocalTime
      public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.LocalTime
      public withHour(arg0: int): java.time.LocalTime
      public withMinute(arg0: int): java.time.LocalTime
      public withSecond(arg0: int): java.time.LocalTime
      public withNano(arg0: int): java.time.LocalTime
      public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.LocalTime
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.LocalTime
      public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.LocalTime
      public plusHours(arg0: long): java.time.LocalTime
      public plusMinutes(arg0: long): java.time.LocalTime
      public plusSeconds(arg0: long): java.time.LocalTime
      public plusNanos(arg0: long): java.time.LocalTime
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.LocalTime
      public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.LocalTime
      public minusHours(arg0: long): java.time.LocalTime
      public minusMinutes(arg0: long): java.time.LocalTime
      public minusSeconds(arg0: long): java.time.LocalTime
      public minusNanos(arg0: long): java.time.LocalTime
      public query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public atDate(arg0: java.time.LocalDate): java.time.LocalDateTime
      public atOffset(arg0: java.time.ZoneOffset): java.time.OffsetTime
      public toSecondOfDay(): int
      public toNanoOfDay(): long
      public toEpochSecond(arg0: java.time.LocalDate, arg1: java.time.ZoneOffset): long
      public compareTo(arg0: java.time.LocalTime): int
      public isAfter(arg0: java.time.LocalTime): boolean
      public isBefore(arg0: java.time.LocalTime): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.DataInput): java.time.LocalTime
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
