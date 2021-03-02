declare namespace java {
  namespace time {
    namespace temporal {

      class ChronoUnit extends java.lang.Enum<java.time.temporal.ChronoUnit> implements java.time.temporal.TemporalUnit {
        public static readonly NANOS: java.time.temporal.ChronoUnit
        public static readonly MICROS: java.time.temporal.ChronoUnit
        public static readonly MILLIS: java.time.temporal.ChronoUnit
        public static readonly SECONDS: java.time.temporal.ChronoUnit
        public static readonly MINUTES: java.time.temporal.ChronoUnit
        public static readonly HOURS: java.time.temporal.ChronoUnit
        public static readonly HALF_DAYS: java.time.temporal.ChronoUnit
        public static readonly DAYS: java.time.temporal.ChronoUnit
        public static readonly WEEKS: java.time.temporal.ChronoUnit
        public static readonly MONTHS: java.time.temporal.ChronoUnit
        public static readonly YEARS: java.time.temporal.ChronoUnit
        public static readonly DECADES: java.time.temporal.ChronoUnit
        public static readonly CENTURIES: java.time.temporal.ChronoUnit
        public static readonly MILLENNIA: java.time.temporal.ChronoUnit
        public static readonly ERAS: java.time.temporal.ChronoUnit
        public static readonly FOREVER: java.time.temporal.ChronoUnit
        public static values(): java.time.temporal.ChronoUnit[]
        public static valueOf(arg0: java.lang.String): java.time.temporal.ChronoUnit
        public getDuration(): java.time.Duration
        public isDurationEstimated(): boolean
        public isDateBased(): boolean
        public isTimeBased(): boolean
        public isSupportedBy(arg0: java.time.temporal.Temporal): boolean
        public addTo<R extends java.time.temporal.Temporal>(arg0: R, arg1: long): R
        public between(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.Temporal): long
        public toString(): java.lang.String
      }

    }
  }
}
