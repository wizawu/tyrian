declare namespace java {
  namespace time {
    namespace chrono {
      interface Era extends java.time.temporal.TemporalAccessor, java.time.temporal.TemporalAdjuster {
        getValue(): number
        isSupported(arg0: java.time.temporal.TemporalField): boolean
        range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
        get(arg0: java.time.temporal.TemporalField): number
        getLong(arg0: java.time.temporal.TemporalField): number
        query<R>(arg0: java.time.temporal.TemporalQuery<R> | java.time.temporal.TemporalQuery$$lambda<R>): R
        adjustInto(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
        getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): java.lang.String
      }
    }
  }
}
