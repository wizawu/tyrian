declare namespace java {
  namespace time {
    namespace zone {

      class ZoneOffsetTransitionRule$TimeDefinition extends java.lang.Enum<java.time.zone.ZoneOffsetTransitionRule$TimeDefinition> {
        public static readonly UTC: java.time.zone.ZoneOffsetTransitionRule$TimeDefinition
        public static readonly WALL: java.time.zone.ZoneOffsetTransitionRule$TimeDefinition
        public static readonly STANDARD: java.time.zone.ZoneOffsetTransitionRule$TimeDefinition
        public static values(): java.time.zone.ZoneOffsetTransitionRule$TimeDefinition[]
        public static valueOf(arg0: java.lang.String | string): java.time.zone.ZoneOffsetTransitionRule$TimeDefinition
        public createDateTime(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: java.time.ZoneOffset): java.time.LocalDateTime
      }

    }
  }
}
