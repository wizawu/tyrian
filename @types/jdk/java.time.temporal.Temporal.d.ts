declare namespace java {
  namespace time {
    namespace temporal {

      interface Temporal extends java.time.temporal.TemporalAccessor {
        isSupported(arg0: java.time.temporal.TemporalUnit): boolean
        with(arg0: java.time.temporal.TemporalAdjuster): java.time.temporal.Temporal
        with(arg0: java.time.temporal.TemporalField, arg1: long): java.time.temporal.Temporal
        plus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        plus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        minus(arg0: java.time.temporal.TemporalAmount): java.time.temporal.Temporal
        minus(arg0: long, arg1: java.time.temporal.TemporalUnit): java.time.temporal.Temporal
        until(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.TemporalUnit): long
      }

    }
  }
}
