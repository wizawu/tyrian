declare namespace java {
  namespace time {
    namespace chrono {
      class JapaneseDate
        extends java.time.chrono.ChronoLocalDateImpl<java.time.chrono.JapaneseDate>
        implements java.time.chrono.ChronoLocalDate, java.io.Serializable
      {
        static readonly MEIJI_6_ISODATE: java.time.LocalDate
        public static now(): java.time.chrono.JapaneseDate
        public static now(arg0: java.time.ZoneId): java.time.chrono.JapaneseDate
        public static now(arg0: java.time.Clock): java.time.chrono.JapaneseDate
        public static of(
          arg0: java.time.chrono.JapaneseEra,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): java.time.chrono.JapaneseDate
        public static of(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.chrono.JapaneseDate
        static ofYearDay(
          arg0: java.time.chrono.JapaneseEra,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.time.chrono.JapaneseDate
        public static from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.JapaneseDate
        constructor(arg0: java.time.LocalDate)
        constructor(arg0: java.time.chrono.JapaneseEra, arg1: number | java.lang.Integer, arg2: java.time.LocalDate)
        public getChronology(): java.time.chrono.JapaneseChronology
        public getEra(): java.time.chrono.JapaneseEra
        public lengthOfMonth(): number
        public lengthOfYear(): number
        public isSupported(arg0: java.time.temporal.TemporalField): boolean
        public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
        public getLong(arg0: java.time.temporal.TemporalField): number
        public with(
          arg0: java.time.temporal.TemporalField,
          arg1: number | java.lang.Long
        ): java.time.chrono.JapaneseDate
        public with(
          arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda
        ): java.time.chrono.JapaneseDate
        public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.JapaneseDate
        public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.JapaneseDate
        plusYears(arg0: number | java.lang.Long): java.time.chrono.JapaneseDate
        plusMonths(arg0: number | java.lang.Long): java.time.chrono.JapaneseDate
        plusWeeks(arg0: number | java.lang.Long): java.time.chrono.JapaneseDate
        plusDays(arg0: number | java.lang.Long): java.time.chrono.JapaneseDate
        public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.JapaneseDate
        public minus(
          arg0: number | java.lang.Long,
          arg1: java.time.temporal.TemporalUnit
        ): java.time.chrono.JapaneseDate
        minusYears(arg0: number | java.lang.Long): java.time.chrono.JapaneseDate
        minusMonths(arg0: number | java.lang.Long): java.time.chrono.JapaneseDate
        minusWeeks(arg0: number | java.lang.Long): java.time.chrono.JapaneseDate
        minusDays(arg0: number | java.lang.Long): java.time.chrono.JapaneseDate
        public atTime(arg0: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime<java.time.chrono.JapaneseDate>
        public until(arg0: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
        public toEpochDay(): number
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        writeExternal(arg0: java.io.DataOutput): void
        static readExternal(arg0: java.io.DataInput): java.time.chrono.JapaneseDate
        public toString(): java.lang.String
        public until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): number
        minusDays(arg0: number | java.lang.Long): java.time.chrono.ChronoLocalDate
        minusWeeks(arg0: number | java.lang.Long): java.time.chrono.ChronoLocalDate
        minusMonths(arg0: number | java.lang.Long): java.time.chrono.ChronoLocalDate
        minusYears(arg0: number | java.lang.Long): java.time.chrono.ChronoLocalDate
        plusDays(arg0: number | java.lang.Long): java.time.chrono.ChronoLocalDate
        plusWeeks(arg0: number | java.lang.Long): java.time.chrono.ChronoLocalDate
        plusMonths(arg0: number | java.lang.Long): java.time.chrono.ChronoLocalDate
        plusYears(arg0: number | java.lang.Long): java.time.chrono.ChronoLocalDate
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
        public minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        public minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        public plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        public plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        public with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.temporal.Temporal
        public with(
          arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda
        ): java.time.temporal.Temporal
      }
    }
  }
}
