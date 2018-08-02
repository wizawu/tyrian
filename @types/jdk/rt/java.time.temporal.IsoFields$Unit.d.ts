declare namespace java {
    namespace time {
        namespace temporal {
            class IsoFields$Unit extends java.lang.Enum<java.time.temporal.IsoFields$Unit> implements java.time.temporal.TemporalUnit {
                public static WEEK_BASED_YEARS: java.time.temporal.IsoFields$Unit
                public static QUARTER_YEARS: java.time.temporal.IsoFields$Unit
                public static values(): java.time.temporal.IsoFields$Unit[]
                public static valueOf(arg0: java.lang.String | string): java.time.temporal.IsoFields$Unit
                public getDuration(): java.time.Duration
                public isDurationEstimated(): boolean
                public isDateBased(): boolean
                public isTimeBased(): boolean
                public isSupportedBy(arg0: java.time.temporal.Temporal): boolean
                public addTo<R extends java.time.temporal.Temporal>(arg0: R, arg1: long): R
                public between<R extends java.time.temporal.Temporal>(arg0: java.time.temporal.Temporal, arg1: java.time.temporal.Temporal): long
                public toString<R extends java.time.temporal.Temporal>(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}