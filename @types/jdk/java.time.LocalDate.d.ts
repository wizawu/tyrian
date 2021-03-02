declare namespace java {
  namespace time {

    class LocalDate implements java.time.temporal.Temporal, java.time.temporal.TemporalAdjuster, java.time.chrono.ChronoLocalDate, java.io.Serializable {
      public static readonly MIN: java.time.LocalDate
      public static readonly MAX: java.time.LocalDate
      public static readonly EPOCH: java.time.LocalDate
      static readonly DAYS_0000_TO_1970: long
      public static now(): java.time.LocalDate
      public static now(arg0: java.time.ZoneId): java.time.LocalDate
      public static now(arg0: java.time.Clock): java.time.LocalDate
      public static of(arg0: int, arg1: java.time.Month, arg2: int): java.time.LocalDate
      public static of(arg0: int, arg1: int, arg2: int): java.time.LocalDate
      public static ofYearDay(arg0: int, arg1: int): java.time.LocalDate
      public static ofInstant(arg0: java.time.Instant, arg1: java.time.ZoneId): java.time.LocalDate
      public static ofEpochDay(arg0: long): java.time.LocalDate
      public static from(arg0: java.time.temporal.TemporalAccessor): java.time.LocalDate
      public static parse(arg0: java.lang.CharSequence): java.time.LocalDate
      public static parse(arg0: java.lang.CharSequence, arg1: java.time.format.DateTimeFormatter): java.time.LocalDate
      public isSupported(arg0: java.time.temporal.TemporalField): boolean
      public isSupported(arg0: java.time.temporal.TemporalUnit): boolean
      public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
      public get(arg0: java.time.temporal.TemporalField): int
      public getLong(arg0: java.time.temporal.TemporalField): long
      public getChronology(): java.time.chrono.IsoChronology
      public getEra(): java.time.chrono.IsoEra
      public getYear(): int
      public getMonthValue(): int
      public getMonth(): java.time.Month
      public getDayOfMonth(): int
      public getDayOfYear(): int
      public getDayOfWeek(): java.time.DayOfWeek
      public isLeapYear(): boolean
      public lengthOfMonth(): int
      public lengthOfYear(): int
      public with(arg0: java.time.temporal.TemporalAdjuster): java.time.LocalDate
      public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.LocalDate
      public withYear(arg0: int): java.time.LocalDate
      public withMonth(arg0: int): java.time.LocalDate
      public withDayOfMonth(arg0: int): java.time.LocalDate
      public withDayOfYear(arg0: int): java.time.LocalDate
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.LocalDate
      public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.LocalDate
      public plusYears(arg0: long): java.time.LocalDate
      public plusMonths(arg0: long): java.time.LocalDate
      public plusWeeks(arg0: long): java.time.LocalDate
      public plusDays(arg0: long): java.time.LocalDate
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.LocalDate
      public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.LocalDate
      public minusYears(arg0: long): java.time.LocalDate
      public minusMonths(arg0: long): java.time.LocalDate
      public minusWeeks(arg0: long): java.time.LocalDate
      public minusDays(arg0: long): java.time.LocalDate
      public query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
      public adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
      public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
      daysUntil(arg0: java.time.LocalDate): long
      public until(arg0: java.time.chrono.ChronoLocalDate): java.time.Period
      public datesUntil(arg0: java.time.LocalDate): java.util.stream.Stream<java.time.LocalDate>
      public datesUntil(arg0: java.time.LocalDate, arg1: java.time.Period): java.util.stream.Stream<java.time.LocalDate>
      public format(arg0: java.time.format.DateTimeFormatter): java.lang.String
      public atTime(arg0: java.time.LocalTime): java.time.LocalDateTime
      public atTime(arg0: int, arg1: int): java.time.LocalDateTime
      public atTime(arg0: int, arg1: int, arg2: int): java.time.LocalDateTime
      public atTime(arg0: int, arg1: int, arg2: int, arg3: int): java.time.LocalDateTime
      public atTime(arg0: java.time.OffsetTime): java.time.OffsetDateTime
      public atStartOfDay(): java.time.LocalDateTime
      public atStartOfDay(arg0: java.time.ZoneId): java.time.ZonedDateTime
      public toEpochDay(): long
      public toEpochSecond(arg0: java.time.LocalTime, arg1: java.time.ZoneOffset): long
      public compareTo(arg0: java.time.chrono.ChronoLocalDate): int
      compareTo0(arg0: java.time.LocalDate): int
      public isAfter(arg0: java.time.chrono.ChronoLocalDate): boolean
      public isBefore(arg0: java.time.chrono.ChronoLocalDate): boolean
      public isEqual(arg0: java.time.chrono.ChronoLocalDate): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      writeExternal(arg0: java.io.DataOutput): void
      static readExternal(arg0: java.io.DataInput): java.time.LocalDate
      public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
      public with(arg0: java.time.temporal.TemporalAdjuster): java.time.temporal.Temporal
      public atTime(arg0: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime
      public until(arg0: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
      public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
      public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
      public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
      public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
      public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoLocalDate
      public with(arg0: java.time.temporal.TemporalAdjuster): java.time.chrono.ChronoLocalDate
      public getEra(): java.time.chrono.Era
      public getChronology(): java.time.chrono.Chronology
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
