declare namespace java {
  namespace time {
    namespace temporal {
      interface Temporal extends java.time.temporal.TemporalAccessor {
        isSupported(arg0: java.time.temporal.TemporalUnit): boolean
        with(
          arg0: java.time.temporal.TemporalAdjuster | java.time.temporal.TemporalAdjuster$$lambda
        ): java.time.temporal.Temporal
        with(arg0: java.time.temporal.TemporalField, arg1: number | java.lang.Long): java.time.temporal.Temporal
        plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        plus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        minus(arg0: number | java.lang.Long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): number
      }
    }
  }
}
