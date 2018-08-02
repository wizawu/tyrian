declare namespace java {
    namespace time {
        namespace temporal {
            class ChronoField extends java.lang.Enum<java.time.temporal.ChronoField> implements java.time.temporal.TemporalField {
                public static NANO_OF_SECOND: java.time.temporal.ChronoField
                public static NANO_OF_DAY: java.time.temporal.ChronoField
                public static MICRO_OF_SECOND: java.time.temporal.ChronoField
                public static MICRO_OF_DAY: java.time.temporal.ChronoField
                public static MILLI_OF_SECOND: java.time.temporal.ChronoField
                public static MILLI_OF_DAY: java.time.temporal.ChronoField
                public static SECOND_OF_MINUTE: java.time.temporal.ChronoField
                public static SECOND_OF_DAY: java.time.temporal.ChronoField
                public static MINUTE_OF_HOUR: java.time.temporal.ChronoField
                public static MINUTE_OF_DAY: java.time.temporal.ChronoField
                public static HOUR_OF_AMPM: java.time.temporal.ChronoField
                public static CLOCK_HOUR_OF_AMPM: java.time.temporal.ChronoField
                public static HOUR_OF_DAY: java.time.temporal.ChronoField
                public static CLOCK_HOUR_OF_DAY: java.time.temporal.ChronoField
                public static AMPM_OF_DAY: java.time.temporal.ChronoField
                public static DAY_OF_WEEK: java.time.temporal.ChronoField
                public static ALIGNED_DAY_OF_WEEK_IN_MONTH: java.time.temporal.ChronoField
                public static ALIGNED_DAY_OF_WEEK_IN_YEAR: java.time.temporal.ChronoField
                public static DAY_OF_MONTH: java.time.temporal.ChronoField
                public static DAY_OF_YEAR: java.time.temporal.ChronoField
                public static EPOCH_DAY: java.time.temporal.ChronoField
                public static ALIGNED_WEEK_OF_MONTH: java.time.temporal.ChronoField
                public static ALIGNED_WEEK_OF_YEAR: java.time.temporal.ChronoField
                public static MONTH_OF_YEAR: java.time.temporal.ChronoField
                public static PROLEPTIC_MONTH: java.time.temporal.ChronoField
                public static YEAR_OF_ERA: java.time.temporal.ChronoField
                public static YEAR: java.time.temporal.ChronoField
                public static ERA: java.time.temporal.ChronoField
                public static INSTANT_SECONDS: java.time.temporal.ChronoField
                public static OFFSET_SECONDS: java.time.temporal.ChronoField
                public static values(): java.time.temporal.ChronoField[]
                public static valueOf(arg0: java.lang.String | string): java.time.temporal.ChronoField
                public getDisplayName(arg0: java.util.Locale): string
                public getBaseUnit(): java.time.temporal.TemporalUnit
                public getRangeUnit(): java.time.temporal.TemporalUnit
                public range(): java.time.temporal.ValueRange
                public isDateBased(): boolean
                public isTimeBased(): boolean
                public checkValidValue(arg0: long): long
                public checkValidIntValue(arg0: long): int
                public isSupportedBy(arg0: java.time.temporal.TemporalAccessor): boolean
                public rangeRefinedBy(arg0: java.time.temporal.TemporalAccessor): java.time.temporal.ValueRange
                public getFrom(arg0: java.time.temporal.TemporalAccessor): long
                public adjustInto<R extends java.time.temporal.Temporal>(arg0: R, arg1: long): R
                public toString<R extends java.time.temporal.Temporal>(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}