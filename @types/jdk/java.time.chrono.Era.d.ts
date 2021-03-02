declare namespace java {
  namespace time {
    namespace chrono {

      interface Era extends java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster {
        getValue(): int
        isSupported(arg0: java.time.temporal.TemporalField): boolean
        range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
        get(arg0: java.time.temporal.TemporalField): int
        getLong(arg0: java.time.temporal.TemporalField): long
        query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
        getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): java.lang.String
      }

    }
  }
}
