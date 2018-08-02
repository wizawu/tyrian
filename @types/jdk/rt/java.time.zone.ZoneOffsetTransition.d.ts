declare namespace java {
    namespace time {
        namespace zone {
            class ZoneOffsetTransition implements java.lang.Comparable<java.time.zone.ZoneOffsetTransition> , java.io.Serializable {
                public static of(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset, arg2: java.time.ZoneOffset): java.time.zone.ZoneOffsetTransition
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
                public compareTo(arg0: java.time.zone.ZoneOffsetTransition): int
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public compareTo(arg0: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
        }
    }
}