declare namespace java {
  namespace time {
    namespace zone {

      class ZoneOffsetTransition implements java.lang.Comparable<java.time.zone.ZoneOffsetTransition>, java.io.Serializable {
        static readonly $assertionsDisabled: boolean
        public static of(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: java.time.ZoneOffset): java.time.zone.ZoneOffsetTransition
        constructor(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: java.time.ZoneOffset)
        constructor(arg0: long, arg1: java.time.ZoneOffset, arg2: java.time.ZoneOffset)
        writeExternal(arg0: java.io.DataOutput): void
        static readExternal(arg0: java.io.DataInput): java.time.zone.ZoneOffsetTransition
        public getInstant(): java.time.Instant
        public toEpochSecond(): long
        public getDateTimeBefore(): java.time.LocalDateTime
        public getDateTimeAfter(): java.time.LocalDateTime
        public getOffsetBefore(): java.time.ZoneOffset
        public getOffsetAfter(): java.time.ZoneOffset
        public getDuration(): java.time.Duration
        public isGap(): boolean
        public isOverlap(): boolean
        public isValidOffset(arg0: java.time.ZoneOffset): boolean
        getValidOffsets(): java.util.List<java.time.ZoneOffset>
        public compareTo(arg0: java.time.zone.ZoneOffsetTransition): int
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
        public compareTo(arg0: java.lang.Object): int
      }

    }
  }
}
