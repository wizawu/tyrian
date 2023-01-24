declare namespace java {
  namespace time {
    namespace chrono {
      abstract class AbstractChronology implements java.time.chrono.Chronology {
        static registerChrono(arg0: java.time.chrono.Chronology): java.time.chrono.Chronology
        static registerChrono(
          arg0: java.time.chrono.Chronology,
          arg1: java.lang.String | string
        ): java.time.chrono.Chronology
        static ofLocale(arg0: java.util.Locale): java.time.chrono.Chronology
        static of(arg0: java.lang.String | string): java.time.chrono.Chronology
        static getAvailableChronologies(): java.util.Set<java.time.chrono.Chronology>
        protected constructor()
        public resolveDate(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.chrono.ChronoLocalDate
        resolveProlepticMonth(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): void
        resolveYearOfEra(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.chrono.ChronoLocalDate
        resolveYMD(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.chrono.ChronoLocalDate
        resolveYD(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.chrono.ChronoLocalDate
        resolveYMAA(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.chrono.ChronoLocalDate
        resolveYMAD(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.chrono.ChronoLocalDate
        resolveYAA(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.chrono.ChronoLocalDate
        resolveYAD(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.format.ResolverStyle
        ): java.time.chrono.ChronoLocalDate
        resolveAligned(
          arg0: java.time.chrono.ChronoLocalDate,
          arg1: number | java.lang.Long,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Long
        ): java.time.chrono.ChronoLocalDate
        addFieldValue(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.temporal.ChronoField,
          arg2: number | java.lang.Long
        ): void
        public compareTo(arg0: java.time.chrono.Chronology): number
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        writeReplace(): java.lang.Object
        writeExternal(arg0: java.io.DataOutput): void
        static readExternal(arg0: java.io.DataInput): java.time.chrono.Chronology
        public compareTo(arg0: java.lang.Object | any): number
      }
    }
  }
}
