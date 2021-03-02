declare namespace java {
  namespace time {
    namespace chrono {

      class JapaneseDate extends java.time.chrono.ChronoLocalDateImpl<java.time.chrono.JapaneseDate> implements java.time.chrono.ChronoLocalDate, java.io.Serializable {
        static readonly MEIJI_6_ISODATE: java.time.LocalDate
        public static now(): java.time.chrono.JapaneseDate
        public static now(arg0: java.time.ZoneId): java.time.chrono.JapaneseDate
        public static now(arg0: java.time.Clock): java.time.chrono.JapaneseDate
        public static of(arg0: java.time.chrono.JapaneseEra, arg1: int, arg2: int, arg3: int): java.time.chrono.JapaneseDate
        public static of(arg0: int, arg1: int, arg2: int): java.time.chrono.JapaneseDate
        static ofYearDay(arg0: java.time.chrono.JapaneseEra, arg1: int, arg2: int): java.time.chrono.JapaneseDate
        public static from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.JapaneseDate
        constructor(arg0: java.time.LocalDate)
        constructor(arg0: java.time.chrono.JapaneseEra, arg1: int, arg2: java.time.LocalDate)
        public getChronology(): java.time.chrono.JapaneseChronology
        public getEra(): java.time.chrono.JapaneseEra
        public lengthOfMonth(): int
        public lengthOfYear(): int
        public isSupported(arg0: java.time.temporal.TemporalField): boolean
        public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
        public getLong(arg0: java.time.temporal.TemporalField): long
        public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.JapaneseDate
        public with(arg0: java.time.temporal.TemporalAdjuster): java.time.chrono.JapaneseDate
        public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.JapaneseDate
        public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.JapaneseDate
        plusYears(arg0: long): java.time.chrono.JapaneseDate
        plusMonths(arg0: long): java.time.chrono.JapaneseDate
        plusWeeks(arg0: long): java.time.chrono.JapaneseDate
        plusDays(arg0: long): java.time.chrono.JapaneseDate
        public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.JapaneseDate
        public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.JapaneseDate
        minusYears(arg0: long): java.time.chrono.JapaneseDate
        minusMonths(arg0: long): java.time.chrono.JapaneseDate
        minusWeeks(arg0: long): java.time.chrono.JapaneseDate
        minusDays(arg0: long): java.time.chrono.JapaneseDate
        public atTime(arg0: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime<java.time.chrono.JapaneseDate>
        public until(arg0: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
        public toEpochDay(): long
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        writeExternal(arg0: java.io.DataOutput): void
        static readExternal(arg0: java.io.DataInput): java.time.chrono.JapaneseDate
        public toString(): java.lang.String
        public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
        minusDays(arg0: long): java.time.chrono.ChronoLocalDate
        minusWeeks(arg0: long): java.time.chrono.ChronoLocalDate
        minusMonths(arg0: long): java.time.chrono.ChronoLocalDate
        minusYears(arg0: long): java.time.chrono.ChronoLocalDate
        plusDays(arg0: long): java.time.chrono.ChronoLocalDate
        plusWeeks(arg0: long): java.time.chrono.ChronoLocalDate
        plusMonths(arg0: long): java.time.chrono.ChronoLocalDate
        plusYears(arg0: long): java.time.chrono.ChronoLocalDate
        public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
        public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
        public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ChronoLocalDate
        public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ChronoLocalDate
        public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ChronoLocalDate
        public with(arg0: java.time.temporal.TemporalAdjuster): java.time.chrono.ChronoLocalDate
        public getEra(): java.time.chrono.Era
        public getChronology(): java.time.chrono.Chronology
        public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
        public with(arg0: java.time.temporal.TemporalAdjuster): java.time.temporal.Temporal
      }

    }
  }
}
