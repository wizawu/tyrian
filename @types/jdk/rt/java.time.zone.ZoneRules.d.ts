declare namespace java {
    namespace time {
        namespace zone {
class ZoneRules implements java.io.Serializable {
    public static of(arg0: java.time.ZoneOffset, arg1: java.time.ZoneOffset, arg2: java.util.List<java.time.zone.ZoneOffsetTransition>, arg3: java.util.List<java.time.zone.ZoneOffsetTransition>, arg4: java.util.List<java.time.zone.ZoneOffsetTransitionRule>): java.time.zone.ZoneRules
    public static of(arg0: java.time.ZoneOffset): java.time.zone.ZoneRules
    public isFixedOffset(): boolean
    public getOffset(arg0: java.time.Instant): java.time.ZoneOffset
    public getOffset(arg0: java.time.LocalDateTime): java.time.ZoneOffset
    public getValidOffsets(arg0: java.time.LocalDateTime): java.util.List<java.time.ZoneOffset>
    public getTransition(arg0: java.time.LocalDateTime): java.time.zone.ZoneOffsetTransition
    public getStandardOffset(arg0: java.time.Instant): java.time.ZoneOffset
    public getDaylightSavings(arg0: java.time.Instant): java.time.Duration
    public isDaylightSavings(arg0: java.time.Instant): boolean
    public isValidOffset(arg0: java.time.LocalDateTime, arg1: java.time.ZoneOffset): boolean
    public nextTransition(arg0: java.time.Instant): java.time.zone.ZoneOffsetTransition
    public previousTransition(arg0: java.time.Instant): java.time.zone.ZoneOffsetTransition
    public getTransitions(): java.util.List<java.time.zone.ZoneOffsetTransition>
    public getTransitionRules(): java.util.List<java.time.zone.ZoneOffsetTransitionRule>
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}