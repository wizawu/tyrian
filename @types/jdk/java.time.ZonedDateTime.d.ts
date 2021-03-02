declare namespace java {
  namespace time {

    class ZonedDateTime implements java.time.temporal.Temporal, java.time.chrono.ChronoZonedDateTime<java.time.LocalDate>, java.io.Serializable {
      public static now(): java.time.ZonedDateTime
      public static now(arg0: java.time.ZoneId): java.time.ZonedDateTime
      public static now(arg0: java.time.Clock): java.time.ZonedDateTime
      public static of(arg0: java.time.LocalDate, arg1: java.time.LocalTime, arg2: java.time.ZoneId): java.time.ZonedDateTime
      public static of(arg0: java.time.LocalDateTime, arg1: java.time.ZoneId): java.time.ZonedDateTime
      public static of(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: java.time.ZoneId): java.time.ZonedDateTime
      public static ofLocal(arg0: java.time.LocalDateTime, arg1: java.time.ZoneId, arg2: java.time.ZoneOffset): java.time.ZonedDateTime
      public static ofInstant(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.ZonedDateTime
      public static ofInstant(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: java.time.ZoneId): java.time.ZonedDateTime
      public static ofStrict(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: java.time.ZoneId): java.time.ZonedDateTime
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.ZonedDateTime
      public static parse(arg0: java.lang.CharSequence): java.time.ZonedDateTime
      public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.ZonedDateTime
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): number
      public getLong(arg0: java.time.temporal.TemporalField): number
      public getOffset(): java.time.ZoneOffset
      public withEarlierOffsetAtOverlap(): java.time.ZonedDateTime
      public withLaterOffsetAtOverlap(): java.time.ZonedDateTime
      public getZone(): java.time.ZoneId
      public withZoneSameLocal(arg0: java.time.ZoneId): java.time.ZonedDateTime
      public withZoneSameInstant(arg0: java.time.ZoneId): java.time.ZonedDateTime
      public withFixedOffsetZone(): java.time.ZonedDateTime
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
      public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda): java.time.ZonedDateTime
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.ZonedDateTime
      public withYear(arg0: number | java.lang.Integer): java.time.ZonedDateTime
      public withMonth(arg0: number | java.lang.Integer): java.time.ZonedDateTime
      public withDayOfMonth(arg0: number | java.lang.Integer): java.time.ZonedDateTime
      public withDayOfYear(arg0: number | java.lang.Integer): java.time.ZonedDateTime
      public withHour(arg0: number | java.lang.Integer): java.time.ZonedDateTime
      public withMinute(arg0: number | java.lang.Integer): java.time.ZonedDateTime
      public withSecond(arg0: number | java.lang.Integer): java.time.ZonedDateTime
      public withNano(arg0: number | java.lang.Integer): java.time.ZonedDateTime
      public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.ZonedDateTime
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.ZonedDateTime
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.ZonedDateTime
      public plusYears(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public plusMonths(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public plusWeeks(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public plusDays(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public plusHours(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public plusMinutes(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public plusSeconds(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public plusNanos(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.ZonedDateTime
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.ZonedDateTime
      public minusYears(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public minusMonths(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public minusWeeks(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public minusDays(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public minusHours(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public minusMinutes(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public minusSeconds(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public minusNanos(arg0: number | java.lang.Long): java.time.ZonedDateTime
      public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$lambda<R>): R
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): number
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public toOffsetDateTime(): java.time.OffsetDateTime
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.ObjectInput): java.time.ZonedDateTime
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda): java.time.temporal.Temporal
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoZonedDateTime
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoZonedDateTime
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoZonedDateTime
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.chrono.ChronoZonedDateTime
      public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda): java.time.chrono.ChronoZonedDateTime
      public withZoneSameInstant(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime
      public withZoneSameLocal(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime
      public withLaterOffsetAtOverlap(): java.time.chrono.ChronoZonedDateTime
      public withEarlierOffsetAtOverlap(): java.time.chrono.ChronoZonedDateTime
      public toLocalDateTime(): java.time.chrono.ChronoLocalDateTime
      public toLocalDate(): java.time.chrono.ChronoLocalDate
    }

  }
}
