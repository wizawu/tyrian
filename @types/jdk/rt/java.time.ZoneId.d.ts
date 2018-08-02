declare namespace java {
    namespace time {
abstract class ZoneId implements java.io.Serializable {
    public static SHORT_IDS: java.util.Map<java.lang.String, java.lang.String>
    public static systemDefault(): java.time.ZoneId
    public static getAvailableZoneIds(): java.util.Set<java.lang.String>
    public static of(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.String>): java.time.ZoneId
    public static of(arg0: java.lang.String | string): java.time.ZoneId
    public static ofOffset(arg0: java.lang.String | string, arg1: java.time.ZoneOffset): java.time.ZoneId
    public static from(arg0: java.time.temporal.TemporalAccessor): java.time.ZoneId
    public getId(): string
    public getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): string
    public getRules(): java.time.zone.ZoneRules
    public normalized(): java.time.ZoneId
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}