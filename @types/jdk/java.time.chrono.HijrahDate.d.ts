declare namespace java {
  namespace time {
    namespace chrono {

      class HijrahDate extends java.time.chrono.ChronoLocalDateImpl<java.time.chrono.HijrahDate> implements java.time.chrono.ChronoLocalDate, java.io.Serializable {
        static of(arg0: java.time.chrono.HijrahChronology, arg1: int, arg2: int, arg3: int): java.time.chrono.HijrahDate
        static ofEpochDay(arg0: java.time.chrono.HijrahChronology, arg1: long): java.time.chrono.HijrahDate
        public static now(): java.time.chrono.HijrahDate
        public static now(arg0: java.time.ZoneId): java.time.chrono.HijrahDate
        public static now(arg0: java.time.Clock): java.time.chrono.HijrahDate
        public static of(arg0: int, arg1: int, arg2: int): java.time.chrono.HijrahDate
        public static from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.HijrahDate
        public getChronology(): java.time.chrono.HijrahChronology
        public getEra(): java.time.chrono.HijrahEra
        public lengthOfMonth(): int
        public lengthOfYear(): int
        public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
        public getLong(arg0: java.time.temporal.TemporalField): long
        public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.HijrahDate
        public with(arg0: java.time.temporal.TemporalAdjuster): java.time.chrono.HijrahDate
        public withVariant(arg0: java.time.chrono.HijrahChronology): java.time.chrono.HijrahDate
        public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.HijrahDate
        public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.HijrahDate
        public toEpochDay(): long
        public isLeapYear(): boolean
        plusYears(arg0: long): java.time.chrono.HijrahDate
        plusMonths(arg0: long): java.time.chrono.HijrahDate
        plusWeeks(arg0: long): java.time.chrono.HijrahDate
        plusDays(arg0: long): java.time.chrono.HijrahDate
        public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.HijrahDate
        public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.HijrahDate
        minusYears(arg0: long): java.time.chrono.HijrahDate
        minusMonths(arg0: long): java.time.chrono.HijrahDate
        minusWeeks(arg0: long): java.time.chrono.HijrahDate
        minusDays(arg0: long): java.time.chrono.HijrahDate
        public atTime(arg0: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime<java.time.chrono.HijrahDate>
        public until(arg0: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        writeExternal(arg0: java.io.ObjectOutput): void
        static readExternal(arg0: java.io.ObjectInput): java.time.chrono.HijrahDate
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
