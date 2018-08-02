declare namespace java {
    namespace time {
        namespace temporal {
class WeekFields$ComputedDayOfField implements java.time.temporal.TemporalField {
    public getFrom(arg0: java.time.temporal.TemporalAccessor): long
    public adjustInto<R extends java.time.temporal.Temporal>(arg0: R, arg1: long): R
    public resolve<R extends java.time.temporal.Temporal>(arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>, arg1: java.time.temporal.TemporalAccessor, arg2: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate
    public getDisplayName<R extends java.time.temporal.Temporal>(arg0: java.util.Locale): string
    public getBaseUnit<R extends java.time.temporal.Temporal>(): java.time.temporal.TemporalUnit
    public getRangeUnit<R extends java.time.temporal.Temporal>(): java.time.temporal.TemporalUnit
    public isDateBased<R extends java.time.temporal.Temporal>(): boolean
    public isTimeBased<R extends java.time.temporal.Temporal>(): boolean
    public range<R extends java.time.temporal.Temporal>(): java.time.temporal.ValueRange
    public isSupportedBy<R extends java.time.temporal.Temporal>(arg0: java.time.temporal.TemporalAccessor): boolean
    public rangeRefinedBy<R extends java.time.temporal.Temporal>(arg0: java.time.temporal.TemporalAccessor): java.time.temporal.ValueRange
    public toString<R extends java.time.temporal.Temporal>(): string
    public resolve<R extends java.time.temporal.Temporal>(arg0: java.util.Map, arg1: java.time.temporal.TemporalAccessor, arg2: java.time.format.ResolverStyle): java.time.temporal.TemporalAccessor
    public static class: java.lang.Class<any>
}

        }
    }
}