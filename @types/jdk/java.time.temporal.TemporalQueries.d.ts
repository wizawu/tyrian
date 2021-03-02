declare namespace java {
  namespace time {
    namespace temporal {

      class TemporalQueries {
        static readonly ZONE_ID: java.time.temporal.TemporalQuery<java.time.ZoneId>
        static readonly CHRONO: java.time.temporal.TemporalQuery<java.time.chrono.Chronology>
        static readonly PRECISION: java.time.temporal.TemporalQuery<java.time.temporal.TemporalUnit>
        static readonly OFFSET: java.time.temporal.TemporalQuery<java.time.ZoneOffset>
        static readonly ZONE: java.time.temporal.TemporalQuery<java.time.ZoneId>
        static readonly LOCAL_DATE: java.time.temporal.TemporalQuery<java.time.LocalDate>
        static readonly LOCAL_TIME: java.time.temporal.TemporalQuery<java.time.LocalTime>
        public static zoneId(): java.time.temporal.TemporalQuery<java.time.ZoneId>
        public static chronology(): java.time.temporal.TemporalQuery<java.time.chrono.Chronology>
        public static precision(): java.time.temporal.TemporalQuery<java.time.temporal.TemporalUnit>
        public static zone(): java.time.temporal.TemporalQuery<java.time.ZoneId>
        public static offset(): java.time.temporal.TemporalQuery<java.time.ZoneOffset>
        public static localDate(): java.time.temporal.TemporalQuery<java.time.LocalDate>
        public static localTime(): java.time.temporal.TemporalQuery<java.time.LocalTime>
      }

    }
  }
}
