declare namespace java {
    namespace time {
        namespace temporal {
class ChronoUnit extends java.lang.Enum<java.time.temporal.ChronoUnit> implements java.time.temporal.TemporalUnit {
    public static NANOS: java.time.temporal.ChronoUnit
    public static MICROS: java.time.temporal.ChronoUnit
    public static MILLIS: java.time.temporal.ChronoUnit
    public static SECONDS: java.time.temporal.ChronoUnit
    public static MINUTES: java.time.temporal.ChronoUnit
    public static HOURS: java.time.temporal.ChronoUnit
    public static HALF_DAYS: java.time.temporal.ChronoUnit
    public static DAYS: java.time.temporal.ChronoUnit
    public static WEEKS: java.time.temporal.ChronoUnit
    public static MONTHS: java.time.temporal.ChronoUnit
    public static YEARS: java.time.temporal.ChronoUnit
    public static DECADES: java.time.temporal.ChronoUnit
    public static CENTURIES: java.time.temporal.ChronoUnit
    public static MILLENNIA: java.time.temporal.ChronoUnit
    public static ERAS: java.time.temporal.ChronoUnit
    public static FOREVER: java.time.temporal.ChronoUnit
    public static values(): java.time.temporal.ChronoUnit[]
    public static valueOf(arg0: java.lang.String | string): java.time.temporal.ChronoUnit
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