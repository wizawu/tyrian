declare namespace java {
    namespace time {
        namespace temporal {
            class IsoFields$Field$1 extends java.time.temporal.IsoFields$Field {
                public getBaseUnit(): java.time.temporal.TemporalUnit
                public getRangeUnit(): java.time.temporal.TemporalUnit
                public range(): java.time.temporal.ValueRange
                public isSupportedBy(arg0: java.time.temporal.TemporalAccessor): boolean
                public rangeRefinedBy(arg0: java.time.temporal.TemporalAccessor): java.time.temporal.ValueRange
                public getFrom(arg0: java.time.temporal.TemporalAccessor): long
                public adjustInto<R extends java.time.temporal.Temporal>(arg0: R, arg1: long): R
                public resolve<R extends java.time.temporal.Temporal>(arg0: java.util.Map<java.time.temporal.TemporalField, java.lang.Long>, arg1: java.time.temporal.TemporalAccessor, arg2: java.time.format.ResolverStyle): java.time.chrono.ChronoLocalDate
                public toString<R extends java.time.temporal.Temporal>(): string
                public resolve<R extends java.time.temporal.Temporal>(arg0: java.util.Map, arg1: java.time.temporal.TemporalAccessor, arg2: java.time.format.ResolverStyle): java.time.temporal.TemporalAccessor
                public static class: java.lang.Class<any>
            }
        }
    }
}