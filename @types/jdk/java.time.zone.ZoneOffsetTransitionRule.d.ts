declare namespace java {
  namespace time {
    namespace zone {
      class ZoneOffsetTransitionRule implements java.io.Serializable {
        static readonly $assertionsDisabled: boolean
        public static of(
          arg0: java.time.Month,
          arg1: number | java.lang.Integer,
          arg2: java.time.DayOfWeek,
          arg3: java.time.LocalTime,
          arg4: boolean | java.lang.Boolean,
          arg5: java.time.zone.ZoneOffsetTransitionRule$TimeDefinition,
          arg6: java.time.ZoneOffset,
          arg7: java.time.ZoneOffset,
          arg8: java.time.ZoneOffset
        ): java.time.zone.ZoneOffsetTransitionRule
        constructor(
          arg0: java.time.Month,
          arg1: number | java.lang.Integer,
          arg2: java.time.DayOfWeek,
          arg3: java.time.LocalTime,
          arg4: boolean | java.lang.Boolean,
          arg5: java.time.zone.ZoneOffsetTransitionRule$TimeDefinition,
          arg6: java.time.ZoneOffset,
          arg7: java.time.ZoneOffset,
          arg8: java.time.ZoneOffset
        )
        writeExternal(arg0: java.io.DataOutput): void
        static readExternal(arg0: java.io.DataInput): java.time.zone.ZoneOffsetTransitionRule
        public getMonth(): java.time.Month
        public getDayOfMonthIndicator(): number
        public getDayOfWeek(): java.time.DayOfWeek
        public getLocalTime(): java.time.LocalTime
        public isMidnightEndOfDay(): boolean
        public getTimeDefinition(): java.time.zone.ZoneOffsetTransitionRule$TimeDefinition
        public getStandardOffset(): java.time.ZoneOffset
        public getOffsetBefore(): java.time.ZoneOffset
        public getOffsetAfter(): java.time.ZoneOffset
        public createTransition(arg0: number | java.lang.Integer): java.time.zone.ZoneOffsetTransition
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }
    }
  }
}
