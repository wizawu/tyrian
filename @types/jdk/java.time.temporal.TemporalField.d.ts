declare namespace java {
  namespace time {
    namespace temporal {
      interface TemporalField {
        getDisplayName(arg0: java.util.Locale): java.lang.String
        getBaseUnit(): java.time.temporal.TemporalUnit
        getRangeUnit(): java.time.temporal.TemporalUnit
        range(): java.time.temporal.ValueRange
        isDateBased(): boolean
        isTimeBased(): boolean
        isSupportedBy(arg0: java.time.temporal.TemporalAccessor): boolean
        rangeRefinedBy(arg0: java.time.temporal.TemporalAccessor): java.time.temporal.ValueRange
        getFrom(arg0: java.time.temporal.TemporalAccessor): number
        adjustInto<R extends java.time.temporal.Temporal>(arg0: R, arg1: number | java.lang.Long): R
        resolve(
          arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>,
          arg1: java.time.temporal.TemporalAccessor,
          arg2: java.time.format.ResolverStyle
        ): java.time.temporal.TemporalAccessor
        toString(): java.lang.String
      }
    }
  }
}
