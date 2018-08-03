declare namespace java {
    namespace time {
        namespace temporal {
            class WeekFields implements java.io.Serializable {
                public static ISO: java.time.temporal.WeekFields
                public static SUNDAY_START: java.time.temporal.WeekFields
                public static WEEK_BASED_YEARS: java.time.temporal.TemporalUnit
                public static of(arg0: java.util.Locale): java.time.temporal.WeekFields
                public static of(arg0: java.time.DayOfWeek, arg1: int): java.time.temporal.WeekFields
                public getFirstDayOfWeek(): java.time.DayOfWeek
                public getMinimalDaysInFirstWeek(): int
                public dayOfWeek(): java.time.temporal.TemporalField
                public weekOfMonth(): java.time.temporal.TemporalField
                public weekOfYear(): java.time.temporal.TemporalField
                public weekOfWeekBasedYear(): java.time.temporal.TemporalField
                public weekBasedYear(): java.time.temporal.TemporalField
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}