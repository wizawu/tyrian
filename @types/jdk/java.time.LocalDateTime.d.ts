declare namespace java {
  namespace time {

    class LocalDateTime implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.time.chrono.ChronoLocalDateTime<java.time.LocalDate>, java.io.Serializable {
      public static readonly MIN: java.time.LocalDateTime
      public static readonly MAX: java.time.LocalDateTime
      public static now(): java.time.LocalDateTime
      public static now(arg0: java.time.ZoneId): java.time.LocalDateTime
      public static now(arg0: java.time.Clock): java.time.LocalDateTime
      public static of(arg0: number | java.lang.Integer, arg1: java.time.Month, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): java.time.LocalDateTime
      public static of(arg0: number | java.lang.Integer, arg1: java.time.Month, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): java.time.LocalDateTime
      public static of(arg0: number | java.lang.Integer, arg1: java.time.Month, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): java.time.LocalDateTime
      public static of(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): java.time.LocalDateTime
      public static of(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): java.time.LocalDateTime
      public static of(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer): java.time.LocalDateTime
      public static of(arg0: java.time.LocalDate, arg1: java.time.LocalTime): java.time.LocalDateTime
      public static ofInstant(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.LocalDateTime
      public static ofEpochSecond(arg0: number | java.lang.Long, arg1: number | java.lang.Integer, arg2: java.time.ZoneOffset): java.time.LocalDateTime
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.LocalDateTime
      public static parse(arg0: java.lang.CharSequence): java.time.LocalDateTime
      public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.LocalDateTime
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): number
      public getLong(arg0: java.time.temporal.TemporalField): number
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
      public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda): java.time.LocalDateTime
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.LocalDateTime
      public withYear(arg0: number | java.lang.Integer): java.time.LocalDateTime
      public withMonth(arg0: number | java.lang.Integer): java.time.LocalDateTime
      public withDayOfMonth(arg0: number | java.lang.Integer): java.time.LocalDateTime
      public withDayOfYear(arg0: number | java.lang.Integer): java.time.LocalDateTime
      public withHour(arg0: number | java.lang.Integer): java.time.LocalDateTime
      public withMinute(arg0: number | java.lang.Integer): java.time.LocalDateTime
      public withSecond(arg0: number | java.lang.Integer): java.time.LocalDateTime
      public withNano(arg0: number | java.lang.Integer): java.time.LocalDateTime
      public truncatedTo(arg0: java.time.temporal.TemporalUnit): java.time.LocalDateTime
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.LocalDateTime
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.LocalDateTime
      public plusYears(arg0: number | java.lang.Long): java.time.LocalDateTime
      public plusMonths(arg0: number | java.lang.Long): java.time.LocalDateTime
      public plusWeeks(arg0: number | java.lang.Long): java.time.LocalDateTime
      public plusDays(arg0: number | java.lang.Long): java.time.LocalDateTime
      public plusHours(arg0: number | java.lang.Long): java.time.LocalDateTime
      public plusMinutes(arg0: number | java.lang.Long): java.time.LocalDateTime
      public plusSeconds(arg0: number | java.lang.Long): java.time.LocalDateTime
      public plusNanos(arg0: number | java.lang.Long): java.time.LocalDateTime
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.LocalDateTime
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.LocalDateTime
      public minusYears(arg0: number | java.lang.Long): java.time.LocalDateTime
      public minusMonths(arg0: number | java.lang.Long): java.time.LocalDateTime
      public minusWeeks(arg0: number | java.lang.Long): java.time.LocalDateTime
      public minusDays(arg0: number | java.lang.Long): java.time.LocalDateTime
      public minusHours(arg0: number | java.lang.Long): java.time.LocalDateTime
      public minusMinutes(arg0: number | java.lang.Long): java.time.LocalDateTime
      public minusSeconds(arg0: number | java.lang.Long): java.time.LocalDateTime
      public minusNanos(arg0: number | java.lang.Long): java.time.LocalDateTime
      public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$lambda<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): number
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public atOffset(arg0: java.time.ZoneOffset): java.time.OffsetDateTime
      public atZone(arg0: java.time.ZoneId): java.time.ZonedDateTime
      public compareTo(arg0: java.time.chrono.ChronoLocalDateTime<unknown>): number
      public isAfter(arg0: java.time.chrono.ChronoLocalDateTime<unknown>): boolean
      public isBefore(arg0: java.time.chrono.ChronoLocalDateTime<unknown>): boolean
      public isEqual(arg0: java.time.chrono.ChronoLocalDateTime<unknown>): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.DataInput): java.time.LocalDateTime
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda): java.time.temporal.Temporal
      public atZone(arg0: java.time.ZoneId): java.time.chrono.ChronoZonedDateTime
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTime
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDateTime
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDateTime
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDateTime
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.chrono.ChronoLocalDateTime
      public with(arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda): java.time.chrono.ChronoLocalDateTime
      public toLocalDate(): java.time.chrono.ChronoLocalDate
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
