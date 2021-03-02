declare namespace java {
  namespace time {
    namespace chrono {

      class ThaiBuddhistDate extends java.time.chrono.ChronoLocalDateImpl<java.time.chrono.ThaiBuddhistDate> implements java.time.chrono.ChronoLocalDate, java.io.Serializable {
        public static now(): java.time.chrono.ThaiBuddhistDate
        public static now(arg0: java.time.ZoneId): java.time.chrono.ThaiBuddhistDate
        public static now(arg0: java.time.Clock): java.time.chrono.ThaiBuddhistDate
        public static of(arg0: int, arg1: int, arg2: int): java.time.chrono.ThaiBuddhistDate
        public static from(arg0: java.time.temporal.TemporalAccessor): java.time.chrono.ThaiBuddhistDate
        constructor(arg0: java.time.LocalDate)
        public getChronology(): java.time.chrono.ThaiBuddhistChronology
        public getEra(): java.time.chrono.ThaiBuddhistEra
        public lengthOfMonth(): int
        public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
        public getLong(arg0: java.time.temporal.TemporalField): long
        public with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.chrono.ThaiBuddhistDate
        public with(arg0: java.time.temporal.TemporalAdjuster): java.time.chrono.ThaiBuddhistDate
        public plus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ThaiBuddhistDate
        public minus(arg0: java.time.temporal.TemporalAmount): java.time.chrono.ThaiBuddhistDate
        plusYears(arg0: long): java.time.chrono.ThaiBuddhistDate
        plusMonths(arg0: long): java.time.chrono.ThaiBuddhistDate
        plusWeeks(arg0: long): java.time.chrono.ThaiBuddhistDate
        plusDays(arg0: long): java.time.chrono.ThaiBuddhistDate
        public plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ThaiBuddhistDate
        public minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.chrono.ThaiBuddhistDate
        minusYears(arg0: long): java.time.chrono.ThaiBuddhistDate
        minusMonths(arg0: long): java.time.chrono.ThaiBuddhistDate
        minusWeeks(arg0: long): java.time.chrono.ThaiBuddhistDate
        minusDays(arg0: long): java.time.chrono.ThaiBuddhistDate
        public atTime(arg0: java.time.LocalTime): java.time.chrono.ChronoLocalDateTime<java.time.chrono.ThaiBuddhistDate>
        public until(arg0: java.time.chrono.ChronoLocalDate): java.time.chrono.ChronoPeriod
        public toEpochDay(): long
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        writeExternal(arg0: java.io.DataOutput): void
        static readExternal(arg0: java.io.DataInput): java.time.chrono.ThaiBuddhistDate
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
