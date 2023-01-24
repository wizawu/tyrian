declare namespace java {
  namespace time {
    namespace temporal {
      interface TemporalUnit {
        getDuration(): java.time.Duration
        isDurationEstimated(): boolean
        isDateBased(): boolean
        isTimeBased(): boolean
        isSupportedBy(arg0: java.time.temporal.Temporal): boolean
        addTo<R extends java.time.temporal.Temporal>(arg0: R, arg1: number | java.lang.Long): R
        between(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.Temporal): number
        toString(): java.lang.String
      }
    }
  }
}
