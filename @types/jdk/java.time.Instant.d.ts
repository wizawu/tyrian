declare namespace java {
  namespace time {

    class Instant implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.lang.Comparable<java.time.Instant>, java.io.Serializable {
      public static readonly EPOCH: java.time.Instant
      public static readonly MIN: java.time.Instant
      public static readonly MAX: java.time.Instant
      public static now(): java.time.Instant
      public static now(arg0: java.time.Clock): java.time.Instant
      public static ofEpochSecond(arg0: long): java.time.Instant
      public static ofEpochSecond(arg0: long, arg1: long): java.time.Instant
      public static ofEpochMilli(arg0: long): java.time.Instant
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.Instant
      public static parse(arg0: java.lang.CharSequence): java.time.Instant
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): int
      public getLong(arg0: java.time.temporal.TemporalField): long
      public getEpochSecond(): long
      public getNano(): int
      public with(arg0: java.time.temporal.TemporalAdjuster): java.time.Instant
      public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.Instant
      public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.Instant
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.Instant
      public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.Instant
      public plusSeconds(arg0: long): java.time.Instant
      public plusMillis(arg0: long): java.time.Instant
      public plusNanos(arg0: long): java.time.Instant
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.Instant
      public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.Instant
      public minusSeconds(arg0: long): java.time.Instant
      public minusMillis(arg0: long): java.time.Instant
      public minusNanos(arg0: long): java.time.Instant
      public query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
      public atOffset(arg0: java.time.ZoneOffset): java.time.OffsetDateTime
      public atZone(arg0: java.time.ZoneId): java.time.ZonedDateTime
      public toEpochMilli(): long
      public compareTo(arg0: java.time.Instant): int
      public isAfter(arg0: java.time.Instant): boolean
      public isBefore(arg0: java.time.Instant): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.DataInput): java.time.Instant
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
