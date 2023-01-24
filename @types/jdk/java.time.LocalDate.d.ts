declare namespace java {
  namespace time {
    class LocalDate
      implements
        java.time.temporal.Temporal,
        java.time.temporal.TemporalAdjuster,
        java.time.chrono.ChronoLocalDate,
        java.io.Serializable
    {
      public static readonly MIN: java.time.LocalDate
      public static readonly MAX: java.time.LocalDate
      public static readonly EPOCH: java.time.LocalDate
      static readonly DAYS_0000_TO_1970: long
      public static now(): java.time.LocalDate
      public static now(arg0: java.time.ZoneId): java.time.LocalDate
      public static now(arg0: java.time.Clock): java.time.LocalDate
      public static of(
        arg0: number | java.lang.Integer,
        arg1: java.time.Month,
        arg2: number | java.lang.Integer
      ): java.time.LocalDate
      public static of(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.time.LocalDate
      public static ofYearDay(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.time.LocalDate
      public static ofInstant(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.LocalDate
      public static ofEpochDay(arg0: number | java.lang.Long): java.time.LocalDate
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.LocalDate
      public static parse(arg0: string | java.lang.CharSequence): java.time.LocalDate
      public static parse(
        arg0: string | java.lang.CharSequence,
        arg1: java.time.format.DateTimeFormatter
      ): java.time.LocalDate
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): number
      public getLong(arg0: java.time.temporal.TemporalField): number
      public getChronology(): java.time.chrono.IsoChronology
      public getEra(): java.time.chrono.IsoEra
      public getYear(): number
      public getMonthValue(): number
      public getMonth(): java.time.Month
      public getDayOfMonth(): number
      public getDayOfYear(): number
      public getDayOfWeek(): java.time.DayOfWeek
      public isLeapYear(): boolean
      public lengthOfMonth(): number
      public lengthOfYear(): number
      public with(
        arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda
      ): java.time.LocalDate
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.LocalDate
      public withYear(arg0: number | java.lang.Integer): java.time.LocalDate
      public withMonth(arg0: number | java.lang.Integer): java.time.LocalDate
      public withDayOfMonth(arg0: number | java.lang.Integer): java.time.LocalDate
      public withDayOfYear(arg0: number | java.lang.Integer): java.time.LocalDate
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.LocalDate
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.LocalDate
      public plusYears(arg0: number | java.lang.Long): java.time.LocalDate
      public plusMonths(arg0: number | java.lang.Long): java.time.LocalDate
      public plusWeeks(arg0: number | java.lang.Long): java.time.LocalDate
      public plusDays(arg0: number | java.lang.Long): java.time.LocalDate
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.LocalDate
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.LocalDate
      public minusYears(arg0: number | java.lang.Long): java.time.LocalDate
      public minusMonths(arg0: number | java.lang.Long): java.time.LocalDate
      public minusWeeks(arg0: number | java.lang.Long): java.time.LocalDate
      public minusDays(arg0: number | java.lang.Long): java.time.LocalDate
      public query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$lambda<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): number
      daysUntil(arg0: java.time.LocalDate): number
      public until(arg0: java.time.chrono.ChronoLocalDate): java.time.Period
      public datesUntil(arg0: java.time.LocalDate): java.util.stream.Stream<java.time.LocalDate>
      public datesUntil(arg0: java.time.LocalDate, arg1: java.time.Period): java.util.stream.Stream<java.time.LocalDate>
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public atTime(arg0: java.time.LocalTime): java.time.LocalDateTime
      public atTime(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.time.LocalDateTime
      public atTime(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.time.LocalDateTime
      public atTime(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): java.time.LocalDateTime
      public atTime(arg0: java.time.OffsetTime): java.time.OffsetDateTime
      public atStartOfDay(): java.time.LocalDateTime
      public atStartOfDay(arg0: java.time.ZoneId): java.time.ZonedDateTime
      public toEpochDay(): number
      public toEpochSecond(arg0: java.time.LocalTime, arg1: java.time.ZoneOffset): number
      public compareTo(arg0: java.time.chrono.ChronoLocalDate): number
      compareTo0(arg0: java.time.LocalDate): number
      public isAfter(arg0: java.time.chrono.ChronoLocalDate): boolean
      public isBefore(arg0: java.time.chrono.ChronoLocalDate): boolean
      public isEqual(arg0: java.time.chrono.ChronoLocalDate): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.DataInput): java.time.LocalDate
      public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.temporal.Temporal
      public with(
        arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda
      ): java.time.temporal.Temporal
      public atTime(arg0: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime
      public until(arg0: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
      public minus(
        arg0: number | java.lang.Long,
        arg1: java.time.temporal.TemporalUnit
      ): java.time.chrono.ChronoLocalDate
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
      public plus(
        arg0: number | java.lang.Long,
        arg1: java.time.temporal.TemporalUnit
      ): java.time.chrono.ChronoLocalDate
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
      public with(
        arg0: java.time.temporal.TemporalField,
        arg1: number | java.lang.Long
      ): java.time.chrono.ChronoLocalDate
      public with(
        arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda
      ): java.time.chrono.ChronoLocalDate
      public getEra(): java.time.chrono.Era
      public getChronology(): java.time.chrono.Chronology
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
