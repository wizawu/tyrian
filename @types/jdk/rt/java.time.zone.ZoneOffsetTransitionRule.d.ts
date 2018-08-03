declare namespace java {
    namespace time {
        namespace zone {
            class ZoneOffsetTransitionRule implements java.io.Serializable {
                public static of(arg0: java.time.Month, arg1: int, arg2: java.time.DayOfWeek, arg3: java.time.LocalTime, arg4: boolean, arg5: java.time.zone.ZoneOffsetTransitionRule$TimeDefinition, arg6: java.time.ZoneOffset, arg7: java.time.ZoneOffset, arg8: java.time.ZoneOffset): java.time.zone.ZoneOffsetTransitionRule
                public getMonth(): java.time.Month
                public getDayOfMonthIndicator(): int
                public getDayOfWeek(): java.time.DayOfWeek
                public getLocalTime(): java.time.LocalTime
                public isMidnightEndOfDay(): boolean
                public getTimeDefinition(): java.time.zone.ZoneOffsetTransitionRule$TimeDefinition
                public getStandardOffset(): java.time.ZoneOffset
                public getOffsetBefore(): java.time.ZoneOffset
                public getOffsetAfter(): java.time.ZoneOffset
                public createTransition(arg0: int): java.time.zone.ZoneOffsetTransition
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}