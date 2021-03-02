declare namespace java {
  namespace time {
    namespace temporal {

      interface TemporalAccessor {
        isSupported(arg0: java.time.temporal.TemporalField): boolean
        range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
        get(arg0: java.time.temporal.TemporalField): int
        getLong(arg0: java.time.temporal.TemporalField): long
        query<R>(arg0: java.time.temporal.TemporalQuery<R>): R
      }

    }
  }
}
