declare namespace java {
    namespace time {
        namespace temporal {
abstract class IsoFields$Field extends java.lang.Enum<java.time.temporal.IsoFields$Field> implements java.time.temporal.TemporalField {
    public static DAY_OF_QUARTER: java.time.temporal.IsoFields$Field
    public static QUARTER_OF_YEAR: java.time.temporal.IsoFields$Field
    public static WEEK_OF_WEEK_BASED_YEAR: java.time.temporal.IsoFields$Field
    public static WEEK_BASED_YEAR: java.time.temporal.IsoFields$Field
    public static values(): java.time.temporal.IsoFields$Field[]
    public static valueOf(arg0: java.lang.String | string): java.time.temporal.IsoFields$Field
    public isDateBased(): boolean
    public isTimeBased(): boolean
    public rangeRefinedBy(arg0: java.time.temporal.TemporalAccessor): java.time.temporal.ValueRange
    public static class: java.lang.Class<any>
}

        }
    }
}